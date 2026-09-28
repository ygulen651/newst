'use client'

import React, { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { ArrowRight, Loader2, Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase/client'
import { createSession } from './actions'

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      const { error: sessionError } = await createSession(await user.getIdToken())
      if (sessionError) {
        await signOut(auth)
        setError(sessionError)
        return
      }
      router.replace('/admin')
      router.refresh()
    } catch (err) {
      const code = (err as { code?: string })?.code
      setError(code === 'auth/invalid-credential' ? 'E-posta veya şifre hatalı.' : 'Giriş yapılamadı: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400 ml-1">E-posta</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            name="email"
            type="email"
            required
            placeholder="admin@newstag.com"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400 ml-1">Şifre</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-4 rounded-xl text-center">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Giriş Yap <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
      </button>
    </form>
  )
}
