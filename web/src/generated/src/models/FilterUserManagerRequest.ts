import { UserManagerCondition } from './UserManagerCondition';
import { UserManagerFields } from './UserManagerFields';
import { UserManagerIndexedFields } from './UserManagerIndexedFields';

/**
 * Request Body to filter Manager
 */
export interface FilterUserManagerRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Manager
   */
  orderBy?: UserManagerIndexedFields;
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
  fields?: UserManagerFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: UserManagerCondition[];
}
