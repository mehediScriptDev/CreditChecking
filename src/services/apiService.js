/**
 * Comprehensive API Service Layer for No Dispute Credit System
 * Organized by feature modules with consistent error handling
 */

import { GET, POST, PUT, DELETE } from './httpMethods';
import { handleApiError } from '../utils/errorHandler';

// =============================================================================
// AUTHENTICATION SERVICES
// =============================================================================

export const authService = {
  /**
   * Register a new user
   */
  register: async (userData) => {
    try {
      const response = await POST('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Login user
   */
  login: async (credentials) => {
    try {
      const response = await POST('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Logout user
   */
  logout: async () => {
    try {
      const response = await POST('/auth/logout');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Refresh access token
   */
  refreshToken: async (refreshToken) => {
    try {
      const response = await POST('/auth/refresh-token', { refreshToken });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Request password reset
   */
  forgotPassword: async (email) => {
    try {
      const response = await POST('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Reset password with token
   */
  resetPassword: async (token, newPassword) => {
    try {
      const response = await PUT('/auth/reset-password', {
        token,
        newPassword,
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// USER SERVICES
// =============================================================================

export const userService = {
  /**
   * Get user profile
   */
  getProfile: async () => {
    try {
      const response = await GET('/users/profile');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Update user profile
   */
  updateProfile: async (profileData) => {
    try {
      const response = await PUT('/users/profile', profileData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get dashboard data
   */
  getDashboard: async () => {
    try {
      const response = await GET('/users/dashboard');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Delete user account
   */
  deleteAccount: async () => {
    try {
      const response = await DELETE('/users/account');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// CREDIT REPORT SERVICES
// =============================================================================

export const reportService = {
  /**
   * Upload PDF credit report
   */
  uploadReport: async (file, bureauType) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bureauType', bureauType);

      const response = await POST('/reports/upload', formData, null, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Submit manual report data
   */
  manualEntry: async (reportData) => {
    try {
      const response = await POST('/reports/manual', reportData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get report by ID
   */
  getReport: async (reportId) => {
    try {
      const response = await GET(`/reports/${reportId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get all reports for a user
   */
  getUserReports: async (userId) => {
    try {
      const response = await GET(`/reports/user/${userId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Update report
   */
  updateReport: async (reportId, updateData) => {
    try {
      const response = await PUT(`/reports/${reportId}`, updateData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Delete report
   */
  deleteReport: async (reportId) => {
    try {
      const response = await DELETE(`/reports/${reportId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Parse uploaded PDF
   */
  parseReport: async (reportId) => {
    try {
      const response = await POST('/reports/parse', { reportId });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Normalize report data
   */
  normalizeData: async (reportId) => {
    try {
      const response = await POST('/reports/normalize', { reportId });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Compare bureau reports
   */
  compareReports: async (reportIds) => {
    try {
      const response = await POST('/reports/compare', { reportIds });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// VALIDATION SERVICES
// =============================================================================

export const validationService = {
  /**
   * Get all 40 questions
   */
  getQuestions: async () => {
    try {
      const response = await GET('/validation/questions');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Submit an answer
   */
  submitAnswer: async (answerData) => {
    try {
      const response = await POST('/validation/answer', answerData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get validation progress
   */
  getProgress: async (userId) => {
    try {
      const response = await GET(`/validation/progress/${userId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Calculate credit score
   */
  calculateScore: async (userId) => {
    try {
      const response = await POST('/validation/calculate', { userId });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// RESULTS SERVICES
// =============================================================================

export const resultsService = {
  /**
   * Get user results
   */
  getResults: async (userId) => {
    try {
      const response = await GET(`/results/${userId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get profile type
   */
  getProfileType: async (resultId) => {
    try {
      const response = await GET(`/results/profile-type/${resultId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Generate results
   */
  generateResults: async (userId) => {
    try {
      const response = await POST('/results/generate', { userId });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Export results (PDF/CSV)
   */
  exportResults: async (resultId, format = 'pdf') => {
    try {
      const response = await GET(
        `/results/export/${resultId}?format=${format}`,
        {
          responseType: 'blob',
        },
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// MONITORING SERVICES
// =============================================================================

export const monitoringService = {
  /**
   * Get 90-day action plan
   */
  getActionPlan: async (userId) => {
    try {
      const response = await GET(`/monitoring/${userId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Update progress
   */
  updateProgress: async (progressData) => {
    try {
      const response = await POST('/monitoring/update', progressData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get all tasks
   */
  getTasks: async (userId) => {
    try {
      const response = await GET(`/monitoring/tasks?userId=${userId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Mark task as complete
   */
  completeTask: async (taskId) => {
    try {
      const response = await PUT(`/monitoring/task/${taskId}`, {
        status: 'completed',
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// FILE MANAGEMENT SERVICES
// =============================================================================

export const fileService = {
  /**
   * Upload evidence file
   */
  uploadFile: async (file, metadata = {}) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      Object.keys(metadata).forEach((key) => {
        formData.append(key, metadata[key]);
      });

      const response = await POST('/files/upload', formData, null, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get file by ID
   */
  getFile: async (fileId) => {
    try {
      const response = await GET(`/files/${fileId}`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Delete file
   */
  deleteFile: async (fileId) => {
    try {
      const response = await DELETE(`/files/${fileId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// =============================================================================
// ADMIN SERVICES
// =============================================================================

export const adminService = {
  /**
   * Get all users
   */
  getAllUsers: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await GET(`/admin/users?${queryString}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Update user
   */
  updateUser: async (userId, userData) => {
    try {
      const response = await PUT(`/admin/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Delete user
   */
  deleteUser: async (userId) => {
    try {
      const response = await DELETE(`/admin/users/${userId}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  /**
   * Get system analytics
   */
  getAnalytics: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await GET(`/admin/analytics?${queryString}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// Export all services as a single object
export default {
  auth: authService,
  user: userService,
  report: reportService,
  validation: validationService,
  results: resultsService,
  monitoring: monitoringService,
  file: fileService,
  admin: adminService,
};
