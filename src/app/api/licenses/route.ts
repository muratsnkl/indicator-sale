import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const DEMO_LICENSES = [
  {
    id: "1",
    product_name: "Pro Trader İndikatörü",
    license_key: "PRO-1234-5678-9012",
    expires_at: "2025-03-10T12:00:00Z",
    is_active: true,
  },
  {
    id: "2",
    product_name: "Scalping İndikatörü",
    license_key: "SCA-1234-5678-9012",
    expires_at: "2024-03-11T15:30:00Z",
    is_active: false,
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

  return NextResponse.json(DEMO_LICENSES)
} 