import React from "react";
import { listNews } from "@/lib/firebase/news";
import { requireAdmin } from "@/lib/firebase/session";
import { Trash2, Calendar, FileText, Film, Images, Newspaper, Image as ImageIcon } from "lucide-react";
import { deleteNews } from "./actions";
import Image from "next/image";
import NewsForm from "./NewsForm";

export default async function AdminHaberler() {
  await requireAdmin();
  const news = await listNews();

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Haber & Medya Yönetimi</h1>
        <p className="text-gray-500">Fotoğraf, PDF ve videolarla zenginleştirilmiş haberler yayınlayın.</p>
      </div>

      <div className="space-y-12">
        {/* News Form Component */}
        <NewsForm />

        {/* News List */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Newspaper className="w-6 h-6" /> Mevcut Haberler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news?.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col gap-6 group hover:shadow-md transition-shadow relative">
                <div className="flex gap-6">
                  <div className="w-24 h-24 relative rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                    {item.image ? (
                      <Image src={item.image} alt="" fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                        <Images className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Media Tags */}
                {item.media && Array.isArray(item.media) && item.media.length > 0 && (
                  <div className="flex flex-wrap gap-2 border-t border-gray-50 pt-4">
                    {item.media.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-[10px] text-gray-600 border border-gray-100">
                        {m.type.startsWith('image/') ? <ImageIcon className="w-3 h-3" /> : 
                         m.type.includes('pdf') ? <FileText className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                        <span className="max-w-[80px] truncate">{m.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <form action={deleteNews.bind(null, item.id)} className="absolute top-6 right-6">
                  <button className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all rounded-full">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </form>
              </div>
            ))}
          </div>
          
          {(!news || news.length === 0) && (
            <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
              <p className="text-gray-400">Henüz haber eklenmemiş.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
