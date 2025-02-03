import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Tip tanımlamaları
type VerifyRequest = {
  transaction_hash: string;
};

// Route handler
export async function POST(
  request: NextRequest,
): Promise<NextResponse> {
  try {
    // URL'den id parametresini al
    const id = request.nextUrl.pathname.split('/').pop();

    // Cookie kontrolü
    const cookieStore = await cookies()
    const userCookie = cookieStore.get("user")

    if (!userCookie?.value) {
      return NextResponse.json(
        { message: "Oturum açmanız gerekiyor" },
        { status: 401 }
      )
    }

    // Request body'i al ve doğrula
    const body = await request.json() as VerifyRequest
    const { transaction_hash } = body

    if (!transaction_hash) {
      return NextResponse.json(
        { message: "Transaction hash gerekli" },
        { status: 400 }
      )
    }

    // Gerçek implementasyonda:
    // 1. id ile siparişi bul
    // 2. transaction_hash'i doğrula
    // 3. Siparişi güncelle

    return NextResponse.json({
      message: "Ödeme onaylandı",
      orderId: id,
      transactionHash: transaction_hash
    })
  } catch (error) {
    console.error("Ödeme doğrulama hatası:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 