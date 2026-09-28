'use server'

import { revalidatePath } from 'next/cache'
import { messagesCollection } from '@/lib/firebase/messages'
import { requireAdmin } from '@/lib/firebase/session'

export async function setMessageRead(id: string, read: boolean) {
  await requireAdmin()
  await messagesCollection().doc(id).update({ read })
  revalidatePath('/admin', 'layout')
}

export async function deleteMessage(id: string) {
  await requireAdmin()
  await messagesCollection().doc(id).delete()
  revalidatePath('/admin', 'layout')
}
