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
  const testimonials = [
    {
      name: "Ahmet Y.",
      title: "Profesyonel Trader",
      comment: "Bu indikatörler sayesinde trading stratejimi önemli ölçüde geliştirdim."
    },
    {
      name: "Mehmet K.",
      title: "Yatırımcı",
      comment: "Teknik analizlerimi daha doğru yapabiliyorum."
    },
    {
      name: "Ayşe S.",
      title: "Forex Trader",
      comment: "Profesyonel destek ekibi her zaman yardımcı oluyor."
    }
  ]

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

      {/* How it Works Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Nasıl Çalışır?
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Profesyonel trading yolculuğunuz 4 kolay adımda başlıyor
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Hesap Oluşturun</h3>
                <p className="text-muted-foreground">
                  Hızlı kayıt süreciyle hesabınızı oluşturun ve hemen kullanmaya başlayın.
                </p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">İndikatörü Yükleyin</h3>
                <p className="text-muted-foreground">
                  Size özel API anahtarınızı kullanarak indikatörü trading platformunuza ekleyin.
                </p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Stratejinizi Belirleyin</h3>
                <p className="text-muted-foreground">
                  Risk seviyenizi ve trading stratejinizi belirleyin, indikatör ayarlarını kişiselleştirin.
                </p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Trading'e Başlayın</h3>
                <p className="text-muted-foreground">
                  Gerçek zamanlı sinyaller ve analizlerle profesyonel trading deneyimini yaşayın.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-muted-foreground">Aktif Kullanıcı</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">1M+</h3>
              <p className="text-muted-foreground">Başarılı İşlem</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">%85</h3>
              <p className="text-muted-foreground">Doğruluk Oranı</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">%95</h3>
              <p className="text-muted-foreground">Müşteri Memnuniyeti</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Kullanıcılarımız Ne Diyor?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-muted w-10 h-10" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t scroll-mt-16">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Fiyatlandırma Planları
            </h2>
            <p className="text-muted-foreground md:text-lg">
              İhtiyacınıza en uygun planı seçin
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Yeni başlayanlar için ideal</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-3xl font-bold">₺499<span className="text-lg font-normal text-muted-foreground">/ay</span></div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Temel indikatörler</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Günlük sinyaller</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Email desteği</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Başla
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                En Popüler
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Profesyonel traderlar için</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-3xl font-bold">₺999<span className="text-lg font-normal text-muted-foreground">/ay</span></div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Tüm Basic özellikleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Gelişmiş indikatörler</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Anlık sinyaller</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>7/24 öncelikli destek</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Satın Al
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Kurumsal müşteriler için</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-3xl font-bold">₺2499<span className="text-lg font-normal text-muted-foreground">/ay</span></div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Tüm Pro özellikleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Özel indikatör geliştirme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>API erişimi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Özel eğitim ve danışmanlık</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  İletişime Geç
                </Button>
              </CardFooter>
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
                Şimdi Satın Al <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
