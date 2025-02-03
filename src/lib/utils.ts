import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = "₺") {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: currency === "₺" ? "TRY" : currency,
  }).format(price)
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function validateName(name: string): string | undefined {
  if (!name) {
    return "Ad soyad gerekli"
  }
  if (name.length < 3) {
    return "Ad soyad en az 3 karakter olmalı"
  }
  if (name.length > 50) {
    return "Ad soyad en fazla 50 karakter olmalı"
  }
  return undefined
}

export function validateEmail(email: string): string | undefined {
  if (!email) {
    return "E-posta gerekli"
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return "Geçerli bir e-posta adresi girin"
  }
  return undefined
}

export function validatePassword(password: string): string | undefined {
  if (!password) {
    return "Şifre gerekli"
  }
  if (password.length < 8) {
    return "Şifre en az 8 karakter olmalı"
  }
  if (password.length > 50) {
    return "Şifre en fazla 50 karakter olmalı"
  }
  if (!/[A-Z]/.test(password)) {
    return "Şifre en az bir büyük harf içermeli"
  }
  if (!/[a-z]/.test(password)) {
    return "Şifre en az bir küçük harf içermeli"
  }
  if (!/[0-9]/.test(password)) {
    return "Şifre en az bir rakam içermeli"
  }
  return undefined
}

export function validateTransactionHash(hash: string): string | undefined {
  if (!hash) {
    return "İşlem hash'i gerekli"
  }
  if (!/^0x[a-fA-F0-9]{64}$/.test(hash)) {
    return "Geçerli bir işlem hash'i girin"
  }
  return undefined
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === "string") {
    return error
  }
  return "Bir hata oluştu"
} 