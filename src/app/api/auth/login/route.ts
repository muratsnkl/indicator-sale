import { NextResponse } from "next/server"

const DEMO_USER = {
  id: "1",
  name: "Demo User",
  email: "demo@example.com",
  email_verified_at: null,
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Demo için basit doğrulama
    if (email === "demo@example.com" && password === "password") {
      const response = NextResponse.json({
        user: DEMO_USER,
      })

      // Cookie'ye user bilgisini kaydet
      response.cookies.set("user", JSON.stringify(DEMO_USER), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      })

      return response
    }

    return NextResponse.json(
      { message: "Geçersiz e-posta veya şifre" },
      { status: 401 }
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 