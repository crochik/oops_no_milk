import { UserCondition } from './UserCondition';
import { UserFields } from './UserFields';
import { UserIndexedFields } from './UserIndexedFields';

/**
 * Request Body to filter User
 */
export interface FilterUserRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for User
   */
  orderBy?: UserIndexedFields;
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
  fields?: UserFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: UserCondition[];
}
