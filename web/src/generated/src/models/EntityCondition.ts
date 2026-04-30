import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { EntityIndexedFields } from './EntityIndexedFields';

/**
 * Field Condition for Entity
 */
export interface EntityCondition {
  /**
   * Filterable fields for Entity
   */
  fieldName?: EntityIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
