import { Api } from '../generated/src'
import { getAccessToken } from './auth'

const baseUrl = (import.meta.env.VITE_API_BASE_URL as string) || ''

export const api = new Api({ baseUrl })

api.config.addRequestInterceptor((req) => {
  const token = getAccessToken()
  if (token) {
    const headers = new Headers(req.headers)
    headers.set('Authorization', `Bearer ${token}`)
    return { ...req, headers }
  }
  return req
})

export const oops = api.appOopsNoMilk
