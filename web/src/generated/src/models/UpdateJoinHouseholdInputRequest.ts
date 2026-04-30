
/**
 * Request Body to Update Input payload for the joinHousehold action. Carries the invite code; the joining user is the authenticated caller.
 */
export interface UpdateJoinHouseholdInputRequest {
  /**
   * Invite code shared by the household owner.
   */
  inviteCode?: string;
}
