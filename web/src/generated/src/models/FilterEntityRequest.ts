import { EntityCondition } from './EntityCondition';
import { EntityFields } from './EntityFields';
import { EntityIndexedFields } from './EntityIndexedFields';

/**
 * Request Body to filter Entity
 */
export interface FilterEntityRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Entity
   */
  orderBy?: EntityIndexedFields;
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
  fields?: EntityFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: EntityCondition[];
}
