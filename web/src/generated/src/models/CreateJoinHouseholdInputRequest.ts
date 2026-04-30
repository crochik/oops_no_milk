
/**
 * Request Body to Create Input payload for the joinHousehold action. Carries the invite code; the joining user is the authenticated caller.
 */
export interface CreateJoinHouseholdInputRequest {
  /**
   * Invite code shared by the household owner.
   */
  inviteCode: string;
}
