import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Demo için basit validasyon
    if (email === "demo@example.com" && password === "Demo123!") {
      return NextResponse.json({
        user: {
          id: "1",
          name: "Demo Kullanıcı",
          email: "demo@example.com",
          email_verified_at: null,
        },
      })
    }

    throw new Error("Geçersiz e-posta veya şifre")
  } catch (error) {
    return NextResponse.json(
      { message: "Giriş başarısız" },
      { status: 401 }
    )
  }
} 