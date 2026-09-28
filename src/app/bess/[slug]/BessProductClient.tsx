"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { pick, type Localized, type Product } from "@/lib/products";

export default function BessProductClient({ product, otherProducts }: { product: Product; otherProducts: Product[] }) {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const t = (value: Localized) => pick(value, lang);
  const title = t(product.title);

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <Link href="/bess#urunler" className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c]">
              <ArrowLeft className="w-5 h-5" /> {isEnglish ? "Back to BESS Products" : "BESS Ürünlerine Dön"}
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">{t(product.category)}</span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mt-4 mb-8">{title}</h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">{t(product.description)}</p>
                {product.options.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{isEnglish ? "Product Options" : "Ürün Seçenekleri"}</h2>
                    <div className="flex flex-wrap gap-3">
                      {product.options.map((option) => (
                        <span key={option} className="text-sm font-bold text-[#1e3a8a] bg-white border border-blue-100 px-4 py-2.5 rounded-xl shadow-sm">{option}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  {product.specs.map(t).map((spec) => (
                    <div key={spec} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#ea580c] mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white">
                <Image
                  src={product.detailImage || product.image}
                  alt={title}
                  fill
                  className={(product.detailImageFit || product.imageFit) === "contain" ? "object-contain p-10" : "object-cover"}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            {product.solutions.length > 0 && (
              <div className="mb-14 rounded-[30px] border border-blue-100 bg-[#f8fafc] p-8">
                <h2 className="mb-5 text-2xl font-bold text-[#1e3a8a]">{isEnglish ? "Solution Areas Using This Product" : "Ürünün Kullanıldığı Çözüm Alanları"}</h2>
                <div className="flex flex-wrap gap-3">
                  {product.solutions.map((solution) => (
                    <Link key={solution.href} href={solution.href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#1e3a8a] shadow-sm transition-colors hover:text-[#ea580c]">
                      {t(solution.title)} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">{isEnglish ? "Application Notes" : "Uygulama Notları"}</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              {isEnglish
                ? "This product family is configured according to project capacity, connection power, backup duration, safety class, cooling preference, and site conditions. Final technical values are confirmed through the catalog after project assessment and model family selection."
                : "Bu ürün ailesi; proje kapasitesi, bağlantı gücü, yedekleme süresi, güvenlik sınıfı, soğutma tercihi ve saha koşullarına göre konfigüre edilir. Kesin teknik değerler, proje keşfi ve seçilecek model ailesine göre katalog üzerinden netleştirilir."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/iletisim" className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors">
                {isEnglish ? "Request a Technical Meeting" : "Teknik Görüşme Talep Et"} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/iletisim" className="inline-flex items-center gap-3 border border-blue-100 bg-white px-8 py-4 rounded-full font-bold text-[#1e3a8a] hover:border-[#ea580c] hover:text-[#ea580c] transition-colors">
                {isEnglish ? "Request Product Catalog" : "Ürün Kataloğunu Talep Et"} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a8a]">{isEnglish ? "Other BESS Products" : "Diğer BESS Ürünleri"}</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProducts.map((item) => {
                const itemTitle = t(item.title);
                return (
                  <Link key={item.slug} href={`/bess/${item.slug}`} className="group bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                      <Image
                        src={item.image}
                        alt={itemTitle}
                        fill
                        className={`${item.imageFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{itemTitle}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1e3a8a] group-hover:text-[#ea580c]">
                      {isEnglish ? "View" : "İncele"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
