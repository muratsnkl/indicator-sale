import { API_ROUTES } from './api-routes'

// API URL'i Next.js API routes'a yönlendir
const API_URL = ''

interface ApiError {
  message: string
  errors?: Record<string, string[]>
}

class ApiService {
  private async fetchWithAuth(url: string, options: RequestInit = {}) {
    const headers = new Headers(options.headers || {})
    headers.set('Accept', 'application/json')
    headers.set('Content-Type', 'application/json')

    // JWT token'ı cookie'den alıyoruz, backend bunu kontrol edecek
    const response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers,
      credentials: 'include', // CORS için önemli
    })

    if (!response.ok) {
      const error: ApiError = await response.json()
      throw new Error(error.message || 'Bir hata oluştu')
    }

    return response.json()
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.fetchWithAuth(API_ROUTES.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async register(name: string, email: string, password: string) {
    return this.fetchWithAuth(API_ROUTES.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    })
  }

  async logout() {
    return this.fetchWithAuth(API_ROUTES.AUTH.LOGOUT, {
      method: 'POST',
    })
  }

  // Products endpoints
  async getProducts() {
    return this.fetchWithAuth(API_ROUTES.PRODUCTS.LIST)
  }

  async getProduct(slug: string) {
    return this.fetchWithAuth(API_ROUTES.PRODUCTS.DETAIL(slug))
  }

  // Orders endpoints
  async createOrder(productId: string, currency: string) {
    return this.fetchWithAuth(API_ROUTES.ORDERS.CREATE, {
      method: 'POST',
      body: JSON.stringify({ product_id: productId, currency }),
    })
  }

  async getOrders() {
    return this.fetchWithAuth(API_ROUTES.ORDERS.LIST)
  }

  async verifyPayment(orderId: string, transactionHash: string) {
    return this.fetchWithAuth(API_ROUTES.ORDERS.VERIFY_PAYMENT(orderId), {
      method: 'POST',
      body: JSON.stringify({ transaction_hash: transactionHash }),
    })
  }

  // Licenses endpoints
  async getLicenses() {
    return this.fetchWithAuth(API_ROUTES.LICENSES.LIST)
  }

  async activateLicense(licenseId: string) {
    return this.fetchWithAuth(API_ROUTES.LICENSES.ACTIVATE(licenseId), {
      method: 'POST',
    })
  }

  // User endpoints
  async getProfile() {
    return this.fetchWithAuth(API_ROUTES.USER.PROFILE)
  }

  async updateProfile(data: { name: string; email: string }) {
    return this.fetchWithAuth(API_ROUTES.USER.UPDATE_PROFILE, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async changePassword(data: { current_password: string; password: string; password_confirmation: string }) {
    return this.fetchWithAuth(API_ROUTES.USER.CHANGE_PASSWORD, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }
}

export const api = new ApiService() 