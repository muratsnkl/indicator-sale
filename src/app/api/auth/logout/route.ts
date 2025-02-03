import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    const response = NextResponse.json({
      message: "Başarıyla çıkış yapıldı",
    })

    // Cookie'yi sil
    response.cookies.delete("user")

    return response
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 