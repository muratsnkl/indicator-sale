"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/auth-context"
import { api } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { getErrorMessage } from "@/lib/error-handler"
import { LicensesSkeleton, OrdersSkeleton } from "@/components/skeletons"

interface License {
  id: string
  product_name: string
  license_key: string
  expires_at: string
  is_active: boolean
}

interface Order {
  id: string
  product_name: string
  amount: string
  currency: string
  status: 'pending' | 'completed' | 'failed'
  created_at: string
}

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [licenses, setLicenses] = useState<License[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [licensesData, ordersData] = await Promise.all([
          api.getLicenses(),
          api.getOrders()
        ])
        setLicenses(licensesData)
        setOrders(ordersData)
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        toast({
          variant: "destructive",
          title: "Hata",
          description: getErrorMessage(error)
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [toast])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
      }

      await api.updateProfile(data)
      toast({
        title: "Başarılı",
        description: "Profil bilgileriniz güncellendi."
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: getErrorMessage(error)
      })
    } finally {
      setIsUpdating(false)
    }
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = {
        current_password: formData.get('current_password') as string,
        password: formData.get('password') as string,
        password_confirmation: formData.get('password_confirmation') as string,
      }

      await api.changePassword(data)
      toast({
        title: "Başarılı",
        description: "Şifreniz değiştirildi."
      })
      
      // Formu temizle
      (e.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: getErrorMessage(error)
      })
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <>
      <div className="container py-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Hoş Geldiniz, {user?.name}</h1>
          </div>

          <Tabs defaultValue="licenses">
            <TabsList>
              <TabsTrigger value="licenses">Lisanslarım</TabsTrigger>
              <TabsTrigger value="orders">Siparişlerim</TabsTrigger>
              <TabsTrigger value="settings">Ayarlar</TabsTrigger>
            </TabsList>

            <TabsContent value="licenses" className="space-y-4">
              {isLoading ? (
                <LicensesSkeleton />
              ) : licenses.length === 0 ? (
                <Card className="p-6">
                  <p className="text-center text-muted-foreground">Henüz lisansınız bulunmuyor.</p>
                  <Button className="mt-4 mx-auto block" onClick={() => router.push('/indicators')}>
                    İndikatör Satın Al
                  </Button>
                </Card>
              ) : (
                licenses.map((license) => (
                  <Card key={license.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{license.product_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Lisans Anahtarı: {license.license_key}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Bitiş Tarihi: {new Date(license.expires_at).toLocaleDateString('tr-TR')}
                        </p>
                      </div>
                      <div>
                        {license.is_active ? (
                          <span className="text-green-500 text-sm font-medium">Aktif</span>
                        ) : (
                          <span className="text-red-500 text-sm font-medium">Süresi Dolmuş</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              {isLoading ? (
                <OrdersSkeleton />
              ) : orders.length === 0 ? (
                <Card className="p-6">
                  <p className="text-center text-muted-foreground">Henüz siparişiniz bulunmuyor.</p>
                </Card>
              ) : (
                orders.map((order) => (
                  <Card key={order.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{order.product_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Tutar: {order.amount} {order.currency}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tarih: {new Date(order.created_at).toLocaleDateString('tr-TR')}
                        </p>
                      </div>
                      <div>
                        {order.status === 'completed' && (
                          <span className="text-green-500 text-sm font-medium">Tamamlandı</span>
                        )}
                        {order.status === 'pending' && (
                          <span className="text-yellow-500 text-sm font-medium">Beklemede</span>
                        )}
                        {order.status === 'failed' && (
                          <span className="text-red-500 text-sm font-medium">Başarısız</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Profil Ayarları</h3>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input id="name" name="name" defaultValue={user?.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" name="email" type="email" defaultValue={user?.email} />
                  </div>
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
                  </Button>
                </form>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Şifre Değiştir</h3>
                <form onSubmit={handleChangePassword} className="space-y-4">
                  <div>
                    <Label htmlFor="current_password">Mevcut Şifre</Label>
                    <Input id="current_password" name="current_password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="password">Yeni Şifre</Label>
                    <Input id="password" name="password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="password_confirmation">Yeni Şifre (Tekrar)</Label>
                    <Input id="password_confirmation" name="password_confirmation" type="password" />
                  </div>
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
                  </Button>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </>
  )
} 