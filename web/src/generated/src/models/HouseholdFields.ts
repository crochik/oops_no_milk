/**
 * Fields for A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.
 */
export enum HouseholdFields {
  Id = "_id",
  CreatedAt = "createdAt",
  InviteCode = "inviteCode",
  Name = "name",
  OwnerId = "ownerId"
}
