import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const DEMO_USER = {
  id: "1",
  name: "Demo User",
  email: "demo@example.com",
  email_verified_at: null,
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Demo için basit kayıt
    if (email === "demo@example.com") {
      return NextResponse.json(
        { message: "Bu e-posta adresi zaten kullanılıyor" },
        { status: 400 }
      )
    }

    const user = {
      ...DEMO_USER,
      name,
      email,
    }

    const response = NextResponse.json({
      user,
    })

    // Cookie'ye user bilgisini kaydet
    response.cookies.set("user", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 