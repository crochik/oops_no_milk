import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { UserAdminIndexedFields } from './UserAdminIndexedFields';

/**
 * Field Condition for Admin User
 */
export interface UserAdminCondition {
  /**
   * Filterable fields for Admin User
   */
  fieldName?: UserAdminIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
