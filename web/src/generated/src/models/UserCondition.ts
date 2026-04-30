import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { UserIndexedFields } from './UserIndexedFields';

/**
 * Field Condition for User
 */
export interface UserCondition {
  /**
   * Filterable fields for User
   */
  fieldName?: UserIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
