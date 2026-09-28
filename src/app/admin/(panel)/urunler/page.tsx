import React from "react";
import Link from "next/link";
import { Eye, EyeOff, Pencil, Plus, Trash2 } from "lucide-react";
import { listAllProducts } from "@/lib/firebase/products";
import { requireAdmin } from "@/lib/firebase/session";
import { productPath, productTypeLabels, type ProductType } from "@/lib/products";
import { deleteProduct, setProductPublished } from "./actions";
import ConfirmButton from "@/components/admin/ConfirmButton";

export default async function AdminProducts() {
  await requireAdmin();
  const products = await listAllProducts();

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Ürün Yönetimi</h1>
          <p className="text-gray-500">BESS ve ısı pompası ürünlerini ekleyin, düzenleyin, yayından kaldırın.</p>
        </div>
        <Link href="/admin/urunler/yeni" className="inline-flex items-center gap-2 bg-[#020817] text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all">
          <Plus className="w-5 h-5" /> Yeni ürün
        </Link>
      </div>

      {(Object.keys(productTypeLabels) as ProductType[]).map((type) => {
        const items = products.filter((product) => product.type === type);
        return (
          <section key={type} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">{productTypeLabels[type]} <span className="text-gray-400 font-normal">({items.length})</span></h2>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-50">
              {items.map((product) => (
                <div key={product.slug} className="flex items-center gap-5 p-4">
                  <div className="w-16 h-16 rounded-xl bg-gray-50 overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.cardImage || product.image} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 font-mono">#{product.order}</span>
                      <h3 className="font-bold text-gray-900 truncate">{product.title.tr}</h3>
                      {!product.published && <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">Taslak</span>}
                      {(!product.title.en || !product.summary.en) && <span className="text-[10px] font-bold uppercase bg-red-50 text-red-600 px-2 py-0.5 rounded-md">EN eksik</span>}
                    </div>
                    <p className="text-xs text-gray-500 truncate">{product.category.tr} · {productPath(product)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <form action={setProductPublished.bind(null, product.slug, !product.published)}>
                      <button title={product.published ? "Yayından kaldır" : "Yayınla"} className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100">
                        {product.published ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                      </button>
                    </form>
                    <Link href={`/admin/urunler/${product.slug}`} title="Düzenle" className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                      <Pencil className="w-5 h-5" />
                    </Link>
                    <form action={deleteProduct.bind(null, product.slug)}>
                      <ConfirmButton message={`"${product.title.tr}" silinsin mi? Bu işlem geri alınamaz.`} title="Sil" className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50">
                        <Trash2 className="w-5 h-5" />
                      </ConfirmButton>
                    </form>
                  </div>
                </div>
              ))}
              {items.length === 0 && <p className="p-6 text-sm text-gray-400">Bu tipte ürün yok.</p>}
            </div>
          </section>
        );
      })}
    </div>
  );
}
