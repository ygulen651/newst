'use client'

import React, { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { ArrowDown, ArrowUp, ImageIcon, Loader2, Plus, Trash2, Upload } from 'lucide-react'
import { auth, storage } from '@/lib/firebase/client'
import type { Localized } from '@/lib/products'
import { getIcon, iconNames } from '@/lib/icons'

export const inputClass =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-gray-700 block mb-1">{children}</label>
}

export function LocalizedField({
  label,
  value,
  onChange,
  multiline = false,
  rows = 4,
}: {
  label: string
  value: Localized
  onChange: (value: Localized) => void
  multiline?: boolean
  rows?: number
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {(['tr', 'en'] as const).map((lang) => (
          <div key={lang} className="relative">
            <span className="absolute right-3 top-3 text-[10px] font-bold uppercase text-gray-400">{lang}</span>
            {multiline ? (
              <textarea
                rows={rows}
                value={value[lang]}
                onChange={(e) => onChange({ ...value, [lang]: e.target.value })}
                className={`${inputClass} pr-10 resize-y`}
              />
            ) : (
              <input
                value={value[lang]}
                onChange={(e) => onChange({ ...value, [lang]: e.target.value })}
                className={`${inputClass} pr-10`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Image path/URL with a preview and an upload button that stores the file under site-media/<folder>.
export function ImageField({
  label,
  value,
  onChange,
  folder,
  hint,
  kind = 'image',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  folder: string
  hint?: string
  kind?: 'image' | 'video'
}) {
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return

    setUploading(true)
    try {
      await auth.authStateReady()
      if (!auth.currentUser) throw new Error('Oturum süresi dolmuş, lütfen tekrar giriş yapın.')

      const fileRef = ref(storage, `site-media/${folder}/${crypto.randomUUID()}.${file.name.split('.').pop()}`)
      await uploadBytes(fileRef, file, { contentType: file.type })
      onChange(await getDownloadURL(fileRef))
    } catch (error) {
      alert('Görsel yüklenemedi: ' + (error instanceof Error ? error.message : String(error)))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <Label>{label}</Label>
      <div className="flex gap-4 items-start">
        <div className="w-24 h-24 shrink-0 rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
          {value && kind === 'video' ? (
            <video src={value} muted className="w-full h-full object-cover" />
          ) : value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="w-full h-full object-contain" />
          ) : (
            <ImageIcon className="w-8 h-8 text-gray-300" />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="/images/... veya yüklenen görsel adresi" className={inputClass} />
          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {uploading ? 'Yükleniyor...' : kind === 'video' ? 'Video yükle' : 'Görsel yükle'}
            <input type="file" accept={kind === 'video' ? 'video/*' : 'image/*'} onChange={handleUpload} disabled={uploading} className="hidden" />
          </label>
          {hint && <p className="text-xs text-gray-400">{hint}</p>}
        </div>
      </div>
    </div>
  )
}

export function IconSelect({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center">
        {React.createElement(getIcon(value), { className: 'w-6 h-6' })}
      </div>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
        {iconNames.map((name) => <option key={name} value={name}>{name}</option>)}
      </select>
    </div>
  )
}

const iconButton = 'p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-30'

// Editable list of cards with add / remove / reorder controls.
export function ListEditor<T>({
  items,
  onChange,
  newItem,
  addLabel,
  renderItem,
}: {
  items: T[]
  onChange: (items: T[]) => void
  newItem: () => T
  addLabel: string
  renderItem: (item: T, update: (item: T) => void, index: number) => React.ReactNode
}) {
  const move = (index: number, delta: number) => {
    const next = [...items]
    ;[next[index], next[index + delta]] = [next[index + delta], next[index]]
    onChange(next)
  }

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3 items-start border border-gray-100 bg-gray-50/50 rounded-2xl p-4">
          <div className="flex-1 space-y-4">{renderItem(item, (next) => onChange(items.map((x, j) => (j === i ? next : x))), i)}</div>
          <div className="flex flex-col">
            <button type="button" title="Yukarı" onClick={() => move(i, -1)} disabled={i === 0} className={iconButton}><ArrowUp className="w-4 h-4" /></button>
            <button type="button" title="Aşağı" onClick={() => move(i, 1)} disabled={i === items.length - 1} className={iconButton}><ArrowDown className="w-4 h-4" /></button>
            <button type="button" title="Sil" onClick={() => onChange(items.filter((_, j) => j !== i))} className={`${iconButton} hover:text-red-500`}><Trash2 className="w-4 h-4" /></button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, newItem()])}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-gray-300 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
      >
        <Plus className="w-4 h-4" /> {addLabel}
      </button>
    </div>
  )
}

export function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
      <div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      {children}
    </section>
  )
}
