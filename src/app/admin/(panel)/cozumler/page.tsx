import React from "react";
import Link from "next/link";
import { Eye, EyeOff, Pencil, Plus, Trash2 } from "lucide-react";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { listAllSolutions } from "@/lib/firebase/solutions";
import { requireAdmin } from "@/lib/firebase/session";
import { deleteSolution, setSolutionPublished } from "./actions";

export default async function AdminSolutions() {
  await requireAdmin();
  const solutions = await listAllSolutions();

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Çözüm Yönetimi</h1>
          <p className="text-gray-500">Çözümlerimiz sayfalarını ve ana sayfadaki çözüm bölümünü düzenleyin.</p>
        </div>
        <Link href="/admin/cozumler/yeni" className="inline-flex items-center gap-2 bg-[#020817] text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all">
          <Plus className="w-5 h-5" /> Yeni çözüm
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        {solutions.map((solution) => (
          <div key={solution.slug} className="flex items-center gap-5 p-4">
            <div className="w-24 h-16 rounded-xl bg-gray-50 overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={solution.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-mono">#{solution.order}</span>
                <h3 className="font-bold text-gray-900 truncate">{solution.title.tr}</h3>
                {!solution.published && <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">Taslak</span>}
                {(!solution.title.en || !solution.shortDesc.en || !solution.intro.en) && <span className="text-[10px] font-bold uppercase bg-red-50 text-red-600 px-2 py-0.5 rounded-md">EN eksik</span>}
              </div>
              <p className="text-xs text-gray-500 truncate">/cozumlerimiz/{solution.slug} · {solution.products.length} ürün · {solution.whyBess.length + solution.whyHeatPump.length} fayda kartı</p>
            </div>
            <div className="flex items-center gap-1">
              <form action={setSolutionPublished.bind(null, solution.slug, !solution.published)}>
                <button title={solution.published ? "Yayından kaldır" : "Yayınla"} className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100">
                  {solution.published ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </form>
              <Link href={`/admin/cozumler/${solution.slug}`} title="Düzenle" className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                <Pencil className="w-5 h-5" />
              </Link>
              <form action={deleteSolution.bind(null, solution.slug)}>
                <ConfirmButton message={`"${solution.title.tr}" silinsin mi? Bu işlem geri alınamaz.`} title="Sil" className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50">
                  <Trash2 className="w-5 h-5" />
                </ConfirmButton>
              </form>
            </div>
          </div>
        ))}
        {solutions.length === 0 && <p className="p-6 text-sm text-gray-400">Henüz çözüm yok.</p>}
      </div>
    </div>
  );
}
