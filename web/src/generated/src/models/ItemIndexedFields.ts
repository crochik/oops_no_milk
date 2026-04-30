/**
 * Filterable fields for A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
 */
export enum ItemIndexedFields {
  Id = "_id",
  AddedAt = "addedAt",
  AddedById = "addedById",
  HouseholdId = "householdId",
  PurchasedAt = "purchasedAt",
  PurchasedById = "purchasedById",
  Section = "section",
  Status = "status"
}
