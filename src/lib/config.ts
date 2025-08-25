// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// RPC Configuration
export const SEPOLIA_RPC_URL = import.meta.env.VITE_SEPOLIA_RPC_URL || 'https://eth-sepolia.g.alchemy.com/v2/Mc7rl0E3u-NPYomkWMBPE';
export const MUMBAI_RPC_URL = import.meta.env.VITE_MUMBAI_RPC_URL || 'https://rpc-mumbai.maticvigil.com';

// App Configuration
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'AVGX';
export const APP_DESCRIPTION = import.meta.env.VITE_APP_DESCRIPTION || 'The Neutral Global Currency';

// Environment check
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Production API URL validation
if (isProduction && !import.meta.env.VITE_API_URL) {
  console.warn('VITE_API_URL not set in production. API calls may fail.');
}

// Log configuration in development
if (isDevelopment) {
  console.log('🔧 Frontend Configuration:', {
    API_BASE_URL,
    SEPOLIA_RPC_URL: SEPOLIA_RPC_URL.substring(0, 30) + '...',
    MUMBAI_RPC_URL: MUMBAI_RPC_URL.substring(0, 30) + '...',
    APP_NAME,
    APP_DESCRIPTION
  });
} 