
/**
 * Request Body to Update An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.
 */
export interface UpdateReactionRequest {
  /**
   * Server-assigned UUID identifying this reaction.
   */
  id?: string;
  /**
   * Reference to the Item this reaction is on.
   */
  itemId?: string;
  /**
   * Reference to the User who left the reaction.
   */
  userId?: string;
  /**
   * Single emoji character or short shortcode for the reaction.
   */
  emoji?: string;
  /**
   * ISO-8601 timestamp recorded when the reaction was created.
   */
  createdAt?: string;
}
