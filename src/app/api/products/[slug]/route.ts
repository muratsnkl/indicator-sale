import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: NextRequest,
): Promise<NextResponse> {
  try {
    // URL'den slug parametresini al
    const slug = request.nextUrl.pathname.split('/').pop();

    if (!slug) {
      return NextResponse.json(
        { message: "Ürün bulunamadı" },
        { status: 404 }
      )
    }

    // Ürünü bul
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        features: true,
        indicators: true
      }
    })

    if (!product) {
      return NextResponse.json(
        { message: "Ürün bulunamadı" },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Ürün getirme hatası:", error)
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
} 