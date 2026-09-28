import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getContentOverrides } from "@/lib/firebase/content";
import { requireAdmin } from "@/lib/firebase/session";
import { pageDefs, pageFields } from "@/lib/content/registry";

export default async function AdminContent() {
  await requireAdmin();
  const overrides = await getContentOverrides();

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Sayfa İçerikleri</h1>
        <p className="text-gray-500">Sitedeki yazıları ve görselleri sayfa sayfa düzenleyin.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pageDefs.map((page) => {
          const changed = Object.keys(overrides[page.id] ?? {}).length;
          return (
            <Link
              key={page.id}
              href={`/admin/icerik/${page.id}`}
              className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4"
            >
              <div>
                <h2 className="font-bold text-gray-900">{page.title}</h2>
                <p className="text-xs text-gray-500 mt-1">
                  {pageFields(page).length} alan · {changed ? `${changed} alan değiştirildi` : "varsayılan metinler"}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
