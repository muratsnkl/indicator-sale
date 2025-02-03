"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { api } from "@/lib/api"
import { ProductsSkeleton } from "@/components/skeletons"
import { useToast } from "@/components/ui/use-toast"
import { getErrorMessage } from "@/lib/error-handler"

interface Product {
  id: string
  name: string
  description: string
  features: string[]
  price_btc: string
  price_eth: string
  price_usdt: string
}

export default function IndicatorsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await api.getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error loading products:', error)
        toast({
          variant: "destructive",
          title: "Hata",
          description: getErrorMessage(error),
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [toast])

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">İndikatörler</h1>
          <p className="text-muted-foreground mt-2">
            Profesyonel trading için özel olarak geliştirilmiş indikatörlerimiz
          </p>
        </div>

        {isLoading ? (
          <ProductsSkeleton />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Bitcoin</span>
                      <span className="font-medium">{product.price_btc} BTC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Ethereum</span>
                      <span className="font-medium">{product.price_eth} ETH</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>USDT</span>
                      <span className="font-medium">{product.price_usdt} USDT</span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/checkout/${product.id}`}>
                      Satın Al
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 