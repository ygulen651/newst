import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getContentOverrides } from "@/lib/firebase/content";
import { requireAdmin } from "@/lib/firebase/session";
import { getPageDef, pageFields } from "@/lib/content/registry";

const brandPageIds = ["brands", "inspur", "thermaplus"];

export default async function AdminBrands() {
  await requireAdmin();
  const overrides = await getContentOverrides();
  const pages = brandPageIds.map((id) => getPageDef(id)!);

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Markalar</h1>
        <p className="text-gray-500">Marka sayfalarının yazılarını, logolarını ve görsellerini düzenleyin.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pages.map((page) => {
          const changed = Object.keys(overrides[page.id] ?? {}).length;
          return (
            <Link
              key={page.id}
              href={`/admin/icerik/${page.id}`}
              className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4"
            >
              <div>
                <h2 className="font-bold text-gray-900">{page.title.replace("Markalar → ", "")}</h2>
                <p className="text-xs text-gray-500 mt-1">
                  {page.path} · {pageFields(page).length} alan{changed ? ` · ${changed} değiştirildi` : ""}
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
