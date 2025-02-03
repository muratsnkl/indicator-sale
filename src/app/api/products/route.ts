import { NextResponse } from "next/server"

const DEMO_PRODUCTS = [
  {
    id: "1",
    name: "Pro Trader İndikatörü",
    description: "Profesyonel trading için geliştirilmiş özel indikatör",
    features: [
      "Trend analizi",
      "Destek ve direnç noktaları",
      "Alım/satım sinyalleri",
      "Volatilite göstergeleri",
    ],
    price_btc: "0.001",
    price_eth: "0.01",
    price_usdt: "50",
  },
  {
    id: "2",
    name: "Scalping İndikatörü",
    description: "Kısa vadeli işlemler için optimize edilmiş indikatör",
    features: [
      "Hızlı sinyal üretimi",
      "Düşük timeframe analizi",
      "Risk yönetimi",
      "Stop loss önerileri",
    ],
    price_btc: "0.0015",
    price_eth: "0.015",
    price_usdt: "75",
  },
]

export async function GET() {
  return NextResponse.json(DEMO_PRODUCTS)
} 