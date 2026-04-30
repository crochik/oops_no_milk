/**
 * Lifecycle status. 'open' means still needed; 'purchased' means someone has bought it. Set by markPurchased.
 */
export enum CreateItemRequestStatus {
  /** open */
  Open = "open",
  /** purchased */
  Purchased = "purchased"
}
