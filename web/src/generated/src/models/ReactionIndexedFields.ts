/**
 * Filterable fields for An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.
 */
export enum ReactionIndexedFields {
  Id = "_id",
  CreatedAt = "createdAt",
  Emoji = "emoji",
  ItemId = "itemId",
  UserId = "userId"
}
