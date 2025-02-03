import Image from "next/image"
import { ArrowRight, CheckCircle2, LineChart, BarChart2, TrendingUp, Zap, Shield, Clock, Star } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const indicators = [
  {
    id: "pro-trader",
    title: "Pro Trader",
    description: "Profesyonel tüccarlar için geliştirilmiş, çoklu zaman dilimi analizi yapabilen indikatör.",
    price: "₺1,499",
    image: "https://placehold.co/800x600/png?text=Pro+Trader+Screenshot",
    features: [
      "Çoklu Zaman Dilimi Analizi",
      "Otomatik Alım/Satım Sinyalleri",
      "Risk Yönetimi",
      "7/24 Destek",
      "Telegram Sinyal Kanalı",
      "Video Eğitimler",
      "Özel Strateji Oluşturma",
      "Backtest Özelliği"
    ],
    benefits: [
      {
        icon: LineChart,
        title: "Gelişmiş Analiz",
        description: "15+ teknik indikatör ve özel algoritma ile piyasa analizi"
      },
      {
        icon: Zap,
        title: "Hızlı Sinyaller",
        description: "Milisaniyeler içinde alım/satım sinyalleri"
      },
      {
        icon: Shield,
        title: "Risk Kontrolü",
        description: "Otomatik stop-loss ve take-profit yönetimi"
      }
    ],
    details: [
      "TradingView platformu ile tam uyumlu",
      "Tüm kripto borsaları ile çalışabilme",
      "Özelleştirilebilir göstergeler",
      "Detaylı dokümantasyon",
      "1 yıl ücretsiz güncelleme"
    ]
  },
  {
    id: "trend-master",
    title: "Trend Master",
    description: "Trend takibi ve momentum analizi için özel olarak tasarlanmış indikatör.",
    price: "₺999",
    image: "https://placehold.co/800x600/png?text=Trend+Master+Screenshot",
    features: [
      "Trend Analizi",
      "Momentum Göstergeleri",
      "Destek/Direnç Seviyeleri",
      "Video Eğitimler",
      "Telegram Destek",
      "Temel Strateji Şablonları",
      "E-posta Desteği"
    ],
    benefits: [
      {
        icon: BarChart2,
        title: "Trend Takibi",
        description: "Güçlü trend belirleme ve takip sistemi"
      },
      {
        icon: Clock,
        title: "Zamanlama",
        description: "Doğru giriş ve çıkış noktaları tespiti"
      },
      {
        icon: TrendingUp,
        title: "Momentum",
        description: "Fiyat momentumunu önceden tespit etme"
      }
    ],
    details: [
      "Kolay kullanım arayüzü",
      "Başlangıç seviyesi için uygun",
      "6 ay ücretsiz güncelleme",
      "Temel eğitim videoları",
      "Topluluk desteği"
    ]
  },
  {
    id: "scalper-elite",
    title: "Scalper Elite",
    description: "Kısa vadeli işlemler için optimize edilmiş, hızlı sinyal üreten indikatör.",
    price: "₺799",
    image: "https://placehold.co/800x600/png?text=Scalper+Elite+Screenshot",
    features: [
      "Hızlı Sinyal Üretimi",
      "Volatilite Analizi",
      "Anlık Alım/Satım Fırsatları",
      "Telegram Sinyalleri",
      "Temel Destek",
      "Scalping Stratejileri",
      "Topluluk Erişimi"
    ],
    benefits: [
      {
        icon: Zap,
        title: "Hızlı İşlem",
        description: "Anlık fırsatları yakalama özelliği"
      },
      {
        icon: LineChart,
        title: "Volatilite",
        description: "Volatilite bazlı işlem stratejileri"
      },
      {
        icon: Shield,
        title: "Koruma",
        description: "Hızlı stop-loss yönetimi"
      }
    ],
    details: [
      "Scalping odaklı tasarım",
      "Düşük gecikme süresi",
      "3 ay ücretsiz güncelleme",
      "Scalping eğitim rehberi",
      "Discord topluluğu"
    ]
  }
]

const comparisonFeatures = [
  {
    name: "Fiyat",
    proTrader: "₺1,499",
    trendMaster: "₺999",
    scalperElite: "₺799"
  },
  {
    name: "Zaman Dilimi Analizi",
    proTrader: "Sınırsız",
    trendMaster: "5 farklı",
    scalperElite: "3 farklı"
  },
  {
    name: "Sinyal Hızı",
    proTrader: "< 100ms",
    trendMaster: "< 500ms",
    scalperElite: "< 250ms"
  },
  {
    name: "Destek Süresi",
    proTrader: "7/24",
    trendMaster: "Mesai saatleri",
    scalperElite: "Mesai saatleri"
  },
  {
    name: "Güncelleme",
    proTrader: "1 yıl ücretsiz",
    trendMaster: "6 ay ücretsiz",
    scalperElite: "3 ay ücretsiz"
  },
  {
    name: "Eğitim İçeriği",
    proTrader: "Kapsamlı",
    trendMaster: "Temel",
    scalperElite: "Temel"
  },
  {
    name: "Telegram Sinyalleri",
    proTrader: "✓",
    trendMaster: "✓",
    scalperElite: "✓"
  },
  {
    name: "Backtest",
    proTrader: "✓",
    trendMaster: "✗",
    scalperElite: "✗"
  },
  {
    name: "Özel Stratejiler",
    proTrader: "✓",
    trendMaster: "Sınırlı",
    scalperElite: "✗"
  },
  {
    name: "Risk Yönetimi",
    proTrader: "Gelişmiş",
    trendMaster: "Temel",
    scalperElite: "Temel"
  }
]

const testimonials = [
  {
    name: "Ahmet Y.",
    role: "Profesyonel Trader",
    image: "https://placehold.co/100/png?text=AY",
    content: "Pro Trader indikatörü ile işlem stratejilerimi tamamen değiştirdim. Özellikle çoklu zaman dilimi analizi özelliği çok başarılı.",
    rating: 5
  },
  {
    name: "Mehmet K.",
    role: "Günlük Trader",
    image: "https://placehold.co/100/png?text=MK",
    content: "Trend Master ile trend analizleri çok daha kolay hale geldi. Destek/direnç seviyeleri oldukça isabetli.",
    rating: 4
  },
  {
    name: "Zeynep A.",
    role: "Kripto Yatırımcısı",
    image: "https://placehold.co/100/png?text=ZA",
    content: "Scalper Elite'in hızlı sinyal üretimi ve volatilite analizi özelliklerini çok beğendim. Kısa vadeli işlemlerimde vazgeçilmezim oldu.",
    rating: 5
  },
  {
    name: "Can B.",
    role: "Forex Trader",
    image: "https://placehold.co/100/png?text=CB",
    content: "Pro Trader'ın risk yönetimi özellikleri gerçekten çok iyi düşünülmüş. Stop-loss ve take-profit önerileri sayesinde kayıplarımı minimize ettim.",
    rating: 5
  },
  {
    name: "Ayşe D.",
    role: "Başlangıç Seviyesi Trader",
    image: "https://placehold.co/100/png?text=AD",
    content: "Trend Master'ın eğitim videoları ve kullanıcı dostu arayüzü sayesinde trading dünyasına hızlı bir giriş yaptım.",
    rating: 4
  }
]

const faqs = [
  {
    question: "İndikatörleri hangi platformlarda kullanabilirim?",
    answer: "İndikatörlerimiz TradingView platformu ile tam uyumlu olarak çalışmaktadır. Ayrıca popüler kripto borsalarının çoğu ile entegre şekilde çalışabilmektedir."
  },
  {
    question: "Deneme süresi var mı?",
    answer: "Evet, tüm indikatörlerimiz için 30 günlük ücretsiz deneme süresi sunuyoruz. Bu süre içinde tüm özellikleri test edebilirsiniz."
  },
  {
    question: "Para iade garantisi nasıl işliyor?",
    answer: "Satın alma tarihinden itibaren 30 gün içinde, herhangi bir sebep belirtmeksizin %100 para iade garantisi sunuyoruz. İade talepleriniz 24 saat içinde işleme alınır."
  },
  {
    question: "Teknik destek nasıl sağlanıyor?",
    answer: "Pro Trader paketi için 7/24 teknik destek sağlıyoruz. Diğer paketler için mesai saatleri içinde e-posta ve Telegram üzerinden destek verilmektedir."
  },
  {
    question: "Güncellemeler ücretli mi?",
    answer: "Paketlere göre değişen sürelerde ücretsiz güncelleme imkanı sunuyoruz. Pro Trader için 1 yıl, Trend Master için 6 ay ve Scalper Elite için 3 ay ücretsiz güncelleme desteği verilmektedir."
  },
  {
    question: "Birden fazla cihazda kullanabilir miyim?",
    answer: "Evet, tek lisans ile 2 farklı cihazda indikatörlerimizi kullanabilirsiniz. Daha fazla cihaz için ek lisans satın almanız gerekecektir."
  },
  {
    question: "Eğitim desteği var mı?",
    answer: "Tüm paketlerimizde temel eğitim videoları bulunmaktadır. Pro Trader paketinde ek olarak canlı webinarlar ve özel strateji eğitimleri de sunulmaktadır."
  },
  {
    question: "Telegram sinyalleri nasıl çalışıyor?",
    answer: "İndikatörlerimiz tarafından üretilen sinyaller, otomatik olarak Telegram kanalınıza iletilir. Sinyal detayları, giriş/çıkış noktaları ve risk yönetimi önerilerini içerir."
  }
]

export default function IndicatorsPage() {
  return (
    <main className="flex-1">
      <section className="container py-12">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">İndikatörler</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Profesyonel trading için geliştirilmiş, güvenilir ve kullanıcı dostu indikatörlerimizi keşfedin.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {indicators.map((indicator) => (
            <Card key={indicator.id} className="flex flex-col">
              <CardHeader>
                <div className="relative aspect-video w-full mb-4">
                  <Image
                    alt={`${indicator.title} Screenshot`}
                    className="object-cover rounded-lg"
                    fill
                    src={indicator.image}
                  />
                </div>
                <CardTitle className="text-2xl">{indicator.title}</CardTitle>
                <CardDescription>{indicator.description}</CardDescription>
                <div className="text-3xl font-bold mt-4">{indicator.price}</div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="grid gap-4 mb-6">
                  {indicator.benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={index} className="flex space-x-2">
                        <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <h3 className="font-medium text-sm">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-sm">Paket Özellikleri</h3>
                  <ul className="space-y-2">
                    {indicator.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex gap-4 mt-auto pt-6">
                <Button className="flex-1">
                  Satın Al
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex-1">
                  Demo İste
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-24">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold">İndikatör Karşılaştırması</h2>
          <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            İhtiyaçlarınıza en uygun indikatörü seçmek için detaylı karşılaştırma tablosunu inceleyin.
          </p>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Özellik</TableHead>
                <TableHead>Pro Trader</TableHead>
                <TableHead>Trend Master</TableHead>
                <TableHead>Scalper Elite</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((feature) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell>{feature.proTrader}</TableCell>
                  <TableCell>{feature.trendMaster}</TableCell>
                  <TableCell>{feature.scalperElite}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="container py-24 bg-slate-50 dark:bg-transparent">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold">Kullanıcı Yorumları</h2>
          <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            İndikatörlerimizi kullanan trader'ların deneyimlerini okuyun.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    )}
                  />
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-24">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold">Sıkça Sorulan Sorular</h2>
          <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            İndikatörlerimiz hakkında sık sorulan soruların cevaplarını bulun.
          </p>
        </div>

        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container py-24 bg-slate-50 dark:bg-transparent">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold">Video Demo</h2>
          <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            İndikatörlerimizin nasıl çalıştığını görmek için demo videomuzu izleyin.
          </p>
        </div>

        <div className="mx-auto max-w-[800px] aspect-video relative">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="İndikatör Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Daha Fazla Video
          </Button>
        </div>
      </section>
    </main>
  )
} 