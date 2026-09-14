"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const brands = [
  {
    name: "INSPUR BESS",
    tagline: "Enerji Güvenliğinin Ana Oyuncusu",
    desc: "Yıllık 31 milyar doları aşan geliriyle dünyanın en büyük üç sunucu üreticisinden biri olan Inspur; IT, bulut ve yapay zeka altyapısındaki mühendislik gücünü batarya enerji depolama sistemlerine taşıyor. 1 GWh'a yaklaşan kurulum deneyimi ve tek projede 400 MWh'lik başarısıyla enerji güvenliğinin küresel oyuncusu.",
    logo: "/images/image1.png",
    image: "/images/products/bess-konteyner.png",
    brandLink: "/markalar/inspur",
    productsLink: "/bess#urunler",
    stats: [
      { value: "$31B+", label: "Yıllık Gelir" },
      { value: "Top 3", label: "Global Sunucu Üreticisi" },
      { value: "1 GWh", label: "Kurulum Deneyimi" },
    ],
  },
  {
    name: "THERMAPLUS",
    tagline: "Çevreci, Verimli, Ekonomik",
    desc: "Newstag'ın kendi tescilli markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birleştiriyor. Konut, havuz ve endüstriyel serileriyle 6 kW'tan 1.066 kW kaskad sistemlere uzanan geniş ürün gamı sunuyor.",
    logo: "/images/Adsız tasarım.png",
    image: "/images/heat-pump-branded.png",
    brandLink: "/markalar/thermaplus",
    productsLink: "/isi-pompasi#urunler",
    stats: [
      { value: "A+++", label: "Enerji Verimliliği" },
      { value: "3-5", label: "COP Değeri" },
      { value: "%75", label: "Varan Tasarruf" },
    ],
  },
];

const brandsEn = [
  {
    name: "INSPUR BESS",
    tagline: "A Key Player in Energy Security",
    desc: "Inspur is one of the world's top server manufacturers and brings its engineering strength in IT, cloud, and AI infrastructure into battery energy storage systems. With close to 1 GWh of installation experience and a 400 MWh single-project reference, it is a global energy storage player.",
    logo: "/images/image1.png",
    image: "/images/products/bess-konteyner.png",
    brandLink: "/markalar/inspur",
    productsLink: "/bess#urunler",
    stats: [
      { value: "$31B+", label: "Annual Revenue" },
      { value: "Top 3", label: "Global Server Brand" },
      { value: "1 GWh", label: "Installation Experience" },
    ],
  },
  {
    name: "THERMAPLUS",
    tagline: "Green, Efficient, Economical",
    desc: "Thermaplus is Newstag's own registered heat pump brand. It combines heat pump technology manufactured in Turkey with local components, local engineering, and a strong service network. Its product range covers residential, pool, and industrial needs from 6 kW to 1,066 kW cascade systems.",
    logo: "/images/Adsız tasarım.png",
    image: "/images/heat-pump-branded.png",
    brandLink: "/markalar/thermaplus",
    productsLink: "/isi-pompasi#urunler",
    stats: [
      { value: "A+++", label: "Energy Efficiency" },
      { value: "3-5", label: "COP Value" },
      { value: "%75", label: "Potential Savings" },
    ],
  },
];

export default function BrandsPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageBrands = isEnglish ? brandsEn : brands;

  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen pt-40 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-[#ea580c] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
                Newstag Enerji
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium text-[#020817] tracking-tighter mb-4">
                {isEnglish ? "Our" : "Ürün"} <span className="text-[#ea580c]">{isEnglish ? "Brands" : "Markalarımız"}</span>
              </h1>
            </div>
            <div className="text-xl text-gray-500 font-light max-w-md">
              {isEnglish
                ? "We offer two key technologies for energy transformation through global technology brand Inspur and our registered brand Thermaplus."
                : "Global teknoloji devi Inspur ve tescilli markamız Thermaplus ile enerji dönüşümünün iki kilit teknolojisini sunuyoruz."}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10">
            {pageBrands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[40px] p-8 md:p-14 border border-gray-200/80 hover:shadow-2xl hover:border-[#ea580c]/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Logo + stats */}
                  <div className="w-full lg:w-1/3 flex flex-col gap-10">
                    <Link href={brand.brandLink} className="relative h-24 md:h-32 w-full">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain object-center lg:object-left transition-all duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="grid grid-cols-3 gap-3">
                      {brand.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-center"
                        >
                          <div className="text-xl font-bold text-[#ea580c]">{stat.value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <span className="text-[#ea580c] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
                      {brand.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-5 tracking-tight">
                      {brand.name}
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                      {brand.desc}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <Link
                        href={brand.brandLink}
                        className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#ea580c]"
                      >
                        {isEnglish ? "Brand Profile" : "Marka Tanıtımı"}
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href={brand.productsLink}
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 font-bold text-[#1e3a8a] transition-colors hover:border-[#ea580c] hover:text-[#ea580c]"
                      >
                        {isEnglish ? "View Products" : "Ürünleri İncele"}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Product visual */}
                  <div className="relative w-full lg:w-72 aspect-square rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
