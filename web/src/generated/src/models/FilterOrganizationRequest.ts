import { OrganizationCondition } from './OrganizationCondition';
import { OrganizationFields } from './OrganizationFields';
import { OrganizationIndexedFields } from './OrganizationIndexedFields';

/**
 * Request Body to filter Organization
 */
export interface FilterOrganizationRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Organization
   */
  orderBy?: OrganizationIndexedFields;
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
  fields?: OrganizationFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: OrganizationCondition[];
}
