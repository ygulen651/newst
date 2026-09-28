'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowDown, ArrowLeft, ArrowUp, Loader2, Plus, Trash2 } from 'lucide-react'
import { ImageField, inputClass, Label, LocalizedField, Section } from '@/components/admin/fields'
import { heatPumpCategories, productPath, productTypeLabels, type Localized, type Product, type ProductType } from '@/lib/products'
import { saveProduct } from './actions'

const emptyText: Localized = { tr: '', en: '' }

export const emptyProduct: Product = {
  slug: '',
  type: 'bess',
  order: 99,
  published: false,
  title: emptyText,
  category: emptyText,
  summary: emptyText,
  description: emptyText,
  specs: [],
  options: [],
  image: '',
  imageFit: 'contain',
  cardImage: '',
  detailImage: '',
  detailImageFit: '',
  technicalTable: null,
  solutions: [],
}

function move<T>(list: T[], index: number, delta: number) {
  const next = [...list]
  const target = index + delta
  if (target < 0 || target >= next.length) return next
  ;[next[index], next[target]] = [next[target], next[index]]
  return next
}

const iconButton = 'p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-30'
const addButton = 'inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-gray-300 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors'

export default function ProductForm({ initial, solutionLinks }: { initial: Product | null; solutionLinks: string[] }) {
  const router = useRouter()
  const [product, setProduct] = useState<Product>(initial ?? emptyProduct)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const set = <K extends keyof Product>(key: K, value: Product[K]) => setProduct((prev) => ({ ...prev, [key]: value }))
  const table = product.technicalTable

  const handleTypeChange = (type: ProductType) => {
    setProduct((prev) => ({
      ...prev,
      type,
      // Heat pumps must use one of the fixed series so they appear on /isi-pompasi.
      category: type === 'heat-pump' ? heatPumpCategories[0] : prev.category,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const result = await saveProduct(initial?.slug ?? null, product)
      if (result.error) {
        setError(result.error)
        return
      }
      router.push('/admin/urunler')
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
          <Link href="/admin/urunler" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-2">
            <ArrowLeft className="w-4 h-4" /> Ürünlere dön
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {initial ? product.title.tr || 'Ürünü düzenle' : 'Yeni ürün'}
          </h1>
          {initial && (
            <a href={productPath(initial)} target="_blank" className="text-sm text-blue-600 hover:underline">
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
          <div>
            <Label>Ürün tipi</Label>
            <select value={product.type} onChange={(e) => handleTypeChange(e.target.value as ProductType)} className={inputClass}>
              {Object.entries(productTypeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <Label>Adres (slug)</Label>
            <input
              value={product.slug}
              onChange={(e) => set('slug', e.target.value.toLowerCase())}
              placeholder="ornek-urun-adi"
              required
              className={inputClass}
            />
            <p className="text-xs text-gray-400 mt-1">Sayfa adresi: {productPath(product)}</p>
          </div>
          <div>
            <Label>Sıra</Label>
            <input type="number" value={product.order} onChange={(e) => set('order', Number(e.target.value))} className={inputClass} />
          </div>
        </div>
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input type="checkbox" checked={product.published} onChange={(e) => set('published', e.target.checked)} className="w-5 h-5" />
          Sitede yayınla
        </label>

        <LocalizedField label="Ürün adı" value={product.title} onChange={(v) => set('title', v)} />
        {product.type === 'heat-pump' ? (
          <div>
            <Label>Seri</Label>
            <select
              value={product.category.tr}
              onChange={(e) => set('category', heatPumpCategories.find((c) => c.tr === e.target.value) ?? heatPumpCategories[0])}
              className={inputClass}
            >
              {heatPumpCategories.map((category) => (
                <option key={category.tr} value={category.tr}>{category.tr} / {category.en}</option>
              ))}
            </select>
          </div>
        ) : (
          <LocalizedField label="Kategori" value={product.category} onChange={(v) => set('category', v)} />
        )}
        <LocalizedField label="Kısa özet (liste kartında görünür)" value={product.summary} onChange={(v) => set('summary', v)} multiline rows={3} />
        <LocalizedField label="Açıklama (detay sayfası)" value={product.description} onChange={(v) => set('description', v)} multiline rows={6} />
      </Section>

      <Section title="Görseller">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <ImageField label="Ana görsel" value={product.image} onChange={(v) => set('image', v)} folder="products" />
            <select value={product.imageFit} onChange={(e) => set('imageFit', e.target.value as Product['imageFit'])} className={inputClass}>
              <option value="contain">Sığdır (ürün fotoğrafı, kenar boşluklu)</option>
              <option value="cover">Doldur (kırpılarak tüm alanı kaplar)</option>
            </select>
          </div>
          <ImageField
            label="Liste kartı görseli (isteğe bağlı)"
            value={product.cardImage}
            onChange={(v) => set('cardImage', v)}
            folder="products"
            hint="Boş bırakılırsa ana görsel kullanılır."
          />
          <div className="space-y-3">
            <ImageField
              label="Detay sayfası görseli (isteğe bağlı)"
              value={product.detailImage}
              onChange={(v) => set('detailImage', v)}
              folder="products"
              hint="Boş bırakılırsa ana görsel kullanılır."
            />
            <select
              value={product.detailImageFit}
              onChange={(e) => set('detailImageFit', e.target.value as Product['detailImageFit'])}
              className={inputClass}
            >
              <option value="">Ana görselle aynı yerleşim</option>
              <option value="contain">Sığdır</option>
              <option value="cover">Doldur</option>
            </select>
          </div>
        </div>
      </Section>

      <Section title="Özellikler">
        <div className="space-y-3">
          {product.specs.map((spec, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                <input value={spec.tr} placeholder="Türkçe" onChange={(e) => set('specs', product.specs.map((s, j) => (j === i ? { ...s, tr: e.target.value } : s)))} className={inputClass} />
                <input value={spec.en} placeholder="English" onChange={(e) => set('specs', product.specs.map((s, j) => (j === i ? { ...s, en: e.target.value } : s)))} className={inputClass} />
              </div>
              <button type="button" onClick={() => set('specs', move(product.specs, i, -1))} disabled={i === 0} className={iconButton}><ArrowUp className="w-4 h-4" /></button>
              <button type="button" onClick={() => set('specs', move(product.specs, i, 1))} disabled={i === product.specs.length - 1} className={iconButton}><ArrowDown className="w-4 h-4" /></button>
              <button type="button" onClick={() => set('specs', product.specs.filter((_, j) => j !== i))} className={`${iconButton} hover:text-red-500`}><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => set('specs', [...product.specs, { tr: '', en: '' }])} className={addButton}>
          <Plus className="w-4 h-4" /> Özellik ekle
        </button>

        <div>
          <Label>Seçenekler / kapasiteler (her satıra bir tane, iki dilde aynı görünür)</Label>
          <textarea
            rows={4}
            value={product.options.join('\n')}
            onChange={(e) => set('options', e.target.value.split('\n'))}
            placeholder={'5 kWh\n10 kWh'}
            className={`${inputClass} resize-y`}
          />
        </div>
      </Section>

      <Section title="Teknik tablo">
        {!table ? (
          <button type="button" onClick={() => set('technicalTable', { columns: [''], rows: [] })} className={addButton}>
            <Plus className="w-4 h-4" /> Teknik tablo ekle
          </button>
        ) : (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="border-separate border-spacing-2">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 min-w-[180px]">Satır adı (TR)</th>
                    <th className="text-left text-xs font-medium text-gray-500 min-w-[180px]">Satır adı (EN)</th>
                    {table.columns.map((column, c) => (
                      <th key={c} className="min-w-[120px]">
                        <div className="flex gap-1">
                          <input
                            value={column}
                            placeholder="Model"
                            onChange={(e) => set('technicalTable', { ...table, columns: table.columns.map((col, j) => (j === c ? e.target.value : col)) })}
                            className={`${inputClass} font-bold`}
                          />
                          <button
                            type="button"
                            title="Sütunu sil"
                            onClick={() =>
                              set('technicalTable', {
                                columns: table.columns.filter((_, j) => j !== c),
                                rows: table.rows.map((row) => ({ ...row, values: row.values.filter((_, j) => j !== c) })),
                              })
                            }
                            className={`${iconButton} hover:text-red-500`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, r) => {
                    const updateRow = (next: typeof row) => set('technicalTable', { ...table, rows: table.rows.map((x, j) => (j === r ? next : x)) })
                    return (
                      <tr key={r}>
                        <td><input value={row.label.tr} onChange={(e) => updateRow({ ...row, label: { ...row.label, tr: e.target.value } })} className={inputClass} /></td>
                        <td><input value={row.label.en} onChange={(e) => updateRow({ ...row, label: { ...row.label, en: e.target.value } })} className={inputClass} /></td>
                        {table.columns.map((_, c) => (
                          <td key={c}>
                            <input
                              value={row.values[c] ?? ''}
                              onChange={(e) => {
                                const values = table.columns.map((__, j) => (j === c ? e.target.value : row.values[j] ?? ''))
                                updateRow({ ...row, values })
                              }}
                              className={inputClass}
                            />
                          </td>
                        ))}
                        <td>
                          <button type="button" title="Satırı sil" onClick={() => set('technicalTable', { ...table, rows: table.rows.filter((_, j) => j !== r) })} className={`${iconButton} hover:text-red-500`}>
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => set('technicalTable', { ...table, rows: [...table.rows, { label: { tr: '', en: '' }, values: table.columns.map(() => '') }] })} className={addButton}>
                <Plus className="w-4 h-4" /> Satır ekle
              </button>
              <button type="button" onClick={() => set('technicalTable', { columns: [...table.columns, ''], rows: table.rows.map((row) => ({ ...row, values: [...row.values, ''] })) })} className={addButton}>
                <Plus className="w-4 h-4" /> Sütun ekle
              </button>
              <button
                type="button"
                onClick={() => confirm('Teknik tablo tamamen kaldırılsın mı?') && set('technicalTable', null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Tabloyu kaldır
              </button>
            </div>
          </div>
        )}
      </Section>

      <Section title="Kullanıldığı çözüm alanları">
        <datalist id="solution-links">
          {solutionLinks.map((href) => <option key={href} value={href} />)}
        </datalist>
        <div className="space-y-3">
          {product.solutions.map((solution, i) => {
            const update = (next: typeof solution) => set('solutions', product.solutions.map((s, j) => (j === i ? next : s)))
            return (
              <div key={i} className="flex gap-2 items-start">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input value={solution.title.tr} placeholder="Başlık (TR)" onChange={(e) => update({ ...solution, title: { ...solution.title, tr: e.target.value } })} className={inputClass} />
                  <input value={solution.title.en} placeholder="Title (EN)" onChange={(e) => update({ ...solution, title: { ...solution.title, en: e.target.value } })} className={inputClass} />
                  <input value={solution.href} placeholder="/cozumlerimiz/..." list="solution-links" onChange={(e) => update({ ...solution, href: e.target.value })} className={inputClass} />
                </div>
                <button type="button" onClick={() => set('solutions', product.solutions.filter((_, j) => j !== i))} className={`${iconButton} hover:text-red-500`}><Trash2 className="w-4 h-4" /></button>
              </div>
            )
          })}
        </div>
        <button type="button" onClick={() => set('solutions', [...product.solutions, { title: { tr: '', en: '' }, href: '' }])} className={addButton}>
          <Plus className="w-4 h-4" /> Çözüm bağlantısı ekle
        </button>
      </Section>
    </form>
  )
}
