"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Copy, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { api } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"
import { getErrorMessage } from "@/lib/error-handler"
import { validateTransactionHash } from "@/lib/validations"
import { walletService } from "@/lib/wallet-service"
import { Skeleton } from "@/components/ui/skeleton"

interface Product {
  id: string
  name: string
  description: string
  price_btc: string
  price_eth: string
  price_usdt: string
}

interface Order {
  id: string
  wallet_address: string
  amount: string
  currency: string
  status: 'pending' | 'completed' | 'failed'
}

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedCurrency, setSelectedCurrency] = useState<string>('BTC')
  const [order, setOrder] = useState<Order | null>(null)
  const [transactionHash, setTransactionHash] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await api.getProduct(params.productId as string)
        setProduct(data)
      } catch (error) {
        console.error('Error loading product:', error)
        toast({
          variant: "destructive",
          title: "Hata",
          description: getErrorMessage(error),
        })
        router.push('/indicators')
      } finally {
        setIsLoadingProduct(false)
      }
    }

    loadProduct()
  }, [params.productId, router, toast])

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value)
  }

  const createOrder = async () => {
    setError(null)
    setIsLoading(true)

    try {
      // MetaMask bağlantısını kontrol et
      if (selectedCurrency !== 'USDT') {
        await walletService.connect()
      }

      const orderData = await api.createOrder(params.productId as string, selectedCurrency)
      setOrder(orderData)
      
      toast({
        title: "Başarılı",
        description: "Sipariş oluşturuldu. Lütfen ödemeyi tamamlayın.",
      })
    } catch (error) {
      console.error('Error creating order:', error)
      toast({
        variant: "destructive",
        title: "Hata",
        description: getErrorMessage(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  const verifyPayment = async () => {
    if (!order || !transactionHash) return

    const hashError = validateTransactionHash(transactionHash)
    if (hashError) {
      setError(hashError)
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      // Blockchain üzerinde işlemi doğrula
      if (selectedCurrency !== 'USDT') {
        const isValid = await walletService.verifyTransaction(transactionHash)
        if (!isValid) {
          throw new Error('İşlem doğrulanamadı')
        }
      }

      await api.verifyPayment(order.id, transactionHash)
      
      toast({
        title: "Başarılı",
        description: "Ödemeniz onaylandı. Lisansınız aktif edildi.",
      })
      
      router.push('/dashboard/licenses')
    } catch (error) {
      console.error('Error verifying payment:', error)
      toast({
        variant: "destructive",
        title: "Hata",
        description: getErrorMessage(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoadingProduct) {
    return (
      <div className="container py-10">
        <div className="mx-auto max-w-2xl space-y-8">
          <Card className="p-6">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <Skeleton className="h-4 w-full mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </Card>
        </div>
      </div>
    )
  }

  if (!product) {
    return null
  }

  const getPrice = () => {
    switch (selectedCurrency) {
      case 'BTC':
        return product.price_btc
      case 'ETH':
        return product.price_eth
      case 'USDT':
        return product.price_usdt
      default:
        return '0'
    }
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-4">
            <div>
              <Label>Ödeme Yöntemi</Label>
              <Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                  <SelectItem value="USDT">Tether (USDT)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Ödenecek Tutar</Label>
              <div className="text-2xl font-bold">{getPrice()} {selectedCurrency}</div>
            </div>

            {!order ? (
              <Button onClick={createOrder} disabled={isLoading} className="w-full">
                {isLoading ? "Sipariş Oluşturuluyor..." : "Ödeme Yap"}
              </Button>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label>Cüzdan Adresi</Label>
                  <div className="flex gap-2">
                    <Input value={order.wallet_address} readOnly />
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => {
                        navigator.clipboard.writeText(order.wallet_address)
                        toast({
                          title: "Kopyalandı",
                          description: "Cüzdan adresi panoya kopyalandı.",
                        })
                      }}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>QR Kod</Label>
                  <div className="bg-muted p-4 rounded-lg flex items-center justify-center">
                    <QrCode className="h-32 w-32" />
                  </div>
                </div>

                <div>
                  <Label>İşlem Hash&apos;i</Label>
                  <Input
                    value={transactionHash}
                    onChange={(e) => {
                      setTransactionHash(e.target.value)
                      setError(null)
                    }}
                    placeholder="0x..."
                    error={error || undefined}
                  />
                </div>

                <Button onClick={verifyPayment} disabled={isLoading || !transactionHash} className="w-full">
                  {isLoading ? "Doğrulanıyor..." : "Ödemeyi Doğrula"}
                </Button>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Garanti ve Destek</h2>
          <ul className="space-y-2">
            <li>✓ 30 gün para iade garantisi</li>
            <li>✓ 7/24 teknik destek</li>
            <li>✓ Ömür boyu güncellemeler</li>
            <li>✓ Özel Discord topluluğuna erişim</li>
          </ul>
        </Card>
      </div>
    </div>
  )
} 