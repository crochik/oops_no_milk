import { ItemCondition } from './ItemCondition';
import { ItemFields } from './ItemFields';
import { ItemIndexedFields } from './ItemIndexedFields';

/**
 * Request Body to filter A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
 */
export interface FilterItemRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
   */
  orderBy?: ItemIndexedFields;
  /**
   * Order By in Reverse Order (Descending)
   */
  reverseOrder?: boolean;
  /**
   * Pre-defined view
   */
  view?: string;
  /**
   * List of fields to return
   */
  fields?: ItemFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: ItemCondition[];
}
