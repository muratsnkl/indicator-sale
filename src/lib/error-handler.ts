interface ApiError {
  message: string
  errors?: Record<string, string[]>
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  
  if (typeof error === "object" && error !== null) {
    const apiError = error as ApiError
    if (apiError.message) {
      return apiError.message
    }
    
    if (apiError.errors) {
      const firstError = Object.values(apiError.errors)[0]
      if (firstError && firstError.length > 0) {
        return firstError[0]
      }
    }
  }
  
  if (typeof error === "string") {
    return error
  }
  
  return "Bir hata oluştu"
}

export function logError(error: unknown, context?: string) {
  console.error(`Error${context ? ` in ${context}` : ""}:`, error)
  
  // Burada hata loglama servisi entegrasyonu yapılabilir
  // Örnek: Sentry, LogRocket, vb.
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ValidationError"
  }
}

export class AuthenticationError extends Error {
  constructor(message: string = "Oturum açmanız gerekiyor") {
    super(message)
    this.name = "AuthenticationError"
  }
}

export class PaymentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PaymentError'
  }
} 