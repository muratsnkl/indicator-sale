import { NextResponse } from "next/server"

export async function POST(
  request: Request
) {
  try {
    const { order_id } = await request.json()

    // Demo için her zaman başarılı
    return NextResponse.json({
      success: true,
      order: {
        id: order_id,
        status: "completed",
      },
    })
  } catch (error) {
    return NextResponse.json(
      { message: "İşlem doğrulanamadı" },
      { status: 400 }
    )
  }
} 