'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { PRODUCTS_TAG, productsCollection } from '@/lib/firebase/products'
import { requireAdmin } from '@/lib/firebase/session'
import type { ImageFit, Localized, Product } from '@/lib/products'

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const str = (value: unknown) => (typeof value === 'string' ? value.trim() : '')
const localized = (value: unknown): Localized => {
  const v = value as Partial<Localized> | undefined
  return { tr: str(v?.tr), en: str(v?.en) }
}
const fit = (value: unknown): ImageFit => (value === 'contain' ? 'contain' : 'cover')

// Never trust the client payload: rebuild the document field by field.
function sanitize(input: Product): Omit<Product, 'slug'> {
  const columns = (input.technicalTable?.columns ?? []).map(str)

  return {
    type: input.type === 'heat-pump' ? 'heat-pump' : 'bess',
    order: Number.isFinite(Number(input.order)) ? Number(input.order) : 0,
    published: input.published === true,
    title: localized(input.title),
    category: localized(input.category),
    summary: localized(input.summary),
    description: localized(input.description),
    specs: (input.specs ?? []).map(localized).filter((spec) => spec.tr),
    options: (input.options ?? []).map(str).filter(Boolean),
    image: str(input.image),
    imageFit: fit(input.imageFit),
    cardImage: str(input.cardImage),
    detailImage: str(input.detailImage),
    detailImageFit: input.detailImageFit ? fit(input.detailImageFit) : '',
    technicalTable:
      input.technicalTable && columns.length > 0
        ? {
            columns,
            rows: (input.technicalTable.rows ?? [])
              .map((row) => ({
                label: localized(row.label),
                values: columns.map((_, i) => str(row.values?.[i])),
              }))
              .filter((row) => row.label.tr),
          }
        : null,
    solutions: (input.solutions ?? [])
      .map((solution) => ({ title: localized(solution.title), href: str(solution.href) }))
      .filter((solution) => solution.title.tr && solution.href),
  }
}

function refreshProductPages() {
  revalidateTag(PRODUCTS_TAG, { expire: 0 })
  revalidatePath('/admin/urunler')
}

export async function saveProduct(originalSlug: string | null, input: Product) {
  await requireAdmin()

  const slug = str(input.slug)
  if (!SLUG_PATTERN.test(slug)) {
    return { error: 'Adres (slug) yalnızca küçük harf, rakam ve tire içerebilir. Örnek: ev-tipi-bess' }
  }

  const data = sanitize(input)
  if (!data.title.tr) return { error: 'Türkçe ürün adı zorunludur.' }
  if (!data.image) return { error: 'Ana görsel zorunludur.' }

  const ref = productsCollection().doc(slug)
  if (slug !== originalSlug && (await ref.get()).exists) {
    return { error: `"${slug}" adresiyle başka bir ürün zaten var.` }
  }

  await ref.set(data)
  // Renaming the slug moves the product to a new document.
  if (originalSlug && originalSlug !== slug) {
    await productsCollection().doc(originalSlug).delete()
  }

  refreshProductPages()
  return { error: null, slug }
}

export async function deleteProduct(slug: string) {
  await requireAdmin()
  await productsCollection().doc(slug).delete()
  refreshProductPages()
}

export async function setProductPublished(slug: string, published: boolean) {
  await requireAdmin()
  await productsCollection().doc(slug).update({ published })
  refreshProductPages()
}
