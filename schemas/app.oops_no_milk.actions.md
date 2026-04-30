# `app.oops_no_milk.actions` — Definitions

> Index: [BOOTSTRAPP.md](../BOOTSTRAPP.md)

## Classes

### CreateHouseholdInput
- **Level:** embedded
- **Extends:** none
- **Summary:** Payload for `createHousehold`.
- **Description:** Carries the household name supplied by the user
  creating it. The owner is taken from the authenticated caller; the
  invite code is generated server-side.
- **JSON Schema:**
  ```json
  {
    "title": "CreateHouseholdInput",
    "description": "Input payload for the createHousehold action. Carries the human-readable household name; the owner is the authenticated caller and the invite code is generated server-side.",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Household name",
        "description": "Display name for the household — e.g. 'Apt 4B', 'The Garcias'.",
        "examples": ["Apt 4B"]
      }
    },
    "required": ["name"],
    "examples": [
      { "name": "Apt 4B" }
    ]
  }
  ```
- **Notes:** Class-scoped action input — no `id` or `ids`.

### CreateHouseholdOutput
- **Level:** embedded
- **Extends:** none
- **Summary:** Result of `createHousehold`.
- **Description:** Returns the new household's id, invite code, and
  the owner's membership id so the client can route immediately.
- **JSON Schema:**
  ```json
  {
    "title": "CreateHouseholdOutput",
    "description": "Result of the createHousehold action. Returns the new household's identity, generated invite code, and the owner's freshly-created membership id.",
    "type": "object",
    "properties": {
      "householdId": {
        "type": "string",
        "format": "uuid",
        "title": "Household ID",
        "description": "UUID of the newly-created household.",
        "examples": ["3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d"]
      },
      "inviteCode": {
        "type": "string",
        "title": "Invite code",
        "description": "Generated invite code — share this so other users can join.",
        "examples": ["MILK-7H3X"]
      },
      "membershipId": {
        "type": "string",
        "format": "uuid",
        "title": "Owner membership ID",
        "description": "UUID of the owner's Membership row created alongside the household.",
        "examples": ["c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f"]
      }
    },
    "required": ["householdId", "inviteCode", "membershipId"],
    "examples": [
      {
        "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
        "inviteCode": "MILK-7H3X",
        "membershipId": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f"
      }
    ]
  }
  ```

### JoinHouseholdInput
- **Level:** embedded
- **Extends:** none
- **Summary:** Payload for `joinHousehold`.
- **Description:** Carries the invite code the caller is redeeming.
  The user is the authenticated caller.
- **JSON Schema:**
  ```json
  {
    "title": "JoinHouseholdInput",
    "description": "Input payload for the joinHousehold action. Carries the invite code; the joining user is the authenticated caller.",
    "type": "object",
    "properties": {
      "inviteCode": {
        "type": "string",
        "title": "Invite code",
        "description": "Invite code shared by the household owner.",
        "examples": ["MILK-7H3X"]
      }
    },
    "required": ["inviteCode"],
    "examples": [
      { "inviteCode": "MILK-7H3X" }
    ]
  }
  ```
- **Notes:** Class-scoped action input — no `id` or `ids`.

### JoinHouseholdOutput
- **Level:** embedded
- **Extends:** none
- **Summary:** Result of `joinHousehold`.
- **Description:** Returns the resolved household id and the new
  membership row so the client can route into it immediately.
- **JSON Schema:**
  ```json
  {
    "title": "JoinHouseholdOutput",
    "description": "Result of the joinHousehold action. Returns the resolved household id and the new membership id for the joining user.",
    "type": "object",
    "properties": {
      "householdId": {
        "type": "string",
        "format": "uuid",
        "title": "Household ID",
        "description": "UUID of the household resolved from the invite code.",
        "examples": ["3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d"]
      },
      "membershipId": {
        "type": "string",
        "format": "uuid",
        "title": "Membership ID",
        "description": "UUID of the membership row created for the joining user.",
        "examples": ["d4e6f801-2a3b-4c5d-8e9f-0a1b2c3d4e5f"]
      }
    },
    "required": ["householdId", "membershipId"],
    "examples": [
      {
        "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
        "membershipId": "d4e6f801-2a3b-4c5d-8e9f-0a1b2c3d4e5f"
      }
    ]
  }
  ```

### MarkPurchasedInput
- **Level:** embedded
- **Extends:** none
- **Summary:** Payload for `markPurchased`.
- **Description:** Identifies the item being purchased and carries
  optional purchase metadata.
- **JSON Schema:**
  ```json
  {
    "title": "MarkPurchasedInput",
    "description": "Input payload for the markPurchased action. Identifies the target item and carries optional price and notes captured at purchase time.",
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid",
        "title": "Item ID",
        "description": "UUID of the Item being marked purchased. Required by the instance-scoped action contract.",
        "examples": ["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]
      },
      "purchasePriceCents": {
        "type": "integer",
        "title": "Purchase price (cents)",
        "description": "Optional purchase price in cents.",
        "examples": [499]
      },
      "notes": {
        "type": "string",
        "title": "Purchase notes",
        "description": "Optional free-text note recorded at purchase time — store, brand, etc.",
        "examples": ["Got the lactose-free at Trader Joe's"]
      }
    },
    "required": ["id"],
    "examples": [
      {
        "id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
        "purchasePriceCents": 499,
        "notes": "Got the lactose-free at Trader Joe's"
      }
    ]
  }
  ```
- **Notes:** Instance-scoped — `id` is the required anchor field.

### MarkPurchasedOutput
- **Level:** embedded
- **Extends:** none
- **Summary:** Result of `markPurchased`.
- **Description:** Returns the updated item, with `status` flipped
  and the purchase fields stamped.
- **JSON Schema:**
  ```json
  {
    "title": "MarkPurchasedOutput",
    "description": "Result of the markPurchased action. Returns the updated item identity and key purchase fields so the client can update its cache.",
    "type": "object",
    "properties": {
      "itemId": {
        "type": "string",
        "format": "uuid",
        "title": "Item ID",
        "description": "UUID of the item that was marked purchased.",
        "examples": ["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]
      },
      "status": {
        "type": "string",
        "enum": ["open", "purchased"],
        "title": "Status",
        "description": "Current status — always 'purchased' on success.",
        "examples": ["purchased"]
      },
      "purchasedAt": {
        "type": "string",
        "format": "date-time",
        "title": "Purchased at",
        "description": "ISO-8601 timestamp recorded when the action ran.",
        "examples": ["2026-04-29T19:30:00Z"]
      },
      "purchasedById": {
        "type": "string",
        "format": "uuid",
        "title": "Purchased by user ID",
        "description": "UUID of the User who marked it purchased.",
        "examples": ["e7f9a1b3-2c4d-4e6f-8a0b-9c1d2e3f4a5b"]
      }
    },
    "required": ["itemId", "status", "purchasedAt", "purchasedById"],
    "examples": [
      {
        "itemId": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
        "status": "purchased",
        "purchasedAt": "2026-04-29T19:30:00Z",
        "purchasedById": "e7f9a1b3-2c4d-4e6f-8a0b-9c1d2e3f4a5b"
      }
    ]
  }
  ```

### EscalateStaleItemsInput
- **Level:** embedded
- **Extends:** none
- **Summary:** Payload for `escalateStaleItems`.
- **Description:** Class-scoped — names the household whose stale
  items should be escalated. Optional `staleAfterHours` overrides
  the default threshold.
- **JSON Schema:**
  ```json
  {
    "title": "EscalateStaleItemsInput",
    "description": "Input payload for the escalateStaleItems action. Names the household and optionally overrides the staleness threshold.",
    "type": "object",
    "properties": {
      "householdId": {
        "type": "string",
        "format": "uuid",
        "title": "Household ID",
        "description": "UUID of the household whose stale items should be escalated.",
        "examples": ["3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d"]
      },
      "staleAfterHours": {
        "type": "integer",
        "title": "Stale-after threshold (hours)",
        "description": "Optional override for how many hours an open item must sit before being eligible for escalation. Defaults to a server-side constant.",
        "examples": [48]
      }
    },
    "required": ["householdId"],
    "examples": [
      {
        "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
        "staleAfterHours": 48
      }
    ]
  }
  ```
- **Notes:** Class-scoped — no `id` or `ids`. The action targets the
  Item class.

### EscalateStaleItemsOutput
- **Level:** embedded
- **Extends:** none
- **Summary:** Result of `escalateStaleItems`.
- **Description:** Returns the ids of items that were escalated and
  the count, so the caller can report back to the user.
- **JSON Schema:**
  ```json
  {
    "title": "EscalateStaleItemsOutput",
    "description": "Result of the escalateStaleItems action. Returns the count of escalated items and their ids.",
    "type": "object",
    "properties": {
      "escalatedCount": {
        "type": "integer",
        "title": "Escalated count",
        "description": "Number of items whose urgency was bumped to `out_of_milk`.",
        "examples": [3]
      },
      "escalatedItemIds": {
        "type": "array",
        "title": "Escalated item IDs",
        "description": "UUIDs of the items whose urgency was bumped to `out_of_milk`.",
        "items": {
          "type": "string",
          "format": "uuid",
          "title": "Item ID",
          "description": "UUID of an escalated item."
        },
        "examples": [["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]]
      }
    },
    "required": ["escalatedCount", "escalatedItemIds"],
    "examples": [
      {
        "escalatedCount": 1,
        "escalatedItemIds": ["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]
      }
    ]
  }
  ```

## Actions

### createHousehold
- **Name:** `createHousehold`
- **Summary:** Creates a household and the owner's membership.
- **Description:** Atomically creates a Household, generates a unique
  invite code, and creates an owner-role Membership for the
  authenticated caller. Enforces that the same user cannot create two
  households with the same name in rapid succession (best-effort).
- **Target:** `app.oops_no_milk`.Household
- **Scope:** `class`
- **Input class:** `app.oops_no_milk.actions`.CreateHouseholdInput
- **Output class:** `app.oops_no_milk.actions`.CreateHouseholdOutput
- **Example invocation:**
  ```json
  {
    "input": { "name": "Apt 4B" },
    "output": {
      "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
      "inviteCode": "MILK-7H3X",
      "membershipId": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f"
    }
  }
  ```
- **Notes:** Per the `feedback_bootstrapp_actions_not_http` memory,
  the action is registered as the contract; the slice-1 client
  orchestrates the two writes (Household + Membership) directly via
  auto-CRUD. When/if the runtime exposes action endpoints, the
  client's `actions` module is the only file that has to change.

### joinHousehold
- **Name:** `joinHousehold`
- **Summary:** Joins a household by invite code.
- **Description:** Resolves a Household by `inviteCode`, then creates
  a member-role Membership for the authenticated caller. Rejects
  duplicate memberships (a user cannot join the same household
  twice).
- **Target:** `app.oops_no_milk`.Household
- **Scope:** `class`
- **Input class:** `app.oops_no_milk.actions`.JoinHouseholdInput
- **Output class:** `app.oops_no_milk.actions`.JoinHouseholdOutput
- **Example invocation:**
  ```json
  {
    "input": { "inviteCode": "MILK-7H3X" },
    "output": {
      "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
      "membershipId": "d4e6f801-2a3b-4c5d-8e9f-0a1b2c3d4e5f"
    }
  }
  ```
- **Notes:** Same client-side orchestration caveat as
  `createHousehold`.

### markPurchased
- **Name:** `markPurchased`
- **Summary:** Marks an item as purchased.
- **Description:** Flips the item's `status` to `purchased`, stamps
  `purchasedById` from the caller, sets `purchasedAt` to now, and
  optionally records `purchasePriceCents` and notes. Idempotent for
  an already-purchased item (returns the existing values without
  overwriting).
- **Target:** `app.oops_no_milk`.Item
- **Scope:** `instance`
- **Input class:** `app.oops_no_milk.actions`.MarkPurchasedInput
- **Output class:** `app.oops_no_milk.actions`.MarkPurchasedOutput
- **Example invocation:**
  ```json
  {
    "input": {
      "id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
      "purchasePriceCents": 499,
      "notes": "Got the lactose-free at Trader Joe's"
    },
    "output": {
      "itemId": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
      "status": "purchased",
      "purchasedAt": "2026-04-29T19:30:00Z",
      "purchasedById": "e7f9a1b3-2c4d-4e6f-8a0b-9c1d2e3f4a5b"
    }
  }
  ```
- **Notes:** Slice-1 client orchestrates this as a PATCH on the Item
  via auto-CRUD; the action contract is recorded so the implementation
  can move server-side later without touching call sites.

### escalateStaleItems
- **Name:** `escalateStaleItems`
- **Summary:** Promotes long-open items to `out_of_milk` urgency.
- **Description:** Walks every open Item in the named household
  whose `addedAt` is older than the stale threshold and bumps their
  `urgency` to `out_of_milk`. Designed to be invoked by a future runner;
  no UI or cron triggers it in slice 1, but the action is registered
  so the contract is stable.
- **Target:** `app.oops_no_milk`.Item
- **Scope:** `class`
- **Input class:** `app.oops_no_milk.actions`.EscalateStaleItemsInput
- **Output class:** `app.oops_no_milk.actions`.EscalateStaleItemsOutput
- **Example invocation:**
  ```json
  {
    "input": {
      "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
      "staleAfterHours": 48
    },
    "output": {
      "escalatedCount": 1,
      "escalatedItemIds": ["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]
    }
  }
  ```
- **Notes:** Deferred for slice 1; recorded in the registry so future
  iterations can wire it up without re-doing the design.
