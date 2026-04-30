import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { UserDesignAssociateIndexedFields } from './UserDesignAssociateIndexedFields';

/**
 * Field Condition for Design Associate
 */
export interface UserDesignAssociateCondition {
  /**
   * Filterable fields for Design Associate
   */
  fieldName?: UserDesignAssociateIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
