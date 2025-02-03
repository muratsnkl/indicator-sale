import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const DEMO_ORDERS = [
  {
    id: "1",
    product_name: "Pro Trader İndikatörü",
    amount: "0.001",
    currency: "BTC",
    status: "completed",
    created_at: "2024-03-10T12:00:00Z",
  },
  {
    id: "2",
    product_name: "Scalping İndikatörü",
    amount: "75",
    currency: "USDT",
    status: "pending",
    created_at: "2024-03-11T15:30:00Z",
  },
]

export async function GET() {
  const cookieStore = cookies()
  const userCookie = cookieStore.get("user")?.value

  if (!userCookie) {
    return NextResponse.json(
      { message: "Oturum açmanız gerekiyor" },
      { status: 401 }
    )
  }

  return NextResponse.json(DEMO_ORDERS)
}

export async function POST(request: Request) {
  const { product_id, transaction_hash } = await request.json()
  
  // Gerçek implementasyonda:
  // 1. Ürün kontrolü
  // 2. Transaction hash doğrulama
  // 3. Sipariş oluşturma
  
  return NextResponse.json({
    message: "Sipariş oluşturuldu",
    order: {
      id: Math.random().toString(36).substr(2, 9),
      product_id,
      transaction_hash,
      status: "pending"
    }
  })
} 