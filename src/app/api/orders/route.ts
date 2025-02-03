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
  const cookieStore = cookies()
  const userCookie = cookieStore.get("user")?.value

  if (!userCookie) {
    return NextResponse.json(
      { message: "Oturum açmanız gerekiyor" },
      { status: 401 }
    )
  }

  const body = await request.json()
  const { product_id, currency } = body

  const order = {
    id: Math.random().toString(36).substring(7),
    product_name: "Pro Trader İndikatörü",
    amount: currency === "BTC" ? "0.001" : currency === "ETH" ? "0.01" : "50",
    currency,
    status: "pending",
    created_at: new Date().toISOString(),
    wallet_address: "0x1234567890abcdef1234567890abcdef12345678",
  }

  return NextResponse.json(order)
} 