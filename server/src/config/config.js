const path = require('path');

require('dotenv').config();

const missingEnvVars = [];
const addMissingEnvVar = (varName) => missingEnvVars.push(varName);

const { env } = process;

const isProd = () => env.NODE_ENV === 'production';

const config = {
  // Project meta information
  PROJECT_DIR: path.resolve(__dirname, '..', '..'),

  // Server meta information
  ENV: env.NODE_ENV || addMissingEnvVar('NODE_ENV'),
  PORT: env.PORT || 80,
  COOKIE_SECRET: env.COOKIE_SECRET || 'SUPER SECRET',

  // URL meta information
  AUTH_SERVER_URL: env.AUTH_SERVER_URL || addMissingEnvVar('AUTH_SERVER_URL'),

  // Database
  MONGODB_URI: env.MONGODB_URI || addMissingEnvVar('MONGODB_URI'),
  // 5 days in production and 1 hour in development
  MONGO_LOG_EXPIRY_SECONDS: isProd() ? 5 * 24 * 60 * 60 : 60 * 60,

  // Logging
  LOG_LEVEL: env.LOG_LEVEL || 'info',
};

module.exports = {
  config,
  missingEnvVars,
};
