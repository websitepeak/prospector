import axios from 'axios';
import { CONFIG } from '@/shared/config';

export const baseAPI = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}); 