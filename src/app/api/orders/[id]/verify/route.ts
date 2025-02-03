import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

type VerifyContext = {
  params: {
    id: string;
  };
};

export async function POST(
  request: NextRequest,
  { params }: VerifyContext
) {
  const cookieStore = cookies()
  const userCookie = cookieStore.get("user")

  if (!userCookie?.value) {
    return NextResponse.json(
      { message: "Oturum açmanız gerekiyor" },
      { status: 401 }
    )
  }

  const body = await request.json()
  const { transaction_hash } = body

  // Gerçek implementasyonda:
  // 1. params.id ile siparişi bul
  // 2. transaction_hash'i doğrula
  // 3. Siparişi güncelle

  return NextResponse.json({
    message: "Ödeme onaylandı",
    orderId: params.id,
    transactionHash: transaction_hash
  })
} 