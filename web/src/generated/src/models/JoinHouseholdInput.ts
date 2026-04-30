
/**
 * Input payload for the joinHousehold action. Carries the invite code; the joining user is the authenticated caller.
 */
export interface JoinHouseholdInput {
  /**
   * Invite code shared by the household owner.
   */
  inviteCode?: string;
}
