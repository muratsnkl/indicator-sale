import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')
  const isCheckoutPage = request.nextUrl.pathname.startsWith('/checkout')

  if (isAuthPage && currentUser) {
    // Kullanıcı giriş yapmışsa auth sayfalarına erişimi engelle
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if ((isDashboardPage || isCheckoutPage) && !currentUser) {
    // Kullanıcı giriş yapmamışsa dashboard ve checkout sayfalarına erişimi engelle
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*', '/checkout/:path*']
} 