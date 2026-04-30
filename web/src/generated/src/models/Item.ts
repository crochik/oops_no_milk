import { ItemSection } from './ItemSection';
import { ItemStatus } from './ItemStatus';
import { ItemUrgency } from './ItemUrgency';

/**
 * A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
 */
export interface Item {
  /**
   * Server-assigned UUID identifying this item.
   */
  id?: string;
  /**
   * Reference to the Household this item belongs to.
   */
  householdId?: string;
  /**
   * Free-text name of the thing — 'milk', 'toilet paper (the good kind)', 'dog food'.
   */
  name?: string;
  /**
   * Aisle/section the item belongs to, drawn from a fixed seed list. Drives UI grouping and section emoji rendering.
   */
  section?: ItemSection;
  /**
   * How badly the household needs this. 'chill' = nice to have, 'soon' = grab on the next trip, 'out_of_milk' = drop everything (the brand-tier crisis).
   */
  urgency?: ItemUrgency;
  /**
   * Lifecycle status. 'open' means still needed; 'purchased' means someone has bought it. Set by markPurchased.
   */
  status?: ItemStatus;
  /**
   * Optional free-text notes from the adder — brand preference, quantity, etc.
   */
  notes?: string;
  /**
   * UUID of the User who added the item.
   */
  addedById?: string;
  /**
   * ISO-8601 timestamp recorded when the item was added.
   */
  addedAt?: string;
  /**
   * UUID of the User who marked the item purchased. Null/absent until the item is purchased.
   */
  purchasedById?: string;
  /**
   * ISO-8601 timestamp recorded when the item was marked purchased. Null/absent while open.
   */
  purchasedAt?: string;
  /**
   * Optional purchase price in cents recorded by the buyer. Null/absent if not provided.
   */
  purchasePriceCents?: number;
}
