'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { IconSelect, ImageField, inputClass, Label, ListEditor, LocalizedField, Section } from '@/components/admin/fields'
import type { Localized } from '@/lib/products'
import type { Solution, SolutionBenefit, SolutionProduct, SolutionSegment } from '@/lib/solutions'
import { saveSolution } from './actions'

const emptyText = (): Localized => ({ tr: '', en: '' })
const newBenefit = (): SolutionBenefit => ({ icon: 'Zap', title: emptyText(), desc: emptyText() })
const newSegment = (): SolutionSegment => ({ ...newBenefit(), image: '', thumbnail: '' })
const newProduct = (): SolutionProduct => ({ eyebrow: emptyText(), title: emptyText(), desc: emptyText(), href: '', image: '' })

export const emptySolution: Solution = {
  slug: '',
  order: 99,
  published: false,
  title: emptyText(),
  navTitle: emptyText(),
  icon: 'Zap',
  image: '',
  shortDesc: emptyText(),
  intro: emptyText(),
  highlight: emptyText(),
  segmentsTitle: emptyText(),
  segments: [],
  whyBess: [],
  whyHeatPump: [],
  products: [],
}

function BenefitFields({ item, update }: { item: SolutionBenefit; update: (item: SolutionBenefit) => void }) {
  return (
    <>
      <div className="max-w-xs">
        <Label>İkon</Label>
        <IconSelect value={item.icon} onChange={(icon) => update({ ...item, icon })} />
      </div>
      <LocalizedField label="Başlık" value={item.title} onChange={(title) => update({ ...item, title })} />
      <LocalizedField label="Açıklama" value={item.desc} onChange={(desc) => update({ ...item, desc })} multiline rows={2} />
    </>
  )
}

export default function SolutionForm({ initial, productLinks }: { initial: Solution | null; productLinks: string[] }) {
  const router = useRouter()
  const [solution, setSolution] = useState<Solution>(initial ?? emptySolution)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const set = <K extends keyof Solution>(key: K, value: Solution[K]) => setSolution((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const result = await saveSolution(initial?.slug ?? null, solution)
      if (result.error) {
        setError(result.error)
        return
      }
      router.push('/admin/cozumler')
      router.refresh()
    } catch (err) {
      setError('Kaydedilemedi: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Link href="/admin/cozumler" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-2">
            <ArrowLeft className="w-4 h-4" /> Çözümlere dön
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {initial ? solution.title.tr || 'Çözümü düzenle' : 'Yeni çözüm'}
          </h1>
          {initial && (
            <a href={`/cozumlerimiz/${initial.slug}`} target="_blank" className="text-sm text-blue-600 hover:underline">
              Sitede görüntüle ↗
            </a>
          )}
        </div>
        <button
          type="submit"
          disabled={saving}
          className="bg-[#020817] text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {saving && <Loader2 className="w-5 h-5 animate-spin" />} Kaydet
        </button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-xl">{error}</div>}

      <Section title="Genel">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Label>Adres (slug)</Label>
            <input
              value={solution.slug}
              onChange={(e) => set('slug', e.target.value.toLowerCase())}
              placeholder="ornek-cozum"
              required
              className={inputClass}
            />
            <p className="text-xs text-gray-400 mt-1">Sayfa adresi: /cozumlerimiz/{solution.slug}</p>
          </div>
          <div>
            <Label>Sıra</Label>
            <input type="number" value={solution.order} onChange={(e) => set('order', Number(e.target.value))} className={inputClass} />
          </div>
          <div>
            <Label>İkon</Label>
            <IconSelect value={solution.icon} onChange={(icon) => set('icon', icon)} />
          </div>
        </div>
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input type="checkbox" checked={solution.published} onChange={(e) => set('published', e.target.checked)} className="w-5 h-5" />
          Sitede yayınla
        </label>

        <LocalizedField label="Başlık" value={solution.title} onChange={(v) => set('title', v)} />
        <LocalizedField label="Kısa başlık (ana sayfadaki sekme)" value={solution.navTitle} onChange={(v) => set('navTitle', v)} />
        <ImageField label="Kapak görseli" value={solution.image} onChange={(v) => set('image', v)} folder="solutions" />
        <LocalizedField label="Kısa açıklama (kartlar ve ana sayfa)" value={solution.shortDesc} onChange={(v) => set('shortDesc', v)} multiline rows={3} />
        <LocalizedField
          label="Giriş metni (paragrafları boş bir satırla ayırın)"
          value={solution.intro}
          onChange={(v) => set('intro', v)}
          multiline
          rows={8}
        />
        <LocalizedField label="Vurgulu cümle" value={solution.highlight} onChange={(v) => set('highlight', v)} multiline rows={2} />
      </Section>

      <Section title="Alt segmentler" description="Örn. Demir-Çelik, Çimento. Boş bırakılırsa bu bölüm sayfada görünmez.">
        <LocalizedField label="Bölüm başlığı" value={solution.segmentsTitle} onChange={(v) => set('segmentsTitle', v)} />
        <ListEditor
          items={solution.segments}
          onChange={(items) => set('segments', items)}
          newItem={newSegment}
          addLabel="Segment ekle"
          renderItem={(item, update) => (
            <>
              <BenefitFields item={item} update={(next) => update({ ...item, ...next })} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ImageField label="Küçük görsel (ikon yerine gösterilir)" value={item.thumbnail} onChange={(thumbnail) => update({ ...item, thumbnail })} folder="solutions" />
                <ImageField label="Büyük görsel (kartın üstünde)" value={item.image} onChange={(image) => update({ ...item, image })} folder="solutions" />
              </div>
            </>
          )}
        />
      </Section>

      <Section title="Neden BESS? kartları" description="Boş bırakılırsa bu bölüm sayfada görünmez.">
        <ListEditor
          items={solution.whyBess}
          onChange={(items) => set('whyBess', items)}
          newItem={newBenefit}
          addLabel="Kart ekle"
          renderItem={(item, update) => <BenefitFields item={item} update={update} />}
        />
      </Section>

      <Section title="Neden Isı Pompası? kartları" description="Boş bırakılırsa bu bölüm sayfada görünmez.">
        <ListEditor
          items={solution.whyHeatPump}
          onChange={(items) => set('whyHeatPump', items)}
          newItem={newBenefit}
          addLabel="Kart ekle"
          renderItem={(item, update) => <BenefitFields item={item} update={update} />}
        />
      </Section>

      <Section title="Önerilen ürünler">
        <datalist id="product-links">
          {productLinks.map((href) => <option key={href} value={href} />)}
        </datalist>
        <ListEditor
          items={solution.products}
          onChange={(items) => set('products', items)}
          newItem={newProduct}
          addLabel="Ürün ekle"
          renderItem={(item, update) => (
            <>
              <LocalizedField label="Üst etiket" value={item.eyebrow} onChange={(eyebrow) => update({ ...item, eyebrow })} />
              <LocalizedField label="Ürün adı" value={item.title} onChange={(title) => update({ ...item, title })} />
              <LocalizedField label="Açıklama" value={item.desc} onChange={(desc) => update({ ...item, desc })} multiline rows={2} />
              <div>
                <Label>Bağlantı</Label>
                <input value={item.href} onChange={(e) => update({ ...item, href: e.target.value })} list="product-links" placeholder="/bess/..." className={inputClass} />
              </div>
              <ImageField label="Görsel" value={item.image} onChange={(image) => update({ ...item, image })} folder="solutions" />
            </>
          )}
        />
      </Section>
    </form>
  )
}
