
/**
 * DataForm Action Response
 */
export interface DataFormActionResponse {
  /**
   * Requested Action
   */
  action: string;
  /**
   * Object Ids affected by action
   */
  ids?: string[];
  /**
   * Result summary or error message
   */
  message?: string;
  /**
   * Suggested Next Url
   */
  nextUrl?: string;
  runId?: string;
  /**
   * Whether the operation successful 
   */
  success: boolean;
}
