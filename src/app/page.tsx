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

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24">
        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Profesyonel Trading İndikatörleri
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Kripto piyasalarında başarılı olmak için ihtiyacınız olan tüm araçlar. Gelişmiş algoritmalar ve kullanıcı dostu arayüz ile trading deneyiminizi bir üst seviyeye taşıyın.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/indicators">
                    İndikatörleri İncele <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#pricing">
                    Fiyatları Gör
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">
                    Profesyonel Destek
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">
                    %100 Para İade Garantisi
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[500px] relative aspect-video rounded-lg overflow-hidden border bg-muted/50">
                <Image
                  src="/images/trading-chart-dark.png"
                  alt="Trading Chart"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-6 space-y-2">
            <LineChart className="h-10 w-10 text-primary mb-2" />
            <h3 className="text-xl font-bold">Gelişmiş Analiz</h3>
            <p className="text-muted-foreground">
              Yapay zeka destekli teknik analiz araçları ile piyasayı daha iyi analiz edin.
            </p>
          </Card>
          <Card className="p-6 space-y-2">
            <Zap className="h-10 w-10 text-primary mb-2" />
            <h3 className="text-xl font-bold">Hızlı Sinyaller</h3>
            <p className="text-muted-foreground">
              Anlık alım-satım sinyalleri ile fırsatları kaçırmayın.
            </p>
          </Card>
          <Card className="p-6 space-y-2">
            <Lock className="h-10 w-10 text-primary mb-2" />
            <h3 className="text-xl font-bold">Güvenli İşlem</h3>
            <p className="text-muted-foreground">
              Risk yönetimi araçları ile varlıklarınızı güvende tutun.
            </p>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              İndikatörlerimiz
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Trading stratejinizi güçlendirecek profesyonel araçlar
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Pro Trader */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Pro Trader İndikatörü</h3>
                <p className="text-muted-foreground">
                  Profesyonel tüccarlar için geliştirilmiş, kapsamlı bir trading indikatörü. Trend analizi, momentum göstergeleri ve hacim analizi ile piyasadaki fırsatları yakalayın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Trend analizi ve momentum göstergeleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Destek ve direnç seviyeleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Hacim analizi ve para akışı</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Özelleştirilebilir uyarı sistemi</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">1499 ₺</p>
                  <Button asChild>
                    <Link href="/checkout/pro-trader">
                      Satın Al <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Trend Master */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Trend Master İndikatörü</h3>
                <p className="text-muted-foreground">
                  Trend takibi ve momentumu bir arada sunan, kullanımı kolay bir indikatör. Piyasadaki trend değişimlerini erkenden fark edin ve fırsatları kaçırmayın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Trend yönü ve gücü analizi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Momentum göstergeleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Fiyat hedefleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Anlık uyarı sistemi</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">999 ₺</p>
                  <Button asChild>
                    <Link href="/checkout/trend-master">
                      Satın Al <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">Kolay Kullanım</h3>
            <p className="text-muted-foreground">
              Kullanıcı dostu arayüz ile hızlı ve kolay kurulum
            </p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">7/24 Destek</h3>
            <p className="text-muted-foreground">
              Teknik destek ekibimiz her zaman yanınızda
            </p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">Sürekli Güncelleme</h3>
            <p className="text-muted-foreground">
              Düzenli güncellemeler ile en son teknolojiler
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Müşteri Yorumları
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  &quot;Pro Trader İndikatörü ile trading stratejimi tamamen değiştirdim. Artık daha tutarlı sonuçlar alıyorum.&quot;
                </p>
                <p className="font-semibold">- Ahmet Y.</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  &quot;Trend Master İndikatörü trend değişimlerini yakalamada çok başarılı. Kesinlikle tavsiye ederim.&quot;
                </p>
                <p className="font-semibold">- Mehmet K.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t">
        <div className="container py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Trading Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Profesyonel trading araçlarıyla kazançlarınızı artırın.
            </p>
            <Button size="lg" asChild className="mt-4">
              <Link href="/auth/register">
                Hemen Başla <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
