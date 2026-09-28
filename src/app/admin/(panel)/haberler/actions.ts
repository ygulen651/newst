'use server'

import { revalidatePath } from 'next/cache'
import { FieldValue } from 'firebase-admin/firestore'
import { adminBucket } from '@/lib/firebase/admin'
import { newsCollection, type NewsMedia } from '@/lib/firebase/news'
import { requireAdmin } from '@/lib/firebase/session'

export type NewsInput = {
  title: string
  description: string
  category: string
  date: string
  color: string
  media: NewsMedia[]
}

export async function createNews(input: NewsInput) {
  await requireAdmin()

  if (!input.title?.trim()) throw new Error('Başlık zorunludur.')

  await newsCollection().add({
    title: input.title,
    description: input.description ?? '',
    category: input.category ?? '',
    date: input.date ?? '',
    color: input.color || 'bg-[#1e3a8a]',
    image: input.media.find((m) => m.type.startsWith('image/'))?.url ?? null,
    media: input.media,
    created_at: FieldValue.serverTimestamp(),
  })

  revalidatePath('/admin', 'layout')
}

export async function deleteNews(id: string) {
  await requireAdmin()

  const ref = newsCollection().doc(id)
  const snapshot = await ref.get()
  const media: NewsMedia[] = snapshot.data()?.media ?? []

  await ref.delete()
  // Remove the uploaded files too so they don't linger in Storage.
  await Promise.all(
    media.filter((m) => m.path).map((m) => adminBucket.file(m.path!).delete({ ignoreNotFound: true }))
  )

  revalidatePath('/admin', 'layout')
}
