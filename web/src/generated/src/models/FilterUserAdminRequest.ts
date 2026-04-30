import { UserAdminCondition } from './UserAdminCondition';
import { UserAdminFields } from './UserAdminFields';
import { UserAdminIndexedFields } from './UserAdminIndexedFields';

/**
 * Request Body to filter Admin User
 */
export interface FilterUserAdminRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Admin User
   */
  orderBy?: UserAdminIndexedFields;
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
  fields?: UserAdminFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: UserAdminCondition[];
}
