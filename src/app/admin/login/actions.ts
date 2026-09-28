'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { adminAuth } from '@/lib/firebase/admin'
import { SESSION_COOKIE, SESSION_MAX_AGE_MS } from '@/lib/firebase/session'

export async function createSession(idToken: string) {
  let decoded
  try {
    decoded = await adminAuth.verifyIdToken(idToken)
  } catch {
    return { error: 'Oturum doğrulanamadı.' }
  }

  if (decoded.admin !== true) {
    return { error: 'Bu hesabın admin paneline erişim yetkisi yok.' }
  }

  const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: SESSION_MAX_AGE_MS })
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, sessionCookie, {
    maxAge: SESSION_MAX_AGE_MS / 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })

  return { error: null }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
  redirect('/admin/login')
}
