"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { heatPumpProducts } from "@/lib/product-data";
import { useLanguage } from "@/lib/i18n";

const productCopyEn: Record<string, { title: string; category: string; summary: string; description: string; specs: string[] }> = {
  "thermaplus-up-serisi": {
    title: "Thermaplus Up Series",
    category: "Residential Series",
    summary: "8-35 kW capacity, R32 refrigerant, DC inverter control, and Wi-Fi support.",
    description: "Thermaplus Up Series is designed for efficient year-round heating and cooling in homes, villas, and small commercial spaces. R32 refrigerant, DC inverter control, and Wi-Fi supported smart control combine comfort with balanced energy consumption.",
    specs: ["8-35 kW capacity range", "Heating, cooling, and domestic hot water support", "R32 refrigerant and DC inverter compressor", "-30~43 °C operating temperature", "COP 4.2-4.9", "Wi-Fi supported smart control", "IPX4 protection class"],
  },
  "thermaplus-boost-serisi": {
    title: "Thermaplus Boost Series",
    category: "Residential Series",
    summary: "8-22 kW capacity, natural R290 refrigerant, high-temperature support, and Wi-Fi control.",
    description: "Thermaplus Boost Series is developed for efficient heating, cooling, and domestic hot water in homes, villas, and small commercial spaces with high-temperature needs. R290 refrigerant, DC inverter control, and Wi-Fi support deliver strong performance with balanced energy use.",
    specs: ["8, 11, 15, and 22 kW model options", "Natural R290 refrigerant", "Heating, cooling, and domestic hot water", "-25~43 °C operating temperature", "Up to 70 °C heating water", "Wi-Fi supported smart control", "IPX4 protection class"],
  },
  "thermaplus-all": {
    title: "Thermaplus All Series",
    category: "Residential Series",
    summary: "200 and 300 L tank, R290 refrigerant, Wi-Fi control, and hot water support up to 75 °C.",
    description: "Thermaplus All Series is designed for domestic hot water needs in homes, villas, hotels, and businesses. With 200 and 300 liter tank options, R290 refrigerant, Wi-Fi control, and backup heater support, it provides hot water up to 75 °C.",
    specs: ["200 and 300 liter tank options", "Natural R290 refrigerant", "A+ energy class", "COP 3.65-3.75", "Hot water up to 75 °C with backup heater", "Wi-Fi supported control", "-7~45 °C operating range"],
  },
  "thermaplus-silent-pool-serisi": {
    title: "Thermaplus Silent Pool Series",
    category: "Pool Series",
    summary: "10-33 kW capacity, R32 refrigerant, silent operation, and Wi-Fi controlled pool comfort.",
    description: "Thermaplus Silent Pool Series is designed to keep water temperature balanced in villa, garden, and outdoor pool projects. R32 refrigerant, quiet operation, titanium heat exchanger, and Wi-Fi supported control provide pool comfort across seasons.",
    specs: ["10-33 kW capacity range", "20-130 m³ pool volumes", "Heating and cooling support", "R32 refrigerant", "Titanium heat exchanger and ABS casing", "Wi-Fi supported control"],
  },
  "thermaplus-commercial-pool": {
    title: "Thermaplus Commercial Pool Series",
    category: "Pool Series",
    summary: "26-145 kW capacity, titanium heat exchanger, and commercial pool water up to 43 °C.",
    description: "Thermaplus Commercial Pool Series is developed for hotels, sports facilities, social facilities, and large-volume pool projects. Six capacity options, R410A refrigerant, and a titanium heat exchanger inside a PVC shell heat pool water in a controlled and efficient way.",
    specs: ["R410A refrigerant", "26-145 kW capacity range", "Pool water up to 43 °C", "Titanium heat exchanger inside PVC shell", "IPX4 protection class", "-7~43 °C operating environment"],
  },
  "thermaplus-commercial-duo": {
    title: "Thermaplus Commercial Duo Series",
    category: "Industrial Series",
    summary: "50 and 92 kW capacity, R290 refrigerant, high temperature, and Wi-Fi controlled commercial performance.",
    description: "Thermaplus Commercial Duo Series is developed for high-capacity heating, cooling, and domestic hot water in hotels, apartments, commercial facilities, and central system projects. R290 refrigerant, Wi-Fi control, and water temperatures up to 78 °C deliver strong commercial performance.",
    specs: ["50 and 92 kW model options", "Natural R290 refrigerant", "Heating, cooling, and domestic hot water", "20-78 °C operating water support", "-25~43 °C operating environment", "Wi-Fi supported control", "380-415V / 3Ph power supply"],
  },
};

const tableLabelEn: Record<string, string> = {
  "Isıtma kapasitesi (kW)": "Heating capacity (kW)",
  "COP aralığı": "COP range",
  "Güç kaynağı": "Power supply",
  "Ses seviyesi, 1 m": "Sound level, 1 m",
  "Nominal ısıtma kapasitesi": "Nominal heating capacity",
  "Enerji sınıfı": "Energy class",
  "Net ağırlık": "Net weight",
  "Tavsiye edilen havuz (m³)": "Recommended pool volume (m³)",
  "Gürültü": "Noise level",
  "Sıcak su kapasitesi (kW)": "Hot water capacity (kW)",
  "Ses basınç seviyesi": "Sound pressure level",
};

const solutionTitleEn: Record<string, string> = {
  "Konutlar": "Residential",
  "Ticari İşletmeler": "Commercial Facilities",
  "Sanayi Tesisleri": "Industrial Facilities",
};

const solutionLinks: Record<string, { title: string; href: string }[]> = {
  "thermaplus-up-serisi": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-boost-serisi": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-all": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-silent-pool-serisi": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-commercial-pool": [{ title: "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler" }],
  "thermaplus-commercial-duo": [
    { title: "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri" },
    { title: "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler" },
  ],
};

export default function HeatPumpProductPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const product = heatPumpProducts.find((item) => item.slug === slug);

  if (!product) {
    return null;
  }

  const displayProduct = isEnglish && productCopyEn[product.slug]
    ? { ...product, ...productCopyEn[product.slug] }
    : product;

  const related = heatPumpProducts
    .filter((item) => item.category === product.category && item.slug !== slug)
    .slice(0, 3);
  const productSolutions = solutionLinks[product.slug] ?? [];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <Link
              href="/isi-pompasi#urunler"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c]"
            >
              <ArrowLeft className="w-5 h-5" /> {isEnglish ? "Back to Heat Pump Products" : "Isı Pompası Ürünlerine Dön"}
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">
                  {displayProduct.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mt-4 mb-8">
                  {displayProduct.title}
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                  {displayProduct.description}
                </p>
                {product.options && (
                  <div className="mb-10">
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                      {isEnglish ? "Capacity Options" : "Kapasite Seçenekleri"}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {product.options.map((option) => (
                        <span
                          key={option}
                          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-bold text-[#1e3a8a] shadow-sm"
                        >
                          {option}
                        </span>
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
                  src={product.image}
                  alt={displayProduct.title}
                  fill
                  className="object-contain p-10"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {product.technicalTable && (
          <section className="bg-[#f8fafc] py-24">
            <div className="container mx-auto px-6">
              <div className="mb-10 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ea580c]">
                  {isEnglish ? "Model Comparison" : "Model Karşılaştırma"}
                </span>
                <h2 className="mt-4 text-4xl font-bold text-[#1e3a8a]">
                  {isEnglish ? "Technical Specifications" : "Teknik Özellikler"}
                </h2>
                <p className="mt-4 text-gray-500">
                  {isEnglish
                    ? "Compare the capacity options for your project with key performance values."
                    : "Projenize uygun kapasiteyi temel performans değerleriyle karşılaştırın."}
                </p>
              </div>
              <div className="overflow-x-auto rounded-[28px] border border-blue-100 bg-white shadow-sm">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#1e3a8a] text-white">
                      <th className="px-6 py-5 text-sm font-bold">{isEnglish ? "Technical Value" : "Teknik değer"}</th>
                      {product.technicalTable.columns.map((column) => (
                        <th key={column} className="whitespace-nowrap px-5 py-5 text-center text-sm font-bold">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.technicalTable.rows.map((row, index) => (
                      <tr key={row.label} className={index % 2 === 0 ? "bg-white" : "bg-blue-50/50"}>
                        <th className="whitespace-nowrap border-t border-blue-50 px-6 py-4 text-sm font-bold text-[#1e3a8a]">
                          {isEnglish ? tableLabelEn[row.label] ?? row.label : row.label}
                        </th>
                        {row.values.map((value, valueIndex) => (
                          <td key={`${row.label}-${valueIndex}`} className="whitespace-nowrap border-t border-blue-50 px-5 py-4 text-center text-sm text-gray-600">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            {productSolutions.length > 0 && (
              <div className="mb-14 rounded-[30px] border border-blue-100 bg-[#f8fafc] p-8">
                <h2 className="mb-5 text-2xl font-bold text-[#1e3a8a]">
                  {isEnglish ? "Solution Areas Using This Product" : "Ürünün Kullanıldığı Çözüm Alanları"}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {productSolutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#1e3a8a] shadow-sm transition-colors hover:text-[#ea580c]"
                    >
                      {isEnglish ? solutionTitleEn[solution.title] ?? solution.title : solution.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">{isEnglish ? "Choosing the Right Model" : "Doğru Model Seçimi"}</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              {isEnglish
                ? "Heat pump capacity is determined by building size, insulation level, regional climate, hot water demand, and pool requirements. Our expert team recommends the most suitable Thermaplus model after a free assessment."
                : "Isı pompası kapasitesi; bina büyüklüğü, yalıtım durumu, bölge iklimi, sıcak su ve havuz ihtiyacına göre belirlenir. Uzman ekibimiz ücretsiz keşif ile ihtiyacınıza en uygun Thermaplus modelini önerir."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors"
              >
                {isEnglish ? "Request a Free Assessment" : "Ücretsiz Keşif Talep Et"} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 border border-blue-100 bg-white px-8 py-4 rounded-full font-bold text-[#1e3a8a] hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
              >
                {isEnglish ? "Request Product Catalog" : "Ürün Kataloğunu Talep Et"} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-24 bg-[#f8fafc]">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-[#1e3a8a]">
                  {isEnglish ? "Other Products in the Same Series" : "Aynı Serideki Diğer Ürünler"}
                </h2>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((item) => {
                  const displayItem = isEnglish && productCopyEn[item.slug]
                    ? { ...item, ...productCopyEn[item.slug] }
                    : item;
                  return (
                    <Link
                      key={item.slug}
                      href={`/isi-pompasi/${item.slug}`}
                      className="group bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                        <Image
                          src={item.image}
                          alt={displayItem.title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
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
        )}
      </main>
      <Footer />
    </>
  );
}
