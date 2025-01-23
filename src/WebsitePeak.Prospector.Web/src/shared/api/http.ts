import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { AppError } from '@shared/lib/error';
import { CONFIG } from '@shared/config';

interface ApiErrorResponse extends Record<string, unknown> {
  message: string;
  code?: string;
}

export const httpClient = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response) {
      throw new AppError(
        error.response.data?.message || error.message,
        error.response.data?.code || 'API_ERROR',
        error.response.data
      );
    }
    throw new AppError(error.message, 'NETWORK_ERROR');
  }
);

export const http = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    httpClient.get<T>(url, config).then((res) => res.data),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.post<T>(url, data, config).then((res) => res.data),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.put<T>(url, data, config).then((res) => res.data),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    httpClient.delete<T>(url, config).then((res) => res.data),
}; 