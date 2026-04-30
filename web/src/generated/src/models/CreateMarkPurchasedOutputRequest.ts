import { CreateMarkPurchasedOutputRequestStatus } from './CreateMarkPurchasedOutputRequestStatus';

/**
 * Request Body to Create Result of the markPurchased action. Returns the updated item identity and key purchase fields so the client can update its cache.
 */
export interface CreateMarkPurchasedOutputRequest {
  /**
   * UUID of the item that was marked purchased.
   */
  itemId: string;
  /**
   * Current status — always 'purchased' on success.
   */
  status: CreateMarkPurchasedOutputRequestStatus;
  /**
   * ISO-8601 timestamp recorded when the action ran.
   */
  purchasedAt: string;
  /**
   * UUID of the User who marked it purchased.
   */
  purchasedById: string;
}
