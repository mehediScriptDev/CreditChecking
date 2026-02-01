// Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'user_data',
  REFRESH_TOKEN: 'refresh_token',
  REMEMBER_ME: 'remember_me',
};

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000,
};

// Application Constants
export const APP_NAME = 'No Dispute Credit';
export const APP_VERSION = '1.0.0';

// Validation Constants
export const VALIDATION_STEPS = {
  REPORT: 'report',
  SCORE: 'score',
  MONITORING: 'monitoring',
};

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
};

// Status Constants
export const STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
  MATCH: 'match',
  MINOR: 'minor',
  MISMATCH: 'mismatch',
};

// Bureau Names
export const BUREAUS = {
  EQUIFAX: 'Equifax',
  EXPERIAN: 'Experian',
  TRANSUNION: 'TransUnion',
};
