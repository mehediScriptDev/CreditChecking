import axios from 'axios';
import { getToken, removeToken, removeUser } from '../utils/storage';
import { toast } from 'react-toastify';

// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_TIMEOUT = 30000; // 30 seconds

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add request timestamp for debugging
    config.metadata = { startTime: new Date() };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Calculate request duration
    const duration = new Date() - response.config.metadata.startTime;

    if (process.env.NODE_ENV === 'development') {
      console.log(
        `✅ ${response.config.method.toUpperCase()} ${response.config.url} (${duration}ms)`,
      );
    }

    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Clear auth data and redirect to login
      removeToken();
      removeUser();

      toast.error('Session expired. Please login again.');

      // Redirect to login if not already there
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }

      return Promise.reject(error);
    }

    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      toast.error(
        "Access denied. You don't have permission to access this resource.",
      );
    }

    // Handle 404 Not Found
    if (error.response?.status === 404) {
      toast.error('Resource not found.');
    }

    // Handle 500 Server Error
    if (error.response?.status >= 500) {
      toast.error('Server error. Please try again later.');
    }

    // Handle network errors
    if (error.message === 'Network Error') {
      toast.error('Network error. Please check your internet connection.');
    }

    // Handle timeout
    if (error.code === 'ECONNABORTED') {
      toast.error('Request timeout. Please try again.');
    }

    if (process.env.NODE_ENV === 'development') {
      console.error(
        `❌ ${originalRequest.method.toUpperCase()} ${originalRequest.url}`,
        error,
      );
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
