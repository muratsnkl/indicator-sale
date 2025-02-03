import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LineChart, BarChart2, TrendingUp, Lock, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    name: "Profesyonel Analiz",
    description:
      "Gelişmiş teknik analiz araçları ile piyasaları profesyonel olarak analiz edin.",
    icon: LineChart,
  },
  {
    name: "Otomatik Alım/Satım",
    description:
      "Belirlediğiniz stratejilere göre otomatik alım/satım yapın.",
    icon: BarChart2,
  },
  {
    name: "Risk Yönetimi",
    description:
      "Akıllı stop-loss ve take-profit stratejileri ile riskinizi yönetin.",
    icon: TrendingUp,
  },
];

const featuredIndicators = [
  {
    title: "Pro Trader",
    description:
      "Profesyonel tüccarlar için geliştirilmiş, çoklu zaman dilimi analizi yapabilen indikatör.",
    price: "₺1,499",
    features: [
      "Çoklu Zaman Dilimi Analizi",
      "Otomatik Alım/Satım Sinyalleri",
      "Risk Yönetimi",
      "7/24 Destek",
    ],
  },
  {
    title: "Trend Master",
    description:
      "Trend takibi ve momentum analizi için özel olarak tasarlanmış indikatör.",
    price: "₺999",
    features: [
      "Trend Analizi",
      "Momentum Göstergeleri",
      "Destek/Direnç Seviyeleri",
      "Video Eğitimler",
    ],
  },
  {
    title: "Scalper Elite",
    description:
      "Kısa vadeli işlemler için optimize edilmiş, hızlı sinyal üreten indikatör.",
    price: "₺799",
    features: [
      "Hızlı Sinyal Üretimi",
      "Volatilite Analizi",
      "Anlık Alım/Satım Fırsatları",
      "Telegram Sinyalleri",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Profesyonel Trading İndikatörleri
          </h1>
          <p className="text-xl text-muted-foreground">
            Kripto para piyasalarında başarılı olmak için ihtiyacınız olan tüm
            araçlar
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Pro Trader İndikatörü</h2>
            <p className="text-muted-foreground">
              Profesyonel tüccarlar için geliştirilmiş, kapsamlı bir trading
              indikatörü. Trend analizi, momentum göstergeleri ve hacim analizi
              ile piyasadaki fırsatları yakalayın.
            </p>
            <ul className="space-y-2">
              <li>✓ Trend analizi ve momentum göstergeleri</li>
              <li>✓ Destek ve direnç seviyeleri</li>
              <li>✓ Hacim analizi ve para akışı</li>
              <li>✓ Özelleştirilebilir uyarı sistemi</li>
            </ul>
            <p className="font-semibold">1499 ₺</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Trend Master İndikatörü</h2>
            <p className="text-muted-foreground">
              Trend takibi ve momentumu bir arada sunan, kullanımı kolay bir
              indikatör. Piyasadaki trend değişimlerini erkenden fark edin ve
              fırsatları kaçırmayın.
            </p>
            <ul className="space-y-2">
              <li>✓ Trend yönü ve gücü analizi</li>
              <li>✓ Momentum göstergeleri</li>
              <li>✓ Fiyat hedefleri</li>
              <li>✓ Anlık uyarı sistemi</li>
            </ul>
            <p className="font-semibold">999 ₺</p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-semibold">Kolay Kullanım</h3>
              <p className="text-muted-foreground">
                Kullanıcı dostu arayüz ile hızlı ve kolay kurulum
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">7/24 Destek</h3>
              <p className="text-muted-foreground">
                Teknik destek ekibimiz her zaman yanınızda
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Sürekli Güncelleme</h3>
              <p className="text-muted-foreground">
                Düzenli güncellemeler ile en son teknolojiler
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Müşteri Yorumları</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                &quot;Pro Trader İndikatörü ile trading stratejimi tamamen
                değiştirdim. Artık daha tutarlı sonuçlar alıyorum.&quot;
              </p>
              <p className="font-semibold">- Ahmet Y.</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                &quot;Trend Master İndikatörü trend değişimlerini yakalamada çok
                başarılı. Kesinlikle tavsiye ederim.&quot;
              </p>
              <p className="font-semibold">- Mehmet K.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
