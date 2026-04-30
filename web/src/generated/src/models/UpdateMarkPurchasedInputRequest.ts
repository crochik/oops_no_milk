
/**
 * Request Body to Update Input payload for the markPurchased action. Identifies the target item and carries optional price and notes captured at purchase time.
 */
export interface UpdateMarkPurchasedInputRequest {
  /**
   * UUID of the Item being marked purchased. Required by the instance-scoped action contract.
   */
  id?: string;
  /**
   * Optional purchase price in cents.
   */
  purchasePriceCents?: number;
  /**
   * Optional free-text note recorded at purchase time — store, brand, etc.
   */
  notes?: string;
}
