export interface VineError {
  message: string;
  rule: string;
  field: string;
}

/**
 * Standard Error Response from the Backend
 */
export interface ApiErrorResponse {
  errors: VineError[];
  message?: string;
  code?: string;
}
