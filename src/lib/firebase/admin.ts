import { applicationDefault, cert, getApp, getApps, initializeApp, type ServiceAccount } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

// Accepts the service account JSON as-is, wrapped in quotes, or base64-encoded
// (base64 survives copy/paste into hosting dashboards without being mangled).
function parseServiceAccount(raw: string): ServiceAccount {
  let value = raw.trim()
  if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
    value = value.slice(1, -1)
  }
  if (!value.startsWith('{')) {
    value = Buffer.from(value, 'base64').toString('utf8')
  }

  let parsed: Record<string, string>
  try {
    parsed = JSON.parse(value)
  } catch {
    throw new Error(
      'FIREBASE_SERVICE_ACCOUNT_KEY okunamadı: değer geçerli bir service account JSON (veya base64) değil. ' +
        'Hosting panelindeki değeri kontrol edin.'
    )
  }
  // Some dashboards turn real newlines in the private key into literal "\n".
  if (parsed.private_key) parsed.private_key = parsed.private_key.replace(/\\n/g, '\n')
  return parsed as ServiceAccount
}

// FIREBASE_SERVICE_ACCOUNT_KEY is for hosts like Vercel, cPanel or Docker.
// Otherwise Application Default Credentials are used: GOOGLE_APPLICATION_CREDENTIALS
// locally, or the built-in service account on Firebase App Hosting.
function createAdminApp() {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

  return initializeApp({
    credential: serviceAccount ? cert(parseServiceAccount(serviceAccount)) : applicationDefault(),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  })
}

// Created on first use so a bad credential surfaces as a handled error instead of
// crashing every module that imports this file.
const adminApp = () => (getApps().length ? getApp() : createAdminApp())

function lazy<T extends object>(create: () => T): T {
  let instance: T | undefined
  return new Proxy({} as T, {
    get(_target, prop) {
      instance ??= create()
      const value = Reflect.get(instance, prop)
      return typeof value === 'function' ? value.bind(instance) : value
    },
  })
}

export const adminAuth = lazy(() => getAuth(adminApp()))
export const adminDb = lazy(() => getFirestore(adminApp()))
export const adminBucket = lazy(() => getStorage(adminApp()).bucket())
