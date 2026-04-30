
/**
 * Request Body to Update Result of the escalateStaleItems action. Returns the count of escalated items and their ids.
 */
export interface UpdateEscalateStaleItemsOutputRequest {
  /**
   * Number of items whose urgency was bumped to `out_of_milk`.
   */
  escalatedCount?: number;
  /**
   * UUIDs of the items whose urgency was bumped to `out_of_milk`.
   */
  escalatedItemIds?: string[];
}
