
/**
 * Request Body to Create Result of the joinHousehold action. Returns the resolved household id and the new membership id for the joining user.
 */
export interface CreateJoinHouseholdOutputRequest {
  /**
   * UUID of the household resolved from the invite code.
   */
  householdId: string;
  /**
   * UUID of the membership row created for the joining user.
   */
  membershipId: string;
}
