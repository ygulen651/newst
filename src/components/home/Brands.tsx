"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const brands = [
  {
    name: "INSPUR",
    role: "Enerji Depolama (BESS)",
    description:
      "Çin’in IT devi ve dünyanın en büyük üç sunucu üreticisinden biri olan Inspur; IT ve bulut altyapısındaki mühendislik gücünü enerji depolama sistemlerine taşıyor. 1 GWh'a yaklaşan kurulum deneyimiyle enerji güvenliğinin de ana bir oyuncusu konumunda.",
    image: "/images/products/bess-konteyner.png",
    logo: "/images/image1.png",
    brandHref: "/markalar/inspur",
    productsHref: "/bess#urunler",
    tags: ["Global Teknoloji Devi", "1 GWh Kurulum Deneyimi", "120+ Ülke"],
  },
  {
    name: "Thermaplus",
    role: "Isı Pompası",
    description:
      "Newstag'ın kendi markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birleştirerek konutlardan endüstriyel tesislere kadar her ölçekte verimli ısıtma, soğutma ve sıcak su konforu sunuyor.",
    image: "/images/heat-pump-branded.png",
    logo: "/images/Adsız tasarım.png",
    brandHref: "/markalar/thermaplus",
    productsHref: "/isi-pompasi#urunler",
    tags: ["Türkiye'de Üretim", "A+++ Verimlilik", "Yerli Mühendislik"],
  },
];

const brandsEn = [
  {
    name: "INSPUR",
    role: "Energy Storage (BESS)",
    description:
      "Inspur is one of the world's leading server manufacturers and a major IT technology group. The brand brings its engineering strength in IT, cloud, and AI infrastructure into battery energy storage systems, with close to 1 GWh of installation experience.",
    image: "/images/products/bess-konteyner.png",
    logo: "/images/image1.png",
    brandHref: "/markalar/inspur",
    productsHref: "/bess#urunler",
    tags: ["Global Technology Brand", "1 GWh Installation Experience", "120+ Countries"],
  },
  {
    name: "Thermaplus",
    role: "Heat Pump",
    description:
      "Thermaplus is Newstag's registered heat pump brand. It combines heat pump technology manufactured in Turkey with local components, local engineering, and a strong service network for residential, pool, and industrial projects.",
    image: "/images/heat-pump-branded.png",
    logo: "/images/Adsız tasarım.png",
    brandHref: "/markalar/thermaplus",
    productsHref: "/isi-pompasi#urunler",
    tags: ["Manufactured in Turkey", "A+++ Efficiency", "Local Engineering"],
  },
];

export default function Brands() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageBrands = isEnglish ? brandsEn : brands;

  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-[#1e3a8a]">
            {isEnglish ? "Brands Leading" : "Sektöre Yön Veren"} <br /> {isEnglish ? "the Energy Sector" : "Markalarımız ile Hizmetinizdeyiz"}
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-light">
            {isEnglish
              ? "We offer Inspur's global energy storage technology and our registered Thermaplus heat pump brand backed by Saray Holding."
              : "Global teknoloji devi Inspur'un Türkiye distribütörlüğü ve Saray Holding güvencesiyle geliştirdiğimiz tescilli markamız Thermaplus."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pageBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo and Role */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <Link href={brand.brandHref} className="relative h-20 md:h-24 w-64 md:w-72 shrink-0">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain object-left transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-[10px] font-bold tracking-widest uppercase border border-gray-100">
                    {brand.role}
                  </span>
                </div>

                <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                  {brand.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {brand.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-auto">
                <div className="relative w-full sm:w-44 h-40 sm:h-44 rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner group-hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={brand.brandHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-[#1e3a8a] transition-colors hover:border-[#ea580c] hover:text-[#ea580c]"
                  >
                    {isEnglish ? "Meet the Brand" : "Markayı Tanıyın"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={brand.productsHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ea580c]"
                  >
                    {isEnglish ? "View Products" : "Ürünleri İncele"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
