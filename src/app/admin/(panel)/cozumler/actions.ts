'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { SOLUTIONS_TAG, solutionsCollection } from '@/lib/firebase/solutions'
import { requireAdmin } from '@/lib/firebase/session'
import type { Localized } from '@/lib/products'
import type { Solution, SolutionBenefit } from '@/lib/solutions'

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const str = (value: unknown) => (typeof value === 'string' ? value.trim() : '')
const localized = (value: unknown): Localized => {
  const v = value as Partial<Localized> | undefined
  return { tr: str(v?.tr), en: str(v?.en) }
}
const benefit = (value: Partial<SolutionBenefit>): SolutionBenefit => ({ icon: str(value?.icon), title: localized(value?.title), desc: localized(value?.desc) })

// Never trust the client payload: rebuild the document field by field.
function sanitize(input: Solution): Omit<Solution, 'slug'> {
  return {
    order: Number.isFinite(Number(input.order)) ? Number(input.order) : 0,
    published: input.published === true,
    title: localized(input.title),
    navTitle: localized(input.navTitle),
    icon: str(input.icon),
    image: str(input.image),
    shortDesc: localized(input.shortDesc),
    intro: localized(input.intro),
    highlight: localized(input.highlight),
    segmentsTitle: localized(input.segmentsTitle),
    segments: (input.segments ?? [])
      .map((s) => ({ ...benefit(s), image: str(s.image), thumbnail: str(s.thumbnail) }))
      .filter((s) => s.title.tr),
    whyBess: (input.whyBess ?? []).map(benefit).filter((b) => b.title.tr),
    whyHeatPump: (input.whyHeatPump ?? []).map(benefit).filter((b) => b.title.tr),
    products: (input.products ?? [])
      .map((p) => ({ eyebrow: localized(p.eyebrow), title: localized(p.title), desc: localized(p.desc), href: str(p.href), image: str(p.image) }))
      .filter((p) => p.title.tr && p.href),
  }
}

function refreshSolutionPages() {
  revalidateTag(SOLUTIONS_TAG, { expire: 0 })
  revalidatePath('/admin/cozumler')
}

export async function saveSolution(originalSlug: string | null, input: Solution) {
  await requireAdmin()

  const slug = str(input.slug)
  if (!SLUG_PATTERN.test(slug)) {
    return { error: 'Adres (slug) yalnızca küçük harf, rakam ve tire içerebilir. Örnek: sanayi-tesisleri' }
  }

  const data = sanitize(input)
  if (!data.title.tr) return { error: 'Türkçe başlık zorunludur.' }
  if (!data.image) return { error: 'Kapak görseli zorunludur.' }

  const ref = solutionsCollection().doc(slug)
  if (slug !== originalSlug && (await ref.get()).exists) {
    return { error: `"${slug}" adresiyle başka bir çözüm zaten var.` }
  }

  await ref.set(data)
  // Renaming the slug moves the solution to a new document.
  if (originalSlug && originalSlug !== slug) {
    await solutionsCollection().doc(originalSlug).delete()
  }

  refreshSolutionPages()
  return { error: null, slug }
}

export async function deleteSolution(slug: string) {
  await requireAdmin()
  await solutionsCollection().doc(slug).delete()
  refreshSolutionPages()
}

export async function setSolutionPublished(slug: string, published: boolean) {
  await requireAdmin()
  await solutionsCollection().doc(slug).update({ published })
  refreshSolutionPages()
}
