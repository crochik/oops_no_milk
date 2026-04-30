# `app.oops_no_milk` — Definitions

> Index: [BOOTSTRAPP.md](../BOOTSTRAPP.md)

## Classes

### Household
- **Level:** top-level
- **Extends:** none
- **Indexed fields:** `["_id", "ownerId", "inviteCode"]`
- **Summary:** A shared household tracking groceries together.
- **Description:** Top-level container for a group of users co-managing
  a grocery list. Owns the invite code other users redeem to join.
- **JSON Schema:**
  ```json
  {
    "title": "Household",
    "description": "A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.",
    "type": "object",
    "properties": {
      "_id": {
        "type": "string",
        "format": "uuid",
        "title": "Household ID",
        "description": "Server-assigned UUID identifying this household.",
        "examples": ["3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d"]
      },
      "name": {
        "type": "string",
        "title": "Household name",
        "description": "Display name shown in the picker — e.g. 'Apt 4B', 'The Garcias', 'Roommate Hellscape'.",
        "examples": ["Apt 4B"]
      },
      "ownerId": {
        "type": "string",
        "format": "uuid",
        "title": "Owner user ID",
        "description": "UUID of the User who created the household. The owner has implicit admin rights enforced by the platform's group authorization.",
        "examples": ["b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d"]
      },
      "inviteCode": {
        "type": "string",
        "title": "Invite code",
        "description": "Short shareable code (8-12 chars) other users redeem via the joinHousehold action to become members. Unique within the app.",
        "examples": ["MILK-7H3X"]
      },
      "createdAt": {
        "type": "string",
        "format": "date-time",
        "title": "Created at",
        "description": "ISO-8601 timestamp recorded when the household was created.",
        "examples": ["2026-04-29T17:30:00Z"]
      }
    },
    "required": ["_id", "name", "ownerId", "inviteCode", "createdAt"],
    "examples": [
      {
        "_id": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
        "name": "Apt 4B",
        "ownerId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
        "inviteCode": "MILK-7H3X",
        "createdAt": "2026-04-29T17:30:00Z"
      }
    ]
  }
  ```
- **Notes:** `inviteCode` is generated server-side by the
  `createHousehold` action; clients never set it directly.

### Membership
- **Level:** top-level
- **Extends:** none
- **Indexed fields:** `["_id", "householdId", "userId", "role", "joinedAt"]`
- **Summary:** A user's seat in a household.
- **Description:** Records that a given user belongs to a given
  household, with a role and a join timestamp. Queried both directions
  ("my households" and "members of this household").
- **JSON Schema:**
  ```json
  {
    "title": "Membership",
    "description": "Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).",
    "type": "object",
    "properties": {
      "_id": {
        "type": "string",
        "format": "uuid",
        "title": "Membership ID",
        "description": "Server-assigned UUID identifying this membership row.",
        "examples": ["c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f"]
      },
      "householdId": {
        "type": "string",
        "format": "uuid",
        "title": "Household ID",
        "description": "Reference to the Household this membership belongs to.",
        "examples": ["3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d"]
      },
      "userId": {
        "type": "string",
        "format": "uuid",
        "title": "User ID",
        "description": "Reference to the User who is a member.",
        "examples": ["b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d"]
      },
      "role": {
        "type": "string",
        "enum": ["owner", "member"],
        "title": "Role",
        "description": "Role within the household. 'owner' is the user who created it; everyone else joins as 'member'. Authorization is enforced by the backend.",
        "examples": ["member"]
      },
      "joinedAt": {
        "type": "string",
        "format": "date-time",
        "title": "Joined at",
        "description": "ISO-8601 timestamp recorded when the user joined the household.",
        "examples": ["2026-04-29T17:35:00Z"]
      }
    },
    "required": ["_id", "householdId", "userId", "role", "joinedAt"],
    "examples": [
      {
        "_id": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f",
        "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
        "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
        "role": "owner",
        "joinedAt": "2026-04-29T17:35:00Z"
      }
    ]
  }
  ```
- **Notes:** Created automatically by the `createHousehold` and
  `joinHousehold` actions; clients never POST Membership directly in
  the slice-1 flow but the auto-CRUD endpoints exist.

### Item
- **Level:** top-level
- **Extends:** none
- **Indexed fields:** `["_id", "householdId", "section", "status", "addedById", "purchasedById", "addedAt", "purchasedAt"]`
- **Summary:** Something the household needs (or just got).
- **Description:** A single grocery-list entry. Carries an urgency
  level, a section for grouping in the UI, and lifecycle timestamps.
  Filtered both as "open by household" and "purchased by household"
  (the crime log).
- **JSON Schema:**
  ```json
  {
    "title": "Item",
    "description": "A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.",
    "type": "object",
    "properties": {
      "_id": {
        "type": "string",
        "format": "uuid",
        "title": "Item ID",
        "description": "Server-assigned UUID identifying this item.",
        "examples": ["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]
      },
      "householdId": {
        "type": "string",
        "format": "uuid",
        "title": "Household ID",
        "description": "Reference to the Household this item belongs to.",
        "examples": ["3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d"]
      },
      "name": {
        "type": "string",
        "title": "Item name",
        "description": "Free-text name of the thing — 'milk', 'toilet paper (the good kind)', 'dog food'.",
        "examples": ["Milk"]
      },
      "section": {
        "type": "string",
        "enum": [
          "produce",
          "dairy_eggs",
          "meat_seafood",
          "bakery",
          "frozen",
          "pantry",
          "beverages",
          "snacks",
          "household",
          "personal_care",
          "baby",
          "pet",
          "other"
        ],
        "title": "Section",
        "description": "Aisle/section the item belongs to, drawn from a fixed seed list. Drives UI grouping and section emoji rendering.",
        "examples": ["dairy_eggs"]
      },
      "urgency": {
        "type": "string",
        "enum": ["chill", "soon", "out_of_milk"],
        "title": "Urgency",
        "description": "How badly the household needs this. 'chill' = nice to have, 'soon' = grab on the next trip, 'out_of_milk' = drop everything (the brand-tier crisis).",
        "examples": ["soon"]
      },
      "status": {
        "type": "string",
        "enum": ["open", "purchased"],
        "title": "Status",
        "description": "Lifecycle status. 'open' means still needed; 'purchased' means someone has bought it. Set by markPurchased.",
        "examples": ["open"]
      },
      "notes": {
        "type": "string",
        "title": "Notes",
        "description": "Optional free-text notes from the adder — brand preference, quantity, etc.",
        "examples": ["Lactose-free, please"]
      },
      "addedById": {
        "type": "string",
        "format": "uuid",
        "title": "Added by user ID",
        "description": "UUID of the User who added the item.",
        "examples": ["b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d"]
      },
      "addedAt": {
        "type": "string",
        "format": "date-time",
        "title": "Added at",
        "description": "ISO-8601 timestamp recorded when the item was added.",
        "examples": ["2026-04-29T18:00:00Z"]
      },
      "purchasedById": {
        "type": "string",
        "format": "uuid",
        "title": "Purchased by user ID",
        "description": "UUID of the User who marked the item purchased. Null/absent until the item is purchased.",
        "examples": ["e7f9a1b3-2c4d-4e6f-8a0b-9c1d2e3f4a5b"]
      },
      "purchasedAt": {
        "type": "string",
        "format": "date-time",
        "title": "Purchased at",
        "description": "ISO-8601 timestamp recorded when the item was marked purchased. Null/absent while open.",
        "examples": ["2026-04-29T19:30:00Z"]
      },
      "purchasePriceCents": {
        "type": "integer",
        "title": "Purchase price (cents)",
        "description": "Optional purchase price in cents recorded by the buyer. Null/absent if not provided.",
        "examples": [499]
      }
    },
    "required": ["_id", "householdId", "name", "section", "urgency", "status", "addedById", "addedAt"],
    "examples": [
      {
        "_id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
        "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
        "name": "Milk",
        "section": "dairy_eggs",
        "urgency": "out_of_milk",
        "status": "open",
        "notes": "Lactose-free, please",
        "addedById": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
        "addedAt": "2026-04-29T18:00:00Z"
      }
    ]
  }
  ```
- **Notes:** `purchasedById`, `purchasedAt`, and `purchasePriceCents`
  are all set by the `markPurchased` action; clients never write them
  directly even though auto-CRUD allows it (the action enforces the
  one-shot timestamp).

### Reaction
- **Level:** top-level
- **Extends:** none
- **Indexed fields:** `["_id", "itemId", "userId", "emoji", "createdAt"]`
- **Summary:** A user's reaction emoji on an item.
- **Description:** Lightweight emoji reaction attached to an item.
  Modeled now so the data shape is stable; no UI in slice 1 (Phase 8
  iteration).
- **JSON Schema:**
  ```json
  {
    "title": "Reaction",
    "description": "An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.",
    "type": "object",
    "properties": {
      "_id": {
        "type": "string",
        "format": "uuid",
        "title": "Reaction ID",
        "description": "Server-assigned UUID identifying this reaction.",
        "examples": ["9a0b1c2d-3e4f-4a5b-8c6d-7e8f9a0b1c2d"]
      },
      "itemId": {
        "type": "string",
        "format": "uuid",
        "title": "Item ID",
        "description": "Reference to the Item this reaction is on.",
        "examples": ["7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b"]
      },
      "userId": {
        "type": "string",
        "format": "uuid",
        "title": "User ID",
        "description": "Reference to the User who left the reaction.",
        "examples": ["b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d"]
      },
      "emoji": {
        "type": "string",
        "title": "Emoji",
        "description": "Single emoji character or short shortcode for the reaction.",
        "examples": ["clap"]
      },
      "createdAt": {
        "type": "string",
        "format": "date-time",
        "title": "Created at",
        "description": "ISO-8601 timestamp recorded when the reaction was created.",
        "examples": ["2026-04-29T19:35:00Z"]
      }
    },
    "required": ["_id", "itemId", "userId", "emoji", "createdAt"],
    "examples": [
      {
        "_id": "9a0b1c2d-3e4f-4a5b-8c6d-7e8f9a0b1c2d",
        "itemId": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
        "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
        "emoji": "clap",
        "createdAt": "2026-04-29T19:35:00Z"
      }
    ]
  }
  ```
- **Notes:** No UI in slice 1.

## Views

### openItemsByHousehold
- **Target:** `app.oops_no_milk`.Item
- **Summary:** The household's still-needed items.
- **Description:** Canonical "what does the household still need" list.
  Drives the home screen, grouped client-side by section.
- **Conditions** (combined with AND):
  ```json
  [
    { "field": "householdId", "operator": "Eq", "value": "<bind: current household _id>" },
    { "field": "status", "operator": "Eq", "value": "open" }
  ]
  ```
- **Visible fields:** `["_id", "householdId", "name", "section", "urgency", "status", "notes", "addedById", "addedAt"]`
- **Primary field:** `name`
- **Sort:** `[{ "field": "addedAt", "direction": "desc" }]`
- **Limit:** 200
- **Example matching object:**
  ```json
  {
    "_id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "name": "Milk",
    "section": "dairy_eggs",
    "urgency": "out_of_milk",
    "status": "open",
    "notes": "Lactose-free, please",
    "addedById": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "addedAt": "2026-04-29T18:00:00Z"
  }
  ```
- **Example non-matching object:**
  ```json
  {
    "_id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "name": "Milk",
    "section": "dairy_eggs",
    "urgency": "out_of_milk",
    "status": "purchased",
    "addedById": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "addedAt": "2026-04-29T18:00:00Z",
    "purchasedById": "e7f9a1b3-2c4d-4e6f-8a0b-9c1d2e3f4a5b",
    "purchasedAt": "2026-04-29T19:30:00Z"
  }
  ```

### purchasedItemsByHousehold
- **Target:** `app.oops_no_milk`.Item
- **Summary:** The household's recently-purchased items.
- **Description:** The "crime log" — who has been pulling their weight,
  what they bought, and when. Surfaced as a feed in later iterations.
- **Conditions** (combined with AND):
  ```json
  [
    { "field": "householdId", "operator": "Eq", "value": "<bind: current household _id>" },
    { "field": "status", "operator": "Eq", "value": "purchased" }
  ]
  ```
- **Visible fields:** `["_id", "householdId", "name", "section", "status", "purchasedById", "purchasedAt", "purchasePriceCents"]`
- **Primary field:** `name`
- **Sort:** `[{ "field": "purchasedAt", "direction": "desc" }]`
- **Limit:** 100
- **Example matching object:**
  ```json
  {
    "_id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "name": "Milk",
    "section": "dairy_eggs",
    "urgency": "out_of_milk",
    "status": "purchased",
    "addedById": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "addedAt": "2026-04-29T18:00:00Z",
    "purchasedById": "e7f9a1b3-2c4d-4e6f-8a0b-9c1d2e3f4a5b",
    "purchasedAt": "2026-04-29T19:30:00Z",
    "purchasePriceCents": 499
  }
  ```
- **Example non-matching object:**
  ```json
  {
    "_id": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "name": "Milk",
    "section": "dairy_eggs",
    "urgency": "out_of_milk",
    "status": "open",
    "addedById": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "addedAt": "2026-04-29T18:00:00Z"
  }
  ```

### myMemberships
- **Target:** `app.oops_no_milk`.Membership
- **Summary:** Households the current user belongs to.
- **Description:** Drives the household picker after login. The client
  passes the JWT-derived `sub` as the `userId` value at call time.
- **Conditions** (combined with AND):
  ```json
  [
    { "field": "userId", "operator": "Eq", "value": "<bind: current user sub>" }
  ]
  ```
- **Visible fields:** `["_id", "householdId", "userId", "role", "joinedAt"]`
- **Primary field:** `householdId`
- **Sort:** `[{ "field": "joinedAt", "direction": "desc" }]`
- **Limit:** —
- **Example matching object:**
  ```json
  {
    "_id": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "role": "owner",
    "joinedAt": "2026-04-29T17:35:00Z"
  }
  ```
- **Example non-matching object:**
  ```json
  {
    "_id": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "userId": "ffffffff-ffff-ffff-ffff-ffffffffffff",
    "role": "member",
    "joinedAt": "2026-04-29T17:35:00Z"
  }
  ```

### householdMemberships
- **Target:** `app.oops_no_milk`.Membership
- **Summary:** All members of a household.
- **Description:** Used for rendering author names alongside items, and
  for building the household-members screen in later iterations.
- **Conditions** (combined with AND):
  ```json
  [
    { "field": "householdId", "operator": "Eq", "value": "<bind: current household _id>" }
  ]
  ```
- **Visible fields:** `["_id", "householdId", "userId", "role", "joinedAt"]`
- **Primary field:** `userId`
- **Sort:** `[{ "field": "joinedAt", "direction": "asc" }]`
- **Limit:** —
- **Example matching object:**
  ```json
  {
    "_id": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f",
    "householdId": "3a1b9c7d-2e4f-4a8b-9c0d-1e2f3a4b5c6d",
    "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "role": "owner",
    "joinedAt": "2026-04-29T17:35:00Z"
  }
  ```
- **Example non-matching object:**
  ```json
  {
    "_id": "c2d4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f",
    "householdId": "ffffffff-ffff-ffff-ffff-ffffffffffff",
    "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "role": "member",
    "joinedAt": "2026-04-29T17:35:00Z"
  }
  ```

### itemReactions
- **Target:** `app.oops_no_milk`.Reaction
- **Summary:** Reactions on a given item.
- **Description:** Drives the reaction strip under each item — deferred
  to Phase 8, but the canonical query is recorded here.
- **Conditions** (combined with AND):
  ```json
  [
    { "field": "itemId", "operator": "Eq", "value": "<bind: current item _id>" }
  ]
  ```
- **Visible fields:** `["_id", "itemId", "userId", "emoji", "createdAt"]`
- **Primary field:** `emoji`
- **Sort:** `[{ "field": "createdAt", "direction": "asc" }]`
- **Limit:** —
- **Example matching object:**
  ```json
  {
    "_id": "9a0b1c2d-3e4f-4a5b-8c6d-7e8f9a0b1c2d",
    "itemId": "7e9f1a3b-5c2d-4e6f-8a0b-1c3d5e7f9a0b",
    "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "emoji": "clap",
    "createdAt": "2026-04-29T19:35:00Z"
  }
  ```
- **Example non-matching object:**
  ```json
  {
    "_id": "9a0b1c2d-3e4f-4a5b-8c6d-7e8f9a0b1c2d",
    "itemId": "ffffffff-ffff-ffff-ffff-ffffffffffff",
    "userId": "b3a1c2d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    "emoji": "clap",
    "createdAt": "2026-04-29T19:35:00Z"
  }
  ```
