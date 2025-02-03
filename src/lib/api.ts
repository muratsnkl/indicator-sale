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

export const api = {
  login: (email: string, password: string) =>
    request<LoginResponse>(API_ROUTES.auth.login, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: (name: string, email: string, password: string) =>
    request<RegisterResponse>(API_ROUTES.auth.register, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }),

  logout: () =>
    request(API_ROUTES.auth.logout, {
      method: "POST",
    }),

  getProfile: () => request<ProfileResponse>(API_ROUTES.user.profile),

  updateProfile: (data: { name: string }) =>
    request(API_ROUTES.user.updateProfile, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  changePassword: (data: {
    current_password: string
    password: string
    password_confirmation: string
  }) =>
    request(API_ROUTES.user.changePassword, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  getProducts: () => request<Product[]>(API_ROUTES.products.list),

  getProduct: (id: string) =>
    request<Product>(API_ROUTES.products.get(id)),

  getOrders: () => request<Order[]>(API_ROUTES.orders.list),

  createOrder: (data: { product_id: string }) =>
    request<Order>(API_ROUTES.orders.create, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  verifyPayment: (data: { order_id: string; transaction_hash: string }) =>
    request(API_ROUTES.orders.verify, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getLicenses: () => request<License[]>(API_ROUTES.licenses.list),

  getLicense: (id: string) =>
    request<License>(API_ROUTES.licenses.get(id)),
} 