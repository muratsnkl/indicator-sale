export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const PASSWORD_MIN_LENGTH = 8

export function validateEmail(email: string): string | undefined {
  if (!email) {
    return 'E-posta adresi gerekli'
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'Geçerli bir e-posta adresi girin'
  }
  return undefined
}

export function validatePassword(password: string): string | undefined {
  if (!password) {
    return 'Şifre gerekli'
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `Şifre en az ${PASSWORD_MIN_LENGTH} karakter olmalı`
  }
  return undefined
}

export function validateConfirmPassword(password: string, confirmPassword: string): string | undefined {
  if (!confirmPassword) {
    return 'Şifre tekrarı gerekli'
  }
  if (password !== confirmPassword) {
    return 'Şifreler eşleşmiyor'
  }
  return undefined
}

export function validateName(name: string): string | undefined {
  if (!name) {
    return 'Ad soyad gerekli'
  }
  if (name.length < 2) {
    return 'Ad soyad en az 2 karakter olmalı'
  }
  return undefined
}

export function validateTransactionHash(hash: string): string | undefined {
  if (!hash) {
    return 'İşlem hash\'i gerekli'
  }
  if (!/^0x[a-fA-F0-9]{64}$/.test(hash)) {
    return 'Geçerli bir işlem hash\'i girin'
  }
  return undefined
} 