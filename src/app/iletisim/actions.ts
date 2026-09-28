'use server'

import { revalidatePath } from 'next/cache'
import { FieldValue } from 'firebase-admin/firestore'
import { messagesCollection } from '@/lib/firebase/messages'

export type ContactFormState = { status: 'idle' | 'success' | 'error'; error?: 'invalid' | 'server' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const field = (formData: FormData, key: string) => String(formData.get(key) ?? '').trim()

export async function submitContactMessage(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Hidden field that people never see; bots that fill it get a fake success.
  if (field(formData, 'website')) return { status: 'success' }

  const name = field(formData, 'name')
  const email = field(formData, 'email')
  const message = field(formData, 'message')

  if (!name || name.length > 120 || !EMAIL_PATTERN.test(email) || email.length > 200 || !message || message.length > 5000) {
    return { status: 'error', error: 'invalid' }
  }

  try {
    await messagesCollection().add({ name, email, message, read: false, createdAt: FieldValue.serverTimestamp() })
  } catch (error) {
    console.error('İletişim mesajı kaydedilemedi:', error)
    return { status: 'error', error: 'server' }
  }

  revalidatePath('/admin', 'layout')
  return { status: 'success' }
}
