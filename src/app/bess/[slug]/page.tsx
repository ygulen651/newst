"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { bessProducts } from "@/lib/product-data";

const solutionLinks: Record<string, { title: string; href: string }[]> = {
  "pbt-48100": [{ title: "Sınırlı Şebeke Noktaları", href: "/cozumlerimiz/sinirli-sebeke" }],
  "pbt-48150": [{ title: "Sınırlı Şebeke Noktaları", href: "/cozumlerimiz/sinirli-sebeke" }],
  "ev-tipi-bess": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "tasinabilir-bess": [{ title: "Sınırlı Şebeke Noktaları", href: "/cozumlerimiz/sinirli-sebeke" }],
  "sivi-sogutmali-kabinet-bess": [
    { title: "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri" },
    { title: "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler" },
    { title: "Veri Merkezleri", href: "/cozumlerimiz/veri-merkezleri" },
    { title: "Araç Şarj Noktaları", href: "/cozumlerimiz/arac-sarj-noktalari" },
  ],
  "flexcube-konteyner-bess": [
    { title: "Sınırlı Şebeke Noktaları", href: "/cozumlerimiz/sinirli-sebeke" },
    { title: "Araç Şarj Noktaları", href: "/cozumlerimiz/arac-sarj-noktalari" },
  ],
  "konteyner-tipi-bess": [
    { title: "Enerji Santralleri", href: "/cozumlerimiz/enerji-santralleri" },
    { title: "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri" },
    { title: "Veri Merkezleri", href: "/cozumlerimiz/veri-merkezleri" },
  ],
};

const solutionTitleEn: Record<string, string> = {
  "Sınırlı Şebeke Noktaları": "Limited Grid Locations",
  "Konutlar": "Residential",
  "Sanayi Tesisleri": "Industrial Facilities",
  "Ticari İşletmeler": "Commercial Facilities",
  "Veri Merkezleri": "Data Centers",
  "Araç Şarj Noktaları": "EV Charging Locations",
  "Enerji Santralleri": "Power Plants",
};

const bessProductCopyEn: Record<string, { title: string; category: string; description: string; specs: string[] }> = {
  "ev-tipi-bess": {
    title: "Home Energy Storage",
    category: "Residential Solutions",
    description: "Inspur home energy storage systems store rooftop solar generation or low-tariff grid energy to reduce residential electricity costs and power critical loads during outages. Their compact, aesthetic enclosure and modular expandable design make them suitable for indoor and outdoor installation, with remote monitoring and management through a mobile app.",
    specs: ["Aesthetic and compact design", "Modular expandable architecture", "Suitable for indoor and outdoor installation", "Wi-Fi and Bluetooth support", "Mobile app control", "Integrated self-heating function", "Hybrid operation with grid and PV"],
  },
  "tasinabilir-bess": {
    title: "Portable Energy Storage",
    category: "Mobile Power Solutions",
    description: "Inspur portable energy storage systems provide clean and quiet power wherever electricity is unavailable. Their compact and lightweight design is ideal for camping, events, field work, and emergency scenarios, while the safe and stable operating structure offers a versatile interface.",
    specs: ["Compact and lightweight design", "Ideal for outdoor events", "Emergency backup power", "Environmentally friendly and quiet operation", "Safe and stable power output", "Multi-function interface"],
  },
  "sivi-sogutmali-kabinet-bess": {
    title: "Outdoor Liquid-Cooled Cabinet BESS",
    category: "Industrial and Commercial Facilities",
    description: "The outdoor liquid-cooled Inspur cabinet BESS combines battery, BMS, EMS, PCS, fire protection, power distribution, and thermal management systems in a single plug-and-play cabinet. It scales according to your power consumption, available space, and operating needs, and capacity can be expanded through parallel connection. With more than 8,000 cycles and next-generation 314 Ah battery technology, it supports operational continuity and savings.",
    specs: ["Plug-and-play integrated design: battery, BMS, EMS, PCS, fire protection, power distribution, and thermal management in one cabinet", "Capacity expansion through parallel connection", "Long service life with 8,000+ cycles", "Next-generation 314 Ah battery technology", "Smart management system for maximum efficiency and minimum downtime", "Unattended operation capability", "Wide application range"],
  },
  "flexcube-konteyner-bess": {
    title: "FlexCube Container BESS",
    category: "Limited Grid and Off-Grid",
    description: "FlexCube is a 10 ft integrated and lightweight container BESS solution for locations where the grid is unavailable or insufficient. It is ideal for construction sites, mining sites, oil and gas fields, and event areas. Its modular design expands with demand, reduces generator fuel costs, and provides high protection against harsh outdoor conditions.",
    specs: ["10 ft integrated lightweight design", "Modular design for expandable capacity", "Off-grid solution for locations without grid access", "Ideal for construction, mining, oil and gas sites, and events", "Generator fuel cost savings", "Suitable for charge-and-move operation", "High protection against harsh outdoor conditions", "Integrated design: battery, BMS, EMS, PCS, fire protection, power distribution, and thermal management"],
  },
  "konteyner-tipi-bess": {
    title: "20 ft Container BESS",
    category: "Power Plants and Grid Scale",
    description: "The 20 ft (6 meter) Inspur BESS provides energy security and savings for production facilities, power plants, and grid-scale projects with high power demand. Liquid cooling can increase product lifetime by up to 15%, while 8,000+ cycles and next-generation 314 Ah battery technology, with infrastructure ready for 600+ Ah technology, support expansion through a modular parallel design. Battery, BMS, EMS, PCS, step-up transformer, fire protection, power distribution, and thermal management systems are integrated in a single structure.",
    specs: ["20 ft (6 meter) container size", "Ideal solution for power plants, grid, and industrial applications", "Modular parallel design for expandable capacity", "Liquid cooling that can increase product lifetime by up to 15%", "Long service life with 8,000+ cycles", "Next-generation 314 Ah battery technology, ready for 600+ Ah", "High protection for harsh outdoor conditions", "Integrated design: battery, BMS, EMS, PCS, step-up transformer, fire protection, power distribution, and thermal management"],
  },
};

export default function BessProductPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const params = useParams<{ slug: string }>();
  const product = bessProducts.find((item) => item.slug === params.slug);

  if (!product) {
    return null;
  }

  const displayProduct = isEnglish && bessProductCopyEn[product.slug] ? { ...product, ...bessProductCopyEn[product.slug] } : product;
  const otherProducts = bessProducts.filter((item) => item.slug !== product.slug).slice(0, 3);
  const productSolutions = solutionLinks[product.slug] ?? [];

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
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">{displayProduct.category}</span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mt-4 mb-8">{displayProduct.title}</h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">{displayProduct.description}</p>
                {product.options && (
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
                  {displayProduct.specs.map((spec) => (
                    <div key={spec} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#ea580c] mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white">
                <Image
                  src={product.detailImage ?? product.image}
                  alt={displayProduct.title}
                  fill
                  className={(product.detailImageFit ?? product.imageFit) === "contain" ? "object-contain p-10" : "object-cover"}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            {productSolutions.length > 0 && (
              <div className="mb-14 rounded-[30px] border border-blue-100 bg-[#f8fafc] p-8">
                <h2 className="mb-5 text-2xl font-bold text-[#1e3a8a]">{isEnglish ? "Solution Areas Using This Product" : "Ürünün Kullanıldığı Çözüm Alanları"}</h2>
                <div className="flex flex-wrap gap-3">
                  {productSolutions.map((solution) => (
                    <Link key={solution.href} href={solution.href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#1e3a8a] shadow-sm transition-colors hover:text-[#ea580c]">
                      {isEnglish ? solutionTitleEn[solution.title] ?? solution.title : solution.title} <ArrowRight className="h-4 w-4" />
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
                const displayItem = isEnglish && bessProductCopyEn[item.slug] ? { ...item, ...bessProductCopyEn[item.slug] } : item;
                return (
                  <Link key={item.slug} href={`/bess/${item.slug}`} className="group bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                      <Image
                        src={item.image}
                        alt={displayItem.title}
                        fill
                        className={`${item.imageFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{displayItem.title}</h3>
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
