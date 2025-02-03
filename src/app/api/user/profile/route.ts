import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookiesList = await cookies()
    const userCookie = cookiesList.get("user")
    
    if (!userCookie?.value) {
      return NextResponse.json(
        { message: "Oturum açmanız gerekiyor" },
        { status: 401 }
      )
    }

    const user = JSON.parse(userCookie.value)
    return NextResponse.json(user)
  } catch (error) {
    console.error("Get profile error:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const cookiesList = await cookies()
    const userCookie = cookiesList.get("user")
    
    if (!userCookie?.value) {
      return NextResponse.json(
        { message: "Oturum açmanız gerekiyor" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, email } = body
    const user = JSON.parse(userCookie.value)

    const updatedUser = {
      ...user,
      name,
      email,
    }

    const response = NextResponse.json(updatedUser)

    // Cookie'yi güncelle
    response.cookies.set("user", JSON.stringify(updatedUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Update profile error:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 