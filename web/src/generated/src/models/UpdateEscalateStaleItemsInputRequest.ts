
/**
 * Request Body to Update Input payload for the escalateStaleItems action. Names the household and optionally overrides the staleness threshold.
 */
export interface UpdateEscalateStaleItemsInputRequest {
  /**
   * UUID of the household whose stale items should be escalated.
   */
  householdId?: string;
  /**
   * Optional override for how many hours an open item must sit before being eligible for escalation. Defaults to a server-side constant.
   */
  staleAfterHours?: number;
}
