import { HouseholdCondition } from './HouseholdCondition';
import { HouseholdFields } from './HouseholdFields';
import { HouseholdIndexedFields } from './HouseholdIndexedFields';

/**
 * Request Body to filter A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.
 */
export interface FilterHouseholdRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.
   */
  orderBy?: HouseholdIndexedFields;
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
  fields?: HouseholdFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: HouseholdCondition[];
}
