// Demo modu için mock veriler
const MOCK_USER = {
  id: "1",
  name: "Demo Kullanıcı",
  email: "demo@example.com",
  email_verified_at: null,
}

const MOCK_LICENSES = [
  {
    id: "1",
    product_name: "Pro Trader",
    license_key: "XXXX-XXXX-XXXX-XXXX",
    expires_at: "2025-12-31",
    is_active: true,
  },
  {
    id: "2",
    product_name: "Trend Master",
    license_key: "YYYY-YYYY-YYYY-YYYY",
    expires_at: "2025-12-31",
    is_active: true,
  },
]

const MOCK_ORDERS = [
  {
    id: "1",
    product_name: "Pro Trader",
    amount: "1499",
    currency: "₺",
    status: "completed",
    created_at: "2024-02-01",
  },
  {
    id: "2",
    product_name: "Trend Master",
    amount: "999",
    currency: "₺",
    status: "completed",
    created_at: "2024-02-01",
  },
]

const API_URL = "/api"

const API_ROUTES = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
  },
  user: {
    profile: "/user/profile",
    updateProfile: "/user/profile",
    changePassword: "/user/password",
  },
  products: {
    list: "/products",
    get: (id: string) => `/products/${id}`,
  },
  orders: {
    list: "/orders",
    create: "/orders",
    verify: "/orders/verify",
  },
  licenses: {
    list: "/licenses",
    get: (id: string) => `/licenses/${id}`,
  },
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`
  console.log('API Request:', { url, method: options.method, body: options.body })
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options.headers,
      },
    })

    // Debug response
    console.log('API Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    })

    let data
    try {
      const text = await response.text()
      console.log('Response Text:', text)
      data = text ? JSON.parse(text) : null
    } catch (error) {
      console.error('JSON Parse Error:', error)
      throw new Error("Sunucu yanıtı geçersiz")
    }

    if (!response.ok) {
      // API error response
      if (data?.message) {
        throw new Error(data.message)
      }
      // Validation errors
      if (data?.errors) {
        const firstError = Object.values(data.errors)[0]
        if (Array.isArray(firstError) && firstError.length > 0) {
          throw new Error(firstError[0])
        }
      }
      // Generic error
      throw new Error(response.statusText || "Bir hata oluştu")
    }

    return data
  } catch (error) {
    console.error('Request Error:', error)
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error("Sunucuya bağlanılamadı. Lütfen API sunucusunun çalıştığından emin olun.")
    }
    throw error
  }
}

interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
    email_verified_at: string | null
  }
}

interface RegisterResponse {
  user: {
    id: string
    name: string
    email: string
    email_verified_at: string | null
  }
}

interface ProfileResponse {
  user: {
    id: string
    name: string
    email: string
    email_verified_at: string | null
  }
}

interface Product {
  id: string
  name: string
  description: string
  price: number
  features: string[]
}

interface Order {
  id: string
  product_id: string
  status: "pending" | "completed" | "failed"
  total: number
  created_at: string
}

interface License {
  id: string
  order_id: string
  product_id: string
  key: string
  status: "active" | "inactive"
  expires_at: string
  created_at: string
}

// Demo modu için API fonksiyonları
export const api = {
  login: async (email: string, password: string) => {
    // Demo için basit validasyon
    if (email === "demo@example.com" && password === "Demo123!") {
      return { user: MOCK_USER }
    }
    throw new Error("Geçersiz e-posta veya şifre")
  },

  register: async (name: string, email: string, password: string) => {
    // Demo için her zaman başarılı
    return { user: { ...MOCK_USER, name, email } }
  },

  logout: async () => {
    // Demo için boş promise
    return Promise.resolve()
  },

  getProfile: async () => {
    return { user: MOCK_USER }
  },

  updateProfile: async (data: { name: string }) => {
    return { user: { ...MOCK_USER, ...data } }
  },

  changePassword: async (data: {
    current_password: string
    password: string
    password_confirmation: string
  }) => {
    // Demo için her zaman başarılı
    return Promise.resolve()
  },

  getProducts: async () => {
    return []
  },

  getProduct: async (id: string) => {
    return null
  },

  getOrders: async () => {
    return MOCK_ORDERS
  },

  createOrder: async (data: { product_id: string }) => {
    return MOCK_ORDERS[0]
  },

  verifyPayment: async (data: { order_id: string; transaction_hash: string }) => {
    return Promise.resolve()
  },

  getLicenses: async () => {
    return MOCK_LICENSES
  },

  getLicense: async (id: string) => {
    return MOCK_LICENSES.find(license => license.id === id) || null
  },
} 