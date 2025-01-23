// Environment variables with type safety
export const CONFIG = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const; 