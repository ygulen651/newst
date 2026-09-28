import React from "react";
import { Mail, MailOpen, Reply, Trash2 } from "lucide-react";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { listMessages } from "@/lib/firebase/messages";
import { requireAdmin } from "@/lib/firebase/session";
import { deleteMessage, setMessageRead } from "./actions";

export default async function AdminMessages() {
  await requireAdmin();
  const messages = await listMessages();
  const unread = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mesajlar</h1>
        <p className="text-gray-500">
          İletişim formundan gelen mesajlar · {messages.length} mesaj{unread ? `, ${unread} okunmamış` : ""}
        </p>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <article
            key={message.id}
            className={`bg-white rounded-3xl border shadow-sm p-6 ${message.read ? "border-gray-100" : "border-blue-200 ring-1 ring-blue-100"}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {!message.read && <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />}
                  <h2 className="font-bold text-gray-900">{message.name}</h2>
                </div>
                <a href={`mailto:${message.email}`} className="text-sm text-blue-600 hover:underline break-all">
                  {message.email}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400 mr-2">
                  {message.createdAt ? new Date(message.createdAt).toLocaleString("tr-TR", { dateStyle: "medium", timeStyle: "short" }) : ""}
                </span>
                <a
                  href={`mailto:${message.email}?subject=${encodeURIComponent("Newstag Enerji - Mesajınız hakkında")}`}
                  title="E-posta ile yanıtla"
                  className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                >
                  <Reply className="w-5 h-5" />
                </a>
                <form action={setMessageRead.bind(null, message.id, !message.read)}>
                  <button title={message.read ? "Okunmadı olarak işaretle" : "Okundu olarak işaretle"} className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100">
                    {message.read ? <Mail className="w-5 h-5" /> : <MailOpen className="w-5 h-5" />}
                  </button>
                </form>
                <form action={deleteMessage.bind(null, message.id)}>
                  <ConfirmButton message={`${message.name} kişisinden gelen mesaj silinsin mi?`} title="Sil" className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50">
                    <Trash2 className="w-5 h-5" />
                  </ConfirmButton>
                </form>
              </div>
            </div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{message.message}</p>
          </article>
        ))}
        {messages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
            <p className="text-gray-400">Henüz mesaj yok.</p>
          </div>
        )}
      </div>
    </div>
  );
}
