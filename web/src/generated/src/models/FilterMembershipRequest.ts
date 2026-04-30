import { MembershipCondition } from './MembershipCondition';
import { MembershipFields } from './MembershipFields';
import { MembershipIndexedFields } from './MembershipIndexedFields';

/**
 * Request Body to filter Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).
 */
export interface FilterMembershipRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).
   */
  orderBy?: MembershipIndexedFields;
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
  fields?: MembershipFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: MembershipCondition[];
}
