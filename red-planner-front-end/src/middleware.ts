import { NextRequest, NextResponse } from 'next/server'
import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  // Проверяем, является ли запрашиваемая страница страницей авторизации
  const isAuthPage = url.includes('/auth')
  const isDashboardPage = url.includes('/i') // Проверяем, является ли страница "/i"

  // Если мы находимся на странице авторизации и есть refreshToken, перенаправляем на домашнюю страницу
  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
  }

  // Если на странице авторизации и нет refreshToken, пропускаем запрос
  if (isAuthPage) {
    return NextResponse.next()
  }

  // Если мы на странице "/i" и нет токена, перенаправляем на страницу авторизации
  if (isDashboardPage && !refreshToken) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // Если токен есть, продолжаем запрос
  return NextResponse.next()
}

export const config = {
  matcher: ['/i/:path*', '/auth/:path*'] // Применяем middleware только для путей "/i" и "/auth"
}
