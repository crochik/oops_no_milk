import { UserDesignAssociateCondition } from './UserDesignAssociateCondition';
import { UserDesignAssociateFields } from './UserDesignAssociateFields';
import { UserDesignAssociateIndexedFields } from './UserDesignAssociateIndexedFields';

/**
 * Request Body to filter Design Associate
 */
export interface FilterUserDesignAssociateRequest {
  /**
   * Max Number of objects to return
   */
  top?: number;
  /**
   * Number of objects to skip
   */
  skip?: number;
  /**
   * Filterable fields for Design Associate
   */
  orderBy?: UserDesignAssociateIndexedFields;
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
  fields?: UserDesignAssociateFields[];
  /**
   * Conditions to be used to filter objects
   */
  criteria?: UserDesignAssociateCondition[];
}
