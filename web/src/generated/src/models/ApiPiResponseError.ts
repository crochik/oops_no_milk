
/**
 * System: Response Body on API Error
 */
export interface ApiPiResponseError {
  /**
   * HTTP Response Status Code
   */
  statusCode?: number;
  /**
   * API Error Message
   */
  message?: string;
  /**
   * Whether the request was successful. Always false
   */
  success?: boolean;
}
