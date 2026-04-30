import { AccountIndexedFields } from './AccountIndexedFields';
import { ApiPiConditionOperator } from './ApiPiConditionOperator';

/**
 * Field Condition for Account
 */
export interface AccountCondition {
  /**
   * Filterable fields for Account
   */
  fieldName?: AccountIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
