export interface BaseResponse<T> {
  data: T;
  error?: string;
  status: number;
}

export interface PaginatedResponse<T> extends BaseResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
}

export interface ErrorResponse {
  message: string;
  code: string;
  details?: Record<string, unknown>;
} 