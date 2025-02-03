"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { api } from "@/lib/api"

interface User {
  id: string
  name: string
  email: string
  email_verified_at: string | null
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    // Sayfa yüklendiğinde kullanıcı bilgilerini kontrol et
    const checkAuth = async () => {
      try {
        const response = await api.getProfile()
        setUser(response.user)
      } catch (error) {
        setUser(null)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await api.login(email, password)
    setUser(response.user)
    router.push("/dashboard")
  }

  const register = async (name: string, email: string, password: string) => {
    const response = await api.register(name, email, password)
    setUser(response.user)
    router.push("/dashboard")
  }

  const logout = async () => {
    await api.logout()
    setUser(null)
    router.push("/")
  }

  const value = {
    user,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 