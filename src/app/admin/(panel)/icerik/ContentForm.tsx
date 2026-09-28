'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Loader2, RotateCcw } from 'lucide-react'
import { IconSelect, ImageField, inputClass, Label, ListEditor, LocalizedField, Section } from '@/components/admin/fields'
import { getPageDef, resolvePageValues } from '@/lib/content/registry'
import { isLocalizedType, type ListItem, type Localized, type PageValues, type ScalarField, type ScalarValue } from '@/lib/content/types'
import { savePageContent } from './actions'

type ScalarInput = Pick<ScalarField, 'key' | 'label' | 'type' | 'help'>

function ScalarEditor({ field, value, onChange, folder }: { field: ScalarInput; value: ScalarValue; onChange: (value: ScalarValue) => void; folder: string }) {
  if (isLocalizedType(field.type)) {
    const localized = typeof value === 'string' ? { tr: value, en: '' } : value
    return (
      <div>
        <LocalizedField
          label={field.label}
          value={localized}
          onChange={onChange}
          multiline={field.type === 'textarea'}
          rows={field.type === 'textarea' ? 4 : undefined}
        />
        {!localized.en && localized.tr && <p className="text-xs text-gray-400 mt-1">İngilizce boş: sitede otomatik çeviri kullanılır.</p>}
        {field.help && <p className="text-xs text-gray-400 mt-1">{field.help}</p>}
      </div>
    )
  }

  const text = typeof value === 'string' ? value : value.tr
  if (field.type === 'image' || field.type === 'video') {
    return <ImageField label={field.label} value={text} onChange={onChange} folder={folder} kind={field.type} hint={field.help} />
  }
  if (field.type === 'icon') {
    return (
      <div className="max-w-xs">
        <Label>{field.label}</Label>
        <IconSelect value={text} onChange={onChange} />
      </div>
    )
  }
  return (
    <div>
      <Label>{field.label}</Label>
      <input value={text} onChange={(e) => onChange(e.target.value)} className={inputClass} />
      {field.help && <p className="text-xs text-gray-400 mt-1">{field.help}</p>}
    </div>
  )
}

const emptyScalar = (field: ScalarInput): ScalarValue => (isLocalizedType(field.type) ? ({ tr: '', en: '' } as Localized) : '')

export default function ContentForm({ pageId, initialValues }: { pageId: string; initialValues: PageValues }) {
  const page = getPageDef(pageId)!
  const router = useRouter()
  const [values, setValues] = useState<PageValues>(initialValues)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'ok' | 'error'; text: string } | null>(null)
  const folder = `pages/${pageId}`

  const set = (key: string, value: PageValues[string]) => setValues((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)
    try {
      const result = await savePageContent(pageId, values)
      if (result.error) {
        setMessage({ type: 'error', text: result.error })
        return
      }
      setMessage({ type: 'ok', text: 'Kaydedildi. Değişiklikler sitede yayında.' })
      router.refresh()
    } catch (err) {
      setMessage({ type: 'error', text: 'Kaydedilemedi: ' + (err instanceof Error ? err.message : String(err)) })
    } finally {
      setSaving(false)
    }
  }

  const resetToDefaults = () => {
    if (confirm('Bu sayfadaki tüm alanlar varsayılan metinlere dönsün mü? Kaydetmeden önce değişiklik yayına girmez.')) {
      setValues(resolvePageValues(page, {}))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      <div className="flex items-center justify-between gap-4 sticky top-0 z-10 bg-[#f8fafc] py-4">
        <div>
          <Link href="/admin/icerik" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-2">
            <ArrowLeft className="w-4 h-4" /> Sayfa içerikleri
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{page.title}</h1>
          <a href={page.path} target="_blank" className="text-sm text-blue-600 hover:underline">
            Sitede görüntüle ↗
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={resetToDefaults} className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-sm text-gray-500 hover:bg-gray-100">
            <RotateCcw className="w-4 h-4" /> Varsayılana dön
          </button>
          <button
            type="submit"
            disabled={saving}
            className="bg-[#020817] text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {saving && <Loader2 className="w-5 h-5 animate-spin" />} Kaydet
          </button>
        </div>
      </div>

      {message && (
        <div className={`text-sm p-4 rounded-xl border ${message.type === 'ok' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
          {message.text}
        </div>
      )}

      {page.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          {section.fields.map((field) =>
            field.type === 'list' ? (
              <div key={field.key} className="space-y-2">
                <Label>{field.label}</Label>
                {field.help && <p className="text-xs text-gray-400">{field.help}</p>}
                <ListEditor<ListItem>
                  items={values[field.key] as ListItem[]}
                  onChange={(items) => set(field.key, items)}
                  newItem={() => Object.fromEntries(field.fields.map((sub) => [sub.key, emptyScalar(sub)]))}
                  addLabel={`${field.itemLabel} ekle`}
                  renderItem={(item, update) =>
                    field.fields.map((sub) => (
                      <ScalarEditor
                        key={sub.key}
                        field={sub}
                        value={item[sub.key] ?? emptyScalar(sub)}
                        onChange={(v) => update({ ...item, [sub.key]: v })}
                        folder={folder}
                      />
                    ))
                  }
                />
              </div>
            ) : (
              <ScalarEditor key={field.key} field={field} value={values[field.key] as ScalarValue} onChange={(v) => set(field.key, v)} folder={folder} />
            )
          )}
        </Section>
      ))}
    </form>
  )
}
