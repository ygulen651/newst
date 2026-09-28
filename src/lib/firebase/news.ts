import type { Timestamp } from 'firebase-admin/firestore'
import { adminDb } from './admin'

export type NewsMedia = { url: string; type: string; name: string; path?: string }

export type NewsItem = {
  id: string
  created_at: string
  date: string
  title: string
  description: string
  category: string
  image: string | null
  color: string
  media: NewsMedia[]
}

export const newsCollection = () => adminDb.collection('news')

export async function listNews(limit?: number): Promise<NewsItem[]> {
  let query = newsCollection().orderBy('created_at', 'desc')
  if (limit) query = query.limit(limit)

  const snapshot = await query.get()
  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      created_at: (data.created_at as Timestamp | undefined)?.toDate().toISOString() ?? '',
      date: data.date ?? '',
      title: data.title ?? '',
      description: data.description ?? '',
      category: data.category ?? '',
      image: data.image ?? null,
      color: data.color ?? 'bg-[#020817]',
      media: Array.isArray(data.media) ? data.media : [],
    }
  })
}
