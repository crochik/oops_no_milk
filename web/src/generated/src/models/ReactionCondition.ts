import { ApiPiConditionOperator } from './ApiPiConditionOperator';
import { ReactionIndexedFields } from './ReactionIndexedFields';

/**
 * Field Condition for An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.
 */
export interface ReactionCondition {
  /**
   * Filterable fields for An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.
   */
  fieldName?: ReactionIndexedFields;
  /**
   * System: Condition Operator
   */
  operator?: ApiPiConditionOperator;
  /**
   * Value to be used in the filter operation
   */
  value?: any;
}
