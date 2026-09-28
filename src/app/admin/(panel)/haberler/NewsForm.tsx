'use client'

import React, { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, storage } from '@/lib/firebase/client'
import { createNews } from './actions'
import type { NewsMedia } from '@/lib/firebase/news'
import { Upload, X, FileText, Film, Image as ImageIcon, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NewsForm() {
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<{ url: string; type: string; name: string }[]>([])
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])

      newFiles.forEach((file) => {
        const url = URL.createObjectURL(file)
        setPreviews((prev) => [...prev, { url, type: file.type, name: file.name }])
      })
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const title = formData.get('title') as string
      const description = formData.get('description') as string
      const category = formData.get('category') as string
      const date = formData.get('date') as string
      const color = formData.get('color') as string || 'bg-[#1e3a8a]'

      // Storage rules require the Firebase client session created at login.
      await auth.authStateReady()
      if (!auth.currentUser) throw new Error('Oturum süresi dolmuş, lütfen tekrar giriş yapın.')

      const media: NewsMedia[] = []

      // Upload files to Firebase Storage
      for (const file of files) {
        const fileExt = file.name.split('.').pop()
        const filePath = `news-media/${crypto.randomUUID()}.${fileExt}`
        const fileRef = ref(storage, filePath)

        await uploadBytes(fileRef, file, { contentType: file.type })

        media.push({
          url: await getDownloadURL(fileRef),
          type: file.type,
          name: file.name,
          path: filePath,
        })
      }

      // Save news to Firestore
      await createNews({ title, description, category, date, color, media })

      // Reset form
      setFiles([])
      setPreviews([])
      ;(e.target as HTMLFormElement).reset()
      router.refresh()
      alert('Haber başarıyla eklendi!')

    } catch (error: any) {
      alert('Hata: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Upload className="w-5 h-5 text-blue-600" /> Haber ve Medya Ekle
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Haber Başlığı</label>
              <input name="title" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Kategori</label>
              <input name="category" placeholder="Örn: Ürün Lansmanı" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Tarih</label>
                <input name="date" placeholder="14 Mayıs 2026" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Renk (Tailwind Class)</label>
                <input name="color" defaultValue="bg-[#1e3a8a]" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Açıklama</label>
              <textarea name="description" rows={7} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none" />
            </div>
          </div>
        </div>

        {/* File Upload Area */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700 block mb-1">Dosyalar (Fotoğraf, PDF, Video)</label>
          <div className="relative border-2 border-dashed border-gray-200 rounded-3xl p-8 hover:border-blue-400 transition-colors text-center group">
            <input 
              type="file" 
              multiple 
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-blue-50 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Dosyaları sürükleyin veya buraya tıklayın</p>
              <p className="text-xs text-gray-400">PNG, JPG, PDF, MP4 desteklenir</p>
            </div>
          </div>

          {/* Previews */}
          {previews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
              {previews.map((preview, i) => (
                <div key={i} className="relative group aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                  {preview.type.startsWith('image/') ? (
                    <img src={preview.url} className="w-full h-full object-cover" />
                  ) : preview.type.includes('pdf') ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-red-500">
                      <FileText className="w-8 h-8" />
                      <span className="text-[10px] text-gray-500 px-2 text-center truncate w-full">{preview.name}</span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-blue-500">
                      <Film className="w-8 h-8" />
                      <span className="text-[10px] text-gray-500 px-2 text-center truncate w-full">{preview.name}</span>
                    </div>
                  )}
                  <button 
                    type="button"
                    onClick={() => removeFile(i)}
                    className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#020817] text-white font-bold py-5 rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Yükleniyor...
            </>
          ) : (
            'Haberi ve Dosyaları Kaydet'
          )}
        </button>
      </form>
    </div>
  )
}
