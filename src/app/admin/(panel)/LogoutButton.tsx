'use client'

import { signOut } from 'firebase/auth'
import { LogOut } from 'lucide-react'
import { auth } from '@/lib/firebase/client'
import { logout } from '../login/actions'

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth)
    await logout()
  }

  return (
    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all group">
      <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      <span className="font-medium">Çıkış Yap</span>
    </button>
  )
}
