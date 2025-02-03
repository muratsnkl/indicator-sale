export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    VERIFY_EMAIL: '/api/auth/verify-email',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  PRODUCTS: {
    LIST: '/api/products',
    DETAIL: (slug: string) => `/api/products/${slug}`,
  },
  ORDERS: {
    CREATE: '/api/orders',
    LIST: '/api/orders',
    DETAIL: (id: string) => `/api/orders/${id}`,
    VERIFY_PAYMENT: (id: string) => `/api/orders/${id}/verify`,
  },
  LICENSES: {
    LIST: '/api/licenses',
    DETAIL: (id: string) => `/api/licenses/${id}`,
    ACTIVATE: (id: string) => `/api/licenses/${id}/activate`,
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE_PROFILE: '/api/user/profile',
    CHANGE_PASSWORD: '/api/user/password',
  }
} 