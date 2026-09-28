'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { CONTENT_TAG, contentCollection } from '@/lib/firebase/content'
import { requireAdmin } from '@/lib/firebase/session'
import { getPageDef, pageFields } from '@/lib/content/registry'
import { isLocalizedType, type FieldDef, type FieldValue, type ListItem, type PageValues, type ScalarType, type ScalarValue } from '@/lib/content/types'

const str = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

function scalar(type: ScalarType, value: unknown): ScalarValue {
  if (!isLocalizedType(type)) return str(value)
  const v = value as { tr?: unknown; en?: unknown } | undefined
  return { tr: str(v?.tr), en: str(v?.en) }
}

const isEmpty = (value: ScalarValue) => (typeof value === 'string' ? !value : !value.tr && !value.en)

function sanitizeField(field: FieldDef, value: unknown): FieldValue {
  if (field.type !== 'list') return scalar(field.type, value)
  return (Array.isArray(value) ? value : [])
    .map((item) => Object.fromEntries(field.fields.map((sub) => [sub.key, scalar(sub.type, (item as ListItem)?.[sub.key])])) as ListItem)
    .filter((item) => Object.values(item).some((v) => !isEmpty(v)))
}

// Stores only the fields that differ from the built-in defaults, so untouched copy keeps following the code.
export async function savePageContent(pageId: string, input: PageValues) {
  await requireAdmin()
  const page = getPageDef(pageId)
  if (!page) return { error: 'Bilinmeyen sayfa.' }

  const overrides: PageValues = {}
  for (const field of pageFields(page)) {
    const value = sanitizeField(field, input[field.key])
    if (JSON.stringify(value) !== JSON.stringify(field.default)) overrides[field.key] = value
  }

  await contentCollection().doc(pageId).set({ values: overrides })
  revalidateTag(CONTENT_TAG, { expire: 0 })
  revalidatePath(`/admin/icerik/${pageId}`)
  return { error: null, changed: Object.keys(overrides).length }
}
