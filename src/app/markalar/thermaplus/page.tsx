"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  Flag,
  Home,
  Leaf,
  ShieldCheck,
  ThermometerSun,
  Waves,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const stats = [
  { value: "3-5", label: "COP Verimlilik Katsayısı" },
  { value: "%75", label: "Tasarrufa Varan Potansiyel" },
  { value: "A+++", label: "ERP Enerji Etiketi" },
  { value: "1.066 kW", label: "Kaskad Sistemlere Uzanan Güç" },
];

const strengths = [
  {
    icon: Flag,
    title: "Türkiye'de Üretim",
    desc: "Newstag'ın kendi markası Thermaplus ile Türkiye'de üretilen ısı pompası teknolojisini sunuyoruz.",
  },
  {
    icon: Wrench,
    title: "Yerli Mühendislik ve Servis",
    desc: "Yerli parça, yerli mühendislik ve Türkiye genelinde güçlü servis ağı ile kurulumdan bakıma tam destek.",
  },
  {
    icon: Leaf,
    title: "Çevreci Teknoloji",
    desc: "Fosil yakıt bağımlılığını kıran, karbon ayak izini azaltan ve yeşil sertifika imkânı sunan çözümler.",
  },
  {
    icon: ShieldCheck,
    title: "Kanıtlanmış Güvenilirlik",
    desc: "Saray Holding'in 65 yıllık kurumsal mirası ve enerji sektöründeki 15 yıllık üretim deneyimi güvencesi.",
  },
];

const productGroups = [
  {
    icon: Home,
    title: "Konut Serileri",
    items: [
      "Konut Isı Pompası: 6 kW - 16 kW · Inverter · Monoblok",
      "Büyük Konut / Ticari: 25 kW - 70 kW · DC Twin-Rotary",
      "Boyler ve kullanım sıcak suyu ısı pompaları",
    ],
  },
  {
    icon: Waves,
    title: "Havuz Serileri",
    items: [
      "Havuz Isı Pompası: 15 m³ - 100 m³ · Korozyona dayanıklı",
      "Ticari Havuz Serisi: 500 m³'e kadar · -25 °C çalışma",
      "Büyük Kapasiteli Seri: 70 kW - 145 kW",
    ],
  },
  {
    icon: Factory,
    title: "Endüstriyel Seriler",
    items: [
      "Yüksek Sıcaklık Serisi: 80 °C sıcak su · Proses suyu uygulamaları",
      "Kaskad Sistemler: 328 kW - 1.066 kW · Büyük projeler",
      "Ticari sıcak su ve hijyenik su çözümleri",
    ],
  },
];

const statsEn = [
  { value: "3-5", label: "COP Efficiency Coefficient" },
  { value: "%75", label: "Potential Savings" },
  { value: "A+++", label: "ERP Energy Label" },
  { value: "1,066 kW", label: "Power Range with Cascade Systems" },
];

const strengthsEn = [
  { icon: Flag, title: "Manufactured in Turkey", desc: "Thermaplus delivers heat pump technology manufactured in Turkey as Newstag's own brand." },
  { icon: Wrench, title: "Local Engineering and Service", desc: "Local components, local engineering, and a strong nationwide service network from installation to maintenance." },
  { icon: Leaf, title: "Green Technology", desc: "Solutions that reduce fossil fuel dependence, lower carbon footprint, and support green building goals." },
  { icon: ShieldCheck, title: "Proven Reliability", desc: "Backed by Saray Holding's 65-year corporate heritage and 15 years of production experience in energy." },
];

const productGroupsEn = [
  {
    icon: Home,
    title: "Residential Series",
    items: [
      "Residential heat pumps: 6 kW - 16 kW, inverter, monoblock",
      "Large residential and commercial units: 25 kW - 70 kW, DC twin-rotary",
      "Boiler and domestic hot water heat pumps",
    ],
  },
  {
    icon: Waves,
    title: "Pool Series",
    items: [
      "Pool heat pumps: 15 m³ - 100 m³, corrosion-resistant",
      "Commercial pool series: up to 500 m³, operation down to -25 °C",
      "High-capacity series: 70 kW - 145 kW",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Series",
    items: [
      "High-temperature series: 80 °C hot water for process water applications",
      "Cascade systems: 328 kW - 1,066 kW for large projects",
      "Commercial hot water and hygienic water solutions",
    ],
  },
];

export default function ThermaplusBrandPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageStats = isEnglish ? statsEn : stats;
  const pageStrengths = isEnglish ? strengthsEn : strengths;
  const pageProductGroups = isEnglish ? productGroupsEn : productGroups;

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white overflow-hidden">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-20 w-72 mb-10">
                  <Image
                    src="/images/Adsız tasarım.png"
                    alt={isEnglish ? "Thermaplus logo" : "Thermaplus logosu"}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  {isEnglish ? "Green, Efficient," : "Çevreci, Verimli,"} <span className="text-[#ea580c]">{isEnglish ? "Economical" : "Ekonomik"}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                  {isEnglish
                    ? "Thermaplus is Newstag's own heat pump brand. It combines heat pump technology manufactured in Turkey with local components, local engineering, and a strong service network for heating, cooling, and hot water comfort at every scale."
                    : "Newstag'ın kendi markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birlikte sunuyor. Konutlardan endüstriyel tesislere kadar her ölçekte ısıtma, soğutma ve sıcak su konforu sağlıyor."}
                </p>
                <Link
                  href="/isi-pompasi#urunler"
                  className="inline-flex items-center gap-3 bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c2410c] transition-colors"
                >
                  <ThermometerSun className="w-5 h-5" />
                  {isEnglish ? "View Heat Pump Products" : "Isı Pompası Ürünlerini İncele"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/heat-pump-branded.png"
                  alt={isEnglish ? "Thermaplus heat pump installation" : "Thermaplus ısı pompası kurulumu"}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {pageStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[28px] bg-white border border-gray-100 p-7 text-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#ea580c] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Thermaplus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {isEnglish ? "Why Thermaplus?" : "Neden Thermaplus?"}
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pageStrengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-[#f8fafc] rounded-[30px] p-8 border border-gray-100"
                >
                  <item.icon className="w-9 h-9 text-[#ea580c] mb-6" />
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ürün gamı */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {isEnglish ? "Thermaplus Product Range" : "Thermaplus Ürün Gamı"}
              </h2>
              <p className="text-gray-500 text-lg font-light">
                {isEnglish
                  ? "A wide portfolio from 6 kW residential solutions to 1,066 kW cascade systems."
                  : "6 kW konut çözümlerinden 1.066 kW kaskad sistemlere uzanan geniş portföy."}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pageProductGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center mb-6">
                    <group.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">{group.title}</h3>
                  <ul className="space-y-4 mb-8 flex-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/isi-pompasi#urunler"
                    className="inline-flex items-center gap-2 font-bold text-[#1e3a8a] hover:text-[#ea580c] transition-colors"
                  >
                    Serideki Ürünler <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              İşletmenizin Uçtan Uca Enerji Dönüşümünü Başlatma Zamanı
            </h2>
            <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light">
              İhtiyacınıza en uygun Thermaplus modelini birlikte belirleyelim;
              keşiften kuruluma tüm süreci yönetelim.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/isi-pompasi#urunler"
                className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
              >
                Ürünleri İncele <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 border border-white/40 px-10 py-5 rounded-full font-bold hover:bg-white hover:text-[#1e3a8a] transition-colors"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
