import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    // Demo için her zaman başarılı
    return NextResponse.json({
      user: {
        id: "1",
        name,
        email,
        email_verified_at: null,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Kayıt başarısız" },
      { status: 400 }
    )
  }
} 