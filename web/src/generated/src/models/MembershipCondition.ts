import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { MembershipIndexedFields } from './MembershipIndexedFields';

/**
 * Field Condition for Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).
 */
export interface MembershipCondition {
  /**
   * Filterable fields for Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).
   */
  fieldName?: MembershipIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
