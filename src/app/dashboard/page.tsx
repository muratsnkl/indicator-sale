"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/auth-context"
import { api } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"
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
  const [activeTab, setActiveTab] = useState("licenses")

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
          description: getErrorMessage(error),
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
        description: "Profil bilgileriniz güncellendi.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: getErrorMessage(error),
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
        description: "Şifreniz değiştirildi.",
      })
      
      // Formu temizle
      (e.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: getErrorMessage(error),
      })
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="container py-10">
      <Tabs defaultValue="licenses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="licenses">Lisanslarım</TabsTrigger>
          <TabsTrigger value="orders">Siparişlerim</TabsTrigger>
        </TabsList>
        <TabsContent value="licenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lisanslarım</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <p className="text-sm font-medium">Henüz lisansınız yok.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Siparişlerim</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <p className="text-sm font-medium">Henüz siparişiniz yok.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 