import { applicationDefault, cert, getApp, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

// FIREBASE_SERVICE_ACCOUNT_KEY (JSON string) is for hosts like cPanel/Docker.
// Otherwise Application Default Credentials are used: GOOGLE_APPLICATION_CREDENTIALS
// locally, or the built-in service account on Firebase App Hosting.
function createAdminApp() {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

  return initializeApp({
    credential: serviceAccountJson ? cert(JSON.parse(serviceAccountJson)) : applicationDefault(),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  })
}

const adminApp = getApps().length ? getApp() : createAdminApp()

export const adminAuth = getAuth(adminApp)
export const adminDb = getFirestore(adminApp)
export const adminBucket = getStorage(adminApp).bucket()
