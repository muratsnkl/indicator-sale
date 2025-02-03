import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    // Gerçek implementasyonda:
    // 1. Email ve şifre validasyonu
    // 2. Kullanıcı kaydı
    // 3. JWT token oluşturma
    
    return NextResponse.json({ 
      message: "Kayıt başarılı",
      user: { email }
    })
  } catch {
    return NextResponse.json(
      { message: "Kayıt başarısız" },
      { status: 400 }
    )
  }
} 