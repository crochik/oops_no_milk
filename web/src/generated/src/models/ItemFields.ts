/**
 * Fields for A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
 */
export enum ItemFields {
  Id = "_id",
  AddedAt = "addedAt",
  AddedById = "addedById",
  HouseholdId = "householdId",
  Name = "name",
  Notes = "notes",
  PurchasedAt = "purchasedAt",
  PurchasedById = "purchasedById",
  PurchasePriceCents = "purchasePriceCents",
  Section = "section",
  Status = "status",
  Urgency = "urgency"
}
