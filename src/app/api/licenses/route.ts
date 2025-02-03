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

export async function GET(): Promise<NextResponse> {
  try {
    const cookieStore = await cookies()
    const userCookie = cookieStore.get("user")

    if (!userCookie?.value) {
      return NextResponse.json(
        { message: "Oturum açmanız gerekiyor" },
        { status: 401 }
      )
    }

    return NextResponse.json(DEMO_LICENSES)
  } catch (error) {
    console.error("Lisans getirme hatası:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 