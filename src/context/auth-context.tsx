"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/lib/api"
import { toast } from "sonner"

interface User {
  id: string
  name: string
  email: string
  email_verified_at: string | null
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateProfile: (data: { name: string }) => Promise<void>
  changePassword: (data: {
    current_password: string
    password: string
    password_confirmation: string
  }) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    api
      .getProfile()
      .then((response) => {
        setUser(response.user)
      })
      .catch(() => {
        setUser(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await api.login(email, password)
      setUser(response.user)
      router.push("/dashboard")
      toast.success("Giriş başarılı")
    } catch {
      toast.error("Giriş başarısız")
      throw new Error()
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.register(name, email, password)
      setUser(response.user)
      router.push("/dashboard")
      toast.success("Kayıt başarılı")
    } catch {
      toast.error("Kayıt başarısız")
      throw new Error()
    }
  }

  const logout = async () => {
    try {
      await api.logout()
      setUser(null)
      router.push("/")
      toast.success("Çıkış başarılı")
    } catch {
      toast.error("Çıkış başarısız")
      throw new Error()
    }
  }

  const updateProfile = async (data: { name: string }) => {
    try {
      await api.updateProfile(data)
      setUser((prev) => (prev ? { ...prev, ...data } : null))
      toast.success("Profil güncellendi")
    } catch {
      toast.error("Profil güncellenemedi")
      throw new Error()
    }
  }

  const changePassword = async (data: {
    current_password: string
    password: string
    password_confirmation: string
  }) => {
    try {
      await api.changePassword(data)
      toast.success("Şifre değiştirildi")
    } catch {
      toast.error("Şifre değiştirilemedi")
      throw new Error()
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 