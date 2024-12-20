import Cookies from 'js-cookie'

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN || 'localhost'

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: COOKIE_DOMAIN, // Берём из .env
    sameSite: 'strict',
    expires: 1
  })
}

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN, {
    domain: COOKIE_DOMAIN // Указываем домен при удалении
  })
}
