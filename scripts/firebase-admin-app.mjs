import { applicationDefault, initializeApp } from "firebase-admin/app";

// Scripts read .env.local for NEXT_PUBLIC_FIREBASE_* and GOOGLE_APPLICATION_CREDENTIALS.
process.loadEnvFile(".env.local");

export const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
});
