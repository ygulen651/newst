import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { adminAuth } from './admin'

export const SESSION_COOKIE = '__session'
export const SESSION_MAX_AGE_MS = 5 * 24 * 60 * 60 * 1000

// Returns the signed-in user only if the session is valid and carries the admin claim.
export async function getAdminUser() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value
  if (!sessionCookie) return null

  try {
    const decoded = await adminAuth.verifySessionCookie(sessionCookie, true)
    return decoded.admin === true ? decoded : null
  } catch {
    return null
  }
}

export async function requireAdmin() {
  const user = await getAdminUser()
  if (!user) redirect('/admin/login')
  return user
}
