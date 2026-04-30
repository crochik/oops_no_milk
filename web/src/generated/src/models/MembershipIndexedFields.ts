/**
 * Filterable fields for Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).
 */
export enum MembershipIndexedFields {
  Id = "_id",
  HouseholdId = "householdId",
  JoinedAt = "joinedAt",
  Role = "role",
  UserId = "userId"
}
