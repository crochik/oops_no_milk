import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { HouseholdIndexedFields } from './HouseholdIndexedFields';

/**
 * Field Condition for A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.
 */
export interface HouseholdCondition {
  /**
   * Filterable fields for A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.
   */
  fieldName?: HouseholdIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
