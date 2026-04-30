// PKCE + Authorization Code OIDC flow against bootstrapp.cloud's IdP.
// Token in memory; PKCE verifier in sessionStorage for the redirect round-trip.

const ISSUER = import.meta.env.VITE_OIDC_ISSUER as string
const CLIENT_ID = import.meta.env.VITE_OIDC_CLIENT_ID as string
const REDIRECT_URI = import.meta.env.VITE_OIDC_REDIRECT_URI as string
const SCOPE = import.meta.env.VITE_OIDC_SCOPE as string

const AUTHORIZE = `${ISSUER}/connect/authorize`
const TOKEN = `${ISSUER}/connect/token`
const ENDSESSION = `${ISSUER}/connect/endsession`

const VERIFIER_KEY = 'oops_no_milk.pkce_verifier'
const STATE_KEY = 'oops_no_milk.oidc_state'
const TOKEN_KEY = 'oops_no_milk.access_token'

export interface UserClaims {
  sub: string
  name?: string
  email?: string
  [key: string]: unknown
}

interface AuthState {
  accessToken: string | null
  user: UserClaims | null
}

const state: AuthState = { accessToken: null, user: null }
const listeners = new Set<() => void>()

function notify() {
  listeners.forEach(l => l())
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}

export function getAccessToken(): string | null {
  return state.accessToken
}

export function getUser(): UserClaims | null {
  return state.user
}

function decodeJwt(token: string): UserClaims {
  const payload = token.split('.')[1]
  const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
  return JSON.parse(json) as UserClaims
}

function setToken(token: string) {
  state.accessToken = token
  state.user = decodeJwt(token)
  sessionStorage.setItem(TOKEN_KEY, token)
  notify()
}

function clearToken() {
  state.accessToken = null
  state.user = null
  sessionStorage.removeItem(TOKEN_KEY)
  notify()
}

function randomString(len: number): string {
  const bytes = new Uint8Array(len)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, b => ('0' + b.toString(16)).slice(-2)).join('')
}

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function login(): Promise<void> {
  const verifier = randomString(32)
  const challenge = await sha256(verifier)
  const stateValue = randomString(16)
  sessionStorage.setItem(VERIFIER_KEY, verifier)
  sessionStorage.setItem(STATE_KEY, stateValue)

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPE,
    state: stateValue,
    code_challenge: challenge,
    code_challenge_method: 'S256',
  })
  window.location.assign(`${AUTHORIZE}?${params.toString()}`)
}

let callbackPromise: Promise<boolean> | null = null

export function handleCallbackIfPresent(): Promise<boolean> {
  if (callbackPromise) return callbackPromise
  callbackPromise = doHandleCallback()
  return callbackPromise
}

async function doHandleCallback(): Promise<boolean> {
  const url = new URL(window.location.href)
  const code = url.searchParams.get('code')
  const returnedState = url.searchParams.get('state')
  if (!code) return false

  const expectedState = sessionStorage.getItem(STATE_KEY)
  const verifier = sessionStorage.getItem(VERIFIER_KEY)
  sessionStorage.removeItem(STATE_KEY)
  sessionStorage.removeItem(VERIFIER_KEY)

  if (!verifier || !expectedState || expectedState !== returnedState) {
    throw new Error('OIDC state mismatch')
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    code_verifier: verifier,
  })
  const res = await fetch(TOKEN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Token exchange failed: ${res.status} ${text}`)
  }
  const data = await res.json() as { access_token: string }
  setToken(data.access_token)

  // Strip auth params from URL
  url.searchParams.delete('code')
  url.searchParams.delete('state')
  url.searchParams.delete('session_state')
  url.searchParams.delete('iss')
  window.history.replaceState({}, '', url.pathname + url.search + url.hash)
  return true
}

export function restoreSession() {
  const token = sessionStorage.getItem(TOKEN_KEY)
  if (!token) return
  try {
    const claims = decodeJwt(token)
    const exp = (claims as { exp?: number }).exp
    if (exp && exp * 1000 < Date.now()) {
      sessionStorage.removeItem(TOKEN_KEY)
      return
    }
    state.accessToken = token
    state.user = claims
    notify()
  } catch {
    sessionStorage.removeItem(TOKEN_KEY)
  }
}

export function logout() {
  const token = state.accessToken
  clearToken()
  const params = new URLSearchParams({
    post_logout_redirect_uri: REDIRECT_URI,
  })
  if (token) params.set('id_token_hint', token)
  window.location.assign(`${ENDSESSION}?${params.toString()}`)
}
