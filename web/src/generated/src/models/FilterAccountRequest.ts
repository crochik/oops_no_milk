import { AccountCondition } from './AccountCondition';
import { AccountFields } from './AccountFields';
import { AccountIndexedFields } from './AccountIndexedFields';

/**
 * Request Body to filter Account
 */
export interface FilterAccountRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Account
   */
  orderBy?: AccountIndexedFields;
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
  fields?: AccountFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: AccountCondition[];
}
