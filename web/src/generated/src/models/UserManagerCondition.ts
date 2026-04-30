import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { UserManagerIndexedFields } from './UserManagerIndexedFields';

/**
 * Field Condition for Manager
 */
export interface UserManagerCondition {
  /**
   * Filterable fields for Manager
   */
  fieldName?: UserManagerIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
