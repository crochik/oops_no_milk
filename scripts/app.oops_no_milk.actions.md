# `app.oops_no_milk.actions` — Action Scripts

> Index: [BOOTSTRAPP.md](../BOOTSTRAPP.md)
> Schemas: [schemas/app.oops_no_milk.actions.md](../schemas/app.oops_no_milk.actions.md)

## createHousehold

- **Target:** `app.oops_no_milk`.Household *(class scope)*
- **Input class:** `app.oops_no_milk.actions`.CreateHouseholdInput
- **Output class:** `app.oops_no_milk.actions`.CreateHouseholdOutput
- **External functions used:** `objects.create`, `auth.currentUser`,
  `time.now`, `uuid.v4`
- **Script:**
  ```typescript
  import "platform/objects" as objects;
  import "platform/auth"    as auth;
  import "platform/time"    as time;
  import "platform/uuid"    as uuid;

  function execute(input: CreateHouseholdInput): CreateHouseholdOutput {
    const user = auth.currentUser();
    const now = time.now();

    const householdId = uuid.v4();
    const rawCode = uuid.v4();
    const inviteCode = "MILK-" + rawCode.substring(0, 4).toUpperCase();

    const household = objects.create("app.oops_no_milk.Household", {
      _id: householdId,
      name: input.name,
      ownerId: user.id,
      inviteCode: inviteCode,
      createdAt: now
    });

    const membership = objects.create("app.oops_no_milk.Membership", {
      _id: uuid.v4(),
      householdId: householdId,
      userId: user.id,
      role: "owner",
      joinedAt: now
    });

    return {
      householdId: household._id,
      inviteCode: household.inviteCode,
      membershipId: membership._id
    };
  }
  ```
- **Notes:** Generates a short shareable invite code on the server.
  Creates Household and Membership atomically so a partial failure
  cannot leave a household without an owner.

## joinHousehold

- **Target:** `app.oops_no_milk`.Household *(class scope)*
- **Input class:** `app.oops_no_milk.actions`.JoinHouseholdInput
- **Output class:** `app.oops_no_milk.actions`.JoinHouseholdOutput
- **External functions used:** `objects.find`, `objects.create`,
  `auth.currentUser`, `time.now`, `uuid.v4`, `errors.fail`
- **Script:**
  ```typescript
  import "platform/objects" as objects;
  import "platform/auth"    as auth;
  import "platform/time"    as time;
  import "platform/uuid"    as uuid;
  import "platform/errors"  as errors;

  function execute(input: JoinHouseholdInput): JoinHouseholdOutput {
    const user = auth.currentUser();
    const now = time.now();

    const matches = objects.find(
      "app.oops_no_milk.Household",
      [{ field: "inviteCode", operator: "Eq", value: input.inviteCode }],
      ["_id", "inviteCode"]
    );
    if (matches.length == 0) {
      errors.fail("INVITE_NOT_FOUND", "No household matches that invite code.");
    }
    const household = matches[0];

    const existing = objects.find(
      "app.oops_no_milk.Membership",
      [
        { field: "householdId", operator: "Eq", value: household._id },
        { field: "userId",      operator: "Eq", value: user.id }
      ],
      ["_id"]
    );
    if (existing.length > 0) {
      errors.fail("ALREADY_MEMBER", "You are already a member of this household.");
    }

    const membership = objects.create("app.oops_no_milk.Membership", {
      _id: uuid.v4(),
      householdId: household._id,
      userId: user.id,
      role: "member",
      joinedAt: now
    });

    return {
      householdId: household._id,
      membershipId: membership._id
    };
  }
  ```
- **Notes:** Resolves the invite code via the indexed `inviteCode`
  field, then guards against duplicate membership by querying the
  indexed `householdId` + `userId` pair.

## markPurchased

- **Target:** `app.oops_no_milk`.Item *(instance scope)*
- **Input class:** `app.oops_no_milk.actions`.MarkPurchasedInput
- **Output class:** `app.oops_no_milk.actions`.MarkPurchasedOutput
- **External functions used:** `objects.load`, `objects.save`,
  `auth.currentUser`, `time.now`
- **Script:**
  ```typescript
  import "platform/objects" as objects;
  import "platform/auth"    as auth;
  import "platform/time"    as time;

  function execute(input: MarkPurchasedInput): MarkPurchasedOutput {
    const user = auth.currentUser();
    const item = objects.load("app.oops_no_milk.Item", input.id);

    if (item.status == "purchased") {
      return {
        itemId: item._id,
        status: item.status,
        purchasedAt: item.purchasedAt,
        purchasedById: item.purchasedById
      };
    }

    const now = time.now();
    item.status = "purchased";
    item.purchasedById = user.id;
    item.purchasedAt = now;
    if (input.purchasePriceCents != null) {
      item.purchasePriceCents = input.purchasePriceCents;
    }
    if (input.notes != null) {
      item.notes = input.notes;
    }
    objects.save(item);

    return {
      itemId: item._id,
      status: item.status,
      purchasedAt: item.purchasedAt,
      purchasedById: item.purchasedById
    };
  }
  ```
- **Notes:** Idempotent — calling on an already-purchased item returns
  the existing buyer/timestamp rather than overwriting them. Notes
  passed at purchase time replace any existing note (treated as the
  canonical value at point-of-sale).

## escalateStaleItems

- **Target:** `app.oops_no_milk`.Item *(class scope)*
- **Input class:** `app.oops_no_milk.actions`.EscalateStaleItemsInput
- **Output class:** `app.oops_no_milk.actions`.EscalateStaleItemsOutput
- **External functions used:** `objects.find`, `objects.load`,
  `objects.save`, `time.now`, `time.subtractHours`, `log.info`
- **Script:**
  ```typescript
  import "platform/objects" as objects;
  import "platform/time"    as time;
  import "platform/log"     as log;

  function execute(input: EscalateStaleItemsInput): EscalateStaleItemsOutput {
    const hours = input.staleAfterHours ?? 48;
    const threshold = time.subtractHours(time.now(), hours);

    const stale = objects.find(
      "app.oops_no_milk.Item",
      [
        { field: "householdId", operator: "Eq",  value: input.householdId },
        { field: "status",      operator: "Eq",  value: "open" },
        { field: "addedAt",     operator: "Lt",  value: threshold }
      ],
      ["_id", "urgency"]
    );

    const escalated = [];
    for (let i = 0; i < stale.length; i = i + 1) {
      const row = stale[i];
      if (row.urgency != "out_of_milk") {
        const item = objects.load("app.oops_no_milk.Item", row._id);
        item.urgency = "out_of_milk";
        objects.save(item);
        escalated[escalated.length] = item._id;
      }
    }

    log.info("escalateStaleItems", {
      householdId: input.householdId,
      hours: hours,
      escalatedCount: escalated.length
    });

    return {
      escalatedCount: escalated.length,
      escalatedItemIds: escalated
    };
  }
  ```
- **Notes:** Filters on three indexed fields (`householdId`, `status`,
  `addedAt`) so the query is cheap. Introduces a `time.subtractHours`
  helper not in the conventional list; flag if the runtime needs it
  added. Deferred from slice 1 — recorded for the future runner.
