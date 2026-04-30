
/**
 * Result of the createHousehold action. Returns the new household's identity, generated invite code, and the owner's freshly-created membership id.
 */
export interface CreateHouseholdOutput {
  /**
   * UUID of the newly-created household.
   */
  householdId?: string;
  /**
   * Generated invite code — share this so other users can join.
   */
  inviteCode?: string;
  /**
   * UUID of the owner's Membership row created alongside the household.
   */
  membershipId?: string;
}
