import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { OrganizationIndexedFields } from './OrganizationIndexedFields';

/**
 * Field Condition for Organization
 */
export interface OrganizationCondition {
  /**
   * Filterable fields for Organization
   */
  fieldName?: OrganizationIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
