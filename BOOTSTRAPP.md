# oops_no_milk — Backend Blueprint

## App

- **Name:** `oops_no_milk` (snake_case — lowercase letters, digits, and
  underscores only; no hyphens. The base namespace is `app.oops_no_milk`).
- **Summary:** A shared household grocery list with shame, urgency, and
  receipts for who bought what.
- **Description:** A multi-user household app for tracking the things
  that keep running out — milk, toilet paper, pet food — with a sharp
  edge. Members add items, mark them open or purchased, and accumulate
  a public log of contributions and freeloading. Slice 1 ships the
  core loop (households, items, sections, purchases); reactions, crime
  logs, leaderboards, invites, and stale-item escalation are recorded
  in the blueprint as later iterations.

## Namespaces

All namespaces are rooted at `app.oops_no_milk` — the literal prefix
`app.` followed by the app name. Each namespace's full class
definitions live in the file listed in the right column.

| Namespace | Purpose | Definitions |
|---|---|---|
| `app.oops_no_milk`         | Persisted business model.                     | [schemas/app.oops_no_milk.md](schemas/app.oops_no_milk.md)                 |
| `app.oops_no_milk.actions` | Input/output classes for server-side actions. | [schemas/app.oops_no_milk.actions.md](schemas/app.oops_no_milk.actions.md) |

## Classes

Every class in any namespace has exactly one row here. Full JSON Schemas
live in the schemas file for the namespace.

| Class | Namespace | Level | Extends | Indexed fields | Summary |
|---|---|---|---|---|---|
| Household | `app.oops_no_milk` | top-level | — | `_id`, `ownerId`, `inviteCode` | A shared apartment, family, or friend group tracking groceries together. |
| Membership | `app.oops_no_milk` | top-level | — | `_id`, `householdId`, `userId`, `role`, `joinedAt` | A user's seat in a household, with a role and join timestamp. |
| Item | `app.oops_no_milk` | top-level | — | `_id`, `householdId`, `section`, `status`, `addedById`, `purchasedById`, `addedAt`, `purchasedAt` | Something the household needs (or just got) — a roll of toilet paper, the milk, dog food. |
| Reaction | `app.oops_no_milk` | top-level | — | `_id`, `itemId`, `userId`, `emoji`, `createdAt` | A user's reaction emoji on an item — props, side-eye, applause. |
| CreateHouseholdInput | `app.oops_no_milk.actions` | embedded | — | — | Payload for `createHousehold`. |
| CreateHouseholdOutput | `app.oops_no_milk.actions` | embedded | — | — | Result of `createHousehold` — the new household and the owner's membership. |
| JoinHouseholdInput | `app.oops_no_milk.actions` | embedded | — | — | Payload for `joinHousehold` — an invite code. |
| JoinHouseholdOutput | `app.oops_no_milk.actions` | embedded | — | — | Result of `joinHousehold` — the household and new membership. |
| MarkPurchasedInput | `app.oops_no_milk.actions` | embedded | — | — | Payload for `markPurchased` — the item id plus optional notes/price. |
| MarkPurchasedOutput | `app.oops_no_milk.actions` | embedded | — | — | Result of `markPurchased` — the updated item. |
| EscalateStaleItemsInput | `app.oops_no_milk.actions` | embedded | — | — | Payload for `escalateStaleItems` — the household id. |
| EscalateStaleItemsOutput | `app.oops_no_milk.actions` | embedded | — | — | Result of `escalateStaleItems` — list of escalated item ids. |

## Actions

Every custom action has exactly one row here; the standard CRUD and
filter endpoints for top-level classes are generated automatically and
are not listed. Full action definitions (description, example
invocation) live in the actions namespace's schemas file.

| Action | Target | Scope | Input class | Output class | Summary |
|---|---|---|---|---|---|
| createHousehold | `app.oops_no_milk`.Household | class | `app.oops_no_milk.actions`.CreateHouseholdInput | `app.oops_no_milk.actions`.CreateHouseholdOutput | Creates a household and the owner's membership atomically. |
| joinHousehold | `app.oops_no_milk`.Household | class | `app.oops_no_milk.actions`.JoinHouseholdInput | `app.oops_no_milk.actions`.JoinHouseholdOutput | Joins a household by invite code and creates a membership. |
| markPurchased | `app.oops_no_milk`.Item | instance | `app.oops_no_milk.actions`.MarkPurchasedInput | `app.oops_no_milk.actions`.MarkPurchasedOutput | Marks an item as purchased, stamping the buyer and time. |
| escalateStaleItems | `app.oops_no_milk`.Item | class | `app.oops_no_milk.actions`.EscalateStaleItemsInput | `app.oops_no_milk.actions`.EscalateStaleItemsOutput | Promotes long-open items in a household to `out_of_milk` urgency. |

## Views

Every named view has exactly one row here. Full definitions (conditions,
display config, sort, examples) live in the schemas file for the target
class's namespace. The `Conditions` column holds the count, not the
conditions themselves.

| View | Target | Summary | Conditions | Sort | Limit |
|---|---|---|---|---|---|
| openItemsByHousehold | `app.oops_no_milk`.Item | The household's still-needed items, newest first. | 2 | addedAt desc | 200 |
| purchasedItemsByHousehold | `app.oops_no_milk`.Item | The household's recently purchased items (the crime log). | 2 | purchasedAt desc | 100 |
| myMemberships | `app.oops_no_milk`.Membership | All households the current user belongs to. | 1 | joinedAt desc | — |
| householdMemberships | `app.oops_no_milk`.Membership | All members of a given household. | 1 | joinedAt asc | — |
| itemReactions | `app.oops_no_milk`.Reaction | All reactions on a given item. | 1 | createdAt asc | — |

## Embeddings

(none — every cross-class link uses references, not embedding.)

## References

| Class | Field | Points to |
|---|---|---|
| `app.oops_no_milk`.Household | ownerId | User._id |
| `app.oops_no_milk`.Membership | householdId | `app.oops_no_milk`.Household._id |
| `app.oops_no_milk`.Membership | userId | User._id |
| `app.oops_no_milk`.Item | householdId | `app.oops_no_milk`.Household._id |
| `app.oops_no_milk`.Item | addedById | User._id |
| `app.oops_no_milk`.Item | purchasedById | User._id |
| `app.oops_no_milk`.Reaction | itemId | `app.oops_no_milk`.Item._id |
| `app.oops_no_milk`.Reaction | userId | User._id |

## Relations

| Relation | Source | Source field | Target | Target field |
|---|---|---|---|---|
| household-owner | `app.oops_no_milk`.Household | ownerId | User | _id |
| membership-household | `app.oops_no_milk`.Membership | householdId | `app.oops_no_milk`.Household | _id |
| membership-user | `app.oops_no_milk`.Membership | userId | User | _id |
| item-household | `app.oops_no_milk`.Item | householdId | `app.oops_no_milk`.Household | _id |
| item-addedBy | `app.oops_no_milk`.Item | addedById | User | _id |
| item-purchasedBy | `app.oops_no_milk`.Item | purchasedById | User | _id |
| reaction-item | `app.oops_no_milk`.Reaction | itemId | `app.oops_no_milk`.Item | _id |
| reaction-user | `app.oops_no_milk`.Reaction | userId | User | _id |

## Design decisions

1. **Sections as a string enum, not a top-level class.** Sections
   (Produce, Dairy, etc.) are a fixed seed list with emoji labels.
   Modeling them as a `Section` top-level class would mean a join on
   every render. A string enum on `Item.section` keeps reads cheap
   and the UI renders the emoji from a client-side map. If the seed
   list ever needs per-household overrides, promote to a class then.
2. **Membership is a top-level class, not embedded in Household.**
   Members need to be queried two ways: "households I belong to"
   (filter by `userId`) and "members of household X" (filter by
   `householdId`). An embedded `members[]` array on Household would
   force loading the whole household to answer either question and
   would not support the filter endpoint. Top-level + index on both
   reference fields handles both reads cleanly.
3. **Reactions modeled, surfaced later.** The Reaction class and
   `itemReactions` view ship in the blueprint so the data model is
   stable, but the UI does not render them in slice 1. Adding the
   reaction UI in Phase 8 is a pure client-side change — no schema
   migration.
4. **`escalateStaleItems` registered, not wired.** The action
   appears in the registry as the contract, but no client UI or cron
   triggers it in slice 1. When a runner exists, the action is
   already callable.
5. **Invites are a code on the Household.** Each Household carries an
   `inviteCode` (indexed), and `joinHousehold` looks up by code. No
   separate Invitation class until expiring/single-use invites become
   a real requirement.
6. **No client-side authz checks.** The bootstrapp backend enforces
   group-based access on every CRUD/action call. The client surfaces
   server rejections; it does not gate buttons by role.

## Open questions

- None — the user has approved the design scope (invite codes,
  section seed list, deferred escalation, slice-1 UI scope).
