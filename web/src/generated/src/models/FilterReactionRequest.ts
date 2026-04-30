import { ReactionCondition } from './ReactionCondition';
import { ReactionFields } from './ReactionFields';
import { ReactionIndexedFields } from './ReactionIndexedFields';

/**
 * Request Body to filter An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.
 */
export interface FilterReactionRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for An emoji reaction by a user on a single item. Surfaced in later iterations as side-eye/applause feedback in the crime log.
   */
  orderBy?: ReactionIndexedFields;
  /**
   * Order By in Reverse Order (Descending)
   */
  reverseOrder?: boolean;
  /**
   * Pre-defined view
   */
  view?: string;
  /**
   * List of fields to return
   */
  fields?: ReactionFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: ReactionCondition[];
}
