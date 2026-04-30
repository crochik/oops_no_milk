import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { ItemIndexedFields } from './ItemIndexedFields';

/**
 * Field Condition for A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
 */
export interface ItemCondition {
  /**
   * Filterable fields for A grocery-list entry in a household. Tracks urgency, section, status, and the users who added and purchased it.
   */
  fieldName?: ItemIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
