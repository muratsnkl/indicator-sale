export interface User {
  id: string
  name: string
  email: string
  email_verified_at: string | null
}

export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  price_btc: string
  price_eth: string
  price_usdt: string
}

export interface Order {
  id: string
  user_id: string
  product_id: string
  product_name: string
  amount: string
  currency: string
  wallet_address: string
  transaction_hash: string | null
  status: 'pending' | 'completed' | 'failed'
  created_at: string
  updated_at: string
}

export interface License {
  id: string
  user_id: string
  product_id: string
  product_name: string
  license_key: string
  expires_at: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ApiError {
  message: string
  errors?: Record<string, string[]>
} 