"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  Droplets,
  Factory,
  Home,
  Leaf,
  Recycle,
  Settings,
  Thermometer,
  ThermometerSun,
  Waves,
  Wind,
} from "lucide-react";
import { heatPumpCategories, heatPumpProducts } from "@/lib/product-data";
import { useLanguage } from "@/lib/i18n";

const productCopyEn: Record<string, { title: string; category: string; summary: string; description: string; specs: string[]; tableLabels?: Record<string, string> }> = {
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

const categoryCopyEn: Record<string, { title: string; desc: string }> = {
  "Konut Serileri": {
    title: "Residential Series",
    desc: "8-35 KW inverter monoblock solutions and boiler-compatible series for heating, cooling, and domestic hot water.",
  },
  "Havuz Serileri": {
    title: "Pool Series",
    desc: "Quiet, corrosion-resistant heating solutions from 15 m³ villa pools to 500 m³ commercial pools.",
  },
  "Endüstriyel Seriler": {
    title: "Industrial Series",
    desc: "Solutions for high-capacity projects with operating water up to 78 °C and cascade system architecture.",
  },
};

const copStats = [
  { value: "3-5", label: "COP: 1 birim elektrikten 3-5 birim ısı" },
  { value: "%75", label: "Yıllık enerji giderinde tasarruf potansiyeli" },
  { value: "A+++", label: "ERP enerji verimliliği sınıfı" },
  { value: "80 °C", label: "Endüstriyel serilerde çıkış suyu sıcaklığı" },
];

const cycleSteps = [
  {
    title: "Dış Hava",
    desc: "Havadaki, topraktaki veya sudaki düşük sıcaklıklı enerji alınır.",
    icon: Wind,
    align: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Evaporatör",
    desc: "Soğutucu akışkan ısıyı emer ve buharlaşır.",
    icon: Droplets,
    align: "lg:col-start-2 lg:row-start-2",
  },
  {
    title: "Kompresör",
    desc: "Basınç yükselir, enerji kullanılabilir ısıya dönüşür.",
    icon: Settings,
    align: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Kondenser",
    desc: "Isı, suya veya iç ortama kontrollü şekilde aktarılır.",
    icon: Thermometer,
    align: "lg:col-start-4 lg:row-start-2",
  },
  {
    title: "Isıtma / Soğutma / Sıcak Su",
    desc: "Tek cihazla konfor ve kullanım sıcak suyu sağlanır.",
    icon: ThermometerSun,
    align: "lg:col-start-5 lg:row-start-1",
  },
];

const sources = [
  {
    icon: Wind,
    title: "Hava Kaynaklı",
    desc: "En yaygın çözüm; kurulumu basit, yatırım maliyeti düşük.",
  },
];

type HeatMode = "heating" | "cooling" | "water";

function HeatPumpCycleDiagram() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const [mode, setMode] = useState<HeatMode>("heating");
  const [outsideTemp, setOutsideTemp] = useState(7);
  const isCooling = mode === "cooling";
  const isWater = mode === "water";
  const targetTemp = isCooling ? 18 : isWater ? 55 : 22;
  const cop = Math.max(
    1.8,
    Math.min(
      5.5,
      isCooling
        ? 3.8 - (outsideTemp - 7) * 0.035
        : isWater
          ? 3.1 + (outsideTemp - 7) * 0.045
          : 3.3 + (outsideTemp - 7) * 0.055,
    ),
  ).toFixed(1);
  const hotColor = "#f97316";
  const coldColor = "#38bdf8";
  const outsideTitle = isEnglish
    ? isCooling ? "Outdoor Unit · Condenser" : "Outdoor Unit · Evaporator"
    : isCooling ? "Dış Ünite · Kondenser" : "Dış Ünite · Evaporatör";
  const insideTitle = isCooling
    ? isEnglish ? "Indoor Unit · Evaporator" : "İç Ünite · Evaporatör"
    : isWater
      ? isEnglish ? "Boiler Heat Exchanger" : "Boyler Eşanjörü"
      : isEnglish ? "Indoor Unit · Condenser" : "İç Ünite · Kondenser";
  const outsideAction = isEnglish
    ? isCooling ? "Releases heat outdoors" : "Captures heat from air"
    : isCooling ? "Dış ortama ısı verir" : "Havadan ısı alır";
  const insideAction = isEnglish
    ? isCooling ? "Captures heat from indoors" : "Transfers heat"
    : isCooling ? "İç ortamdan ısı alır" : "Isıyı aktarır";

  const modes: { id: HeatMode; label: string; icon: React.ElementType }[] = [
    { id: "heating", label: isEnglish ? "Heating" : "Isıtma", icon: ThermometerSun },
    { id: "cooling", label: isEnglish ? "Cooling" : "Soğutma", icon: Wind },
    { id: "water", label: isEnglish ? "Domestic Hot Water" : "Kullanım Suyu", icon: Droplets },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#0b1222] p-5 shadow-2xl md:p-8"
    >
      <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-xl font-bold">{isEnglish ? "Refrigerant Cycle" : "Soğutucu Akışkan Döngüsü"}</h3>
          <p className="mt-1 text-sm text-white/40">
            {isEnglish ? "Switch modes to review the energy flow direction" : "Modu değiştirerek enerji akış yönünü inceleyin"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {modes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                mode === id
                  ? "border-[#f97316] bg-[#f97316]/15 text-[#f97316]"
                  : "border-white/10 bg-white/[0.03] text-white/45 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          [cop, "COP"],
          [`${outsideTemp}°C`, isEnglish ? "Outdoor Temperature" : "Dış Sıcaklık"],
          [`${targetTemp}°C`, isWater ? (isEnglish ? "Water Temperature" : "Su Sıcaklığı") : (isEnglish ? "Indoor Space" : "İç Ortam")],
        ].map(([value, label], index) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-center">
            <p className={`text-2xl font-bold ${index === 1 ? "text-sky-400" : index === 2 ? "text-[#f97316]" : "text-amber-400"}`}>{value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/30">{label}</p>
          </div>
        ))}
      </div>

      <label className="mb-5 flex items-center gap-4 text-xs text-white/45">
        {isEnglish ? "Outdoor temperature" : "Dış sıcaklık"}
        <input
          type="range"
          min="-25"
          max="35"
          value={outsideTemp}
          onChange={(event) => setOutsideTemp(Number(event.target.value))}
          className="h-1 flex-1 accent-sky-400"
        />
        <span className="w-12 text-right text-sky-300">{outsideTemp}°C</span>
      </label>

      <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-relaxed text-white/55">
        <strong className="text-white">
          {isEnglish
            ? `${isCooling ? "Cooling" : isWater ? "Domestic hot water" : "Heating"} cycle:`
            : `${isCooling ? "Soğutma" : isWater ? "Kullanım suyu" : "Isıtma"} döngüsü:`}
        </strong>{" "}
        {isEnglish
          ? isCooling
            ? "Heat collected from the indoor unit is transferred to the refrigerant, compressed, and released outdoors through the outdoor unit."
            : isWater
              ? "Low-temperature energy collected from outdoor air is raised by the compressor and transferred to domestic hot water."
              : "The outdoor evaporator absorbs heat from the air, the compressor raises refrigerant temperature, and the indoor condenser transfers heat into the space."
          : isCooling
            ? "İç üniteden alınan ısı soğutucu akışkana aktarılır, kompresör ve dış ünite üzerinden dış ortama bırakılır."
            : isWater
              ? "Dış havadan alınan düşük sıcaklıklı enerji kompresörle yükseltilir ve kullanım suyuna aktarılır."
              : "Dış evaporatör havadan ısı çeker, kompresör akışkan sıcaklığını yükseltir ve iç kondenser ısıyı ortama aktarır."}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#060c17] p-5 md:p-7">
        <svg viewBox="0 0 1000 560" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true">
          <path d="M205 165 H420 Q500 165 500 255" fill="none" stroke={isCooling ? hotColor : coldColor} strokeWidth="5" opacity=".55" />
          <path d="M500 255 Q500 165 580 165 H795" fill="none" stroke={isCooling ? coldColor : hotColor} strokeWidth="5" opacity=".55" />
          <path d="M795 395 V485 H205 V395" fill="none" stroke="#a78bfa" strokeWidth="5" opacity=".45" />
          {[0, 1, 2, 3].map((item) => (
            <motion.circle
              key={item}
              r="7"
              fill={item < 2 ? (isCooling ? hotColor : coldColor) : (isCooling ? coldColor : hotColor)}
              animate={{ offsetDistance: isCooling ? ["100%", "0%"] : ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 4, delay: item * 0.75, ease: "linear" }}
              style={{ offsetPath: "path('M205 165 H420 Q500 165 500 255 Q500 165 580 165 H795 V395 V485 H205 V395')" }}
            />
          ))}
        </svg>

        <div className="relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_220px_1fr] lg:grid-rows-[1fr_auto] lg:items-center lg:gap-10">
          <div className={`rounded-[24px] border p-6 lg:row-start-1 ${isCooling ? "border-orange-400/30 bg-orange-400/[0.07]" : "border-sky-400/30 bg-sky-400/[0.07]"}`}>
            <p className={`text-xs font-bold uppercase tracking-widest ${isCooling ? "text-orange-300" : "text-sky-300"}`}>{isEnglish ? "Outdoor Air" : "Dış Ortam"}</p>
            <h4 className="mt-2 text-xl font-bold">{outsideTitle}</h4>
            <div className="my-5 space-y-2">
              {[1, 2, 3].map((line) => <div key={line} className={`h-2 rounded-full border ${isCooling ? "border-orange-400/30" : "border-sky-400/30"}`} />)}
            </div>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="mx-auto w-fit">
              <Wind className={`h-12 w-12 ${isCooling ? "text-orange-400" : "text-sky-400"}`} />
            </motion.div>
            <p className="mt-4 text-center text-sm text-white/45">{outsideAction} · {outsideTemp}°C</p>
          </div>

          <div className="flex flex-col items-center lg:row-start-1">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-400/10 text-center shadow-[0_0_40px_rgba(251,191,36,.12)]"
            >
              <Settings className="mb-2 h-10 w-10 animate-spin text-amber-400 [animation-duration:5s]" />
              <span className="text-sm font-bold text-amber-300">{isEnglish ? "Compressor" : "Kompresör"}</span>
              <span className="text-[10px] text-white/35">{isEnglish ? "Pressure ↑ · Temperature ↑" : "Basınç ↑ · Sıcaklık ↑"}</span>
            </motion.div>
          </div>

          <div className={`rounded-[24px] border p-6 lg:row-start-1 ${isCooling ? "border-sky-400/30 bg-sky-400/[0.07]" : "border-orange-400/30 bg-orange-400/[0.07]"}`}>
            <p className={`text-xs font-bold uppercase tracking-widest ${isCooling ? "text-sky-300" : "text-orange-300"}`}>
              {isWater ? (isEnglish ? "Water Circuit" : "Su Devresi") : (isEnglish ? "Indoor Space" : "İç Ortam")}
            </p>
            <h4 className="mt-2 text-xl font-bold">{insideTitle}</h4>
            <div className="my-5 space-y-2">
              {[1, 2, 3].map((line) => <div key={line} className={`h-2 rounded-full border ${isCooling ? "border-sky-400/30" : "border-orange-400/30"}`} />)}
            </div>
            <ThermometerSun className={`mx-auto h-12 w-12 ${isCooling ? "text-sky-400" : "text-orange-400"}`} />
            <p className="mt-4 text-center text-sm text-white/45">{insideAction} · {targetTemp}°C</p>
          </div>

          <div className="rounded-xl border border-violet-400/30 bg-violet-400/10 p-4 text-center lg:col-start-2 lg:row-start-2">
            <Droplets className="mx-auto mb-2 h-6 w-6 text-violet-300" />
            <p className="text-sm font-bold text-violet-200">{isEnglish ? "Expansion Valve" : "Genleşme Valfi"}</p>
            <p className="text-[10px] text-white/35">{isEnglish ? "Pressure ↓ · Temperature ↓" : "Basınç ↓ · Sıcaklık ↓"}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-5 text-[10px] uppercase tracking-wider text-white/35">
        <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-orange-400" /> {isEnglish ? "High pressure / hot gas" : "Yüksek basınç / sıcak gaz"}</span>
        <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-violet-400" /> {isEnglish ? "High pressure / liquid" : "Yüksek basınç / sıvı"}</span>
        <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-sky-400" /> {isEnglish ? "Low pressure / cold gas" : "Düşük basınç / soğuk gaz"}</span>
      </div>
    </motion.div>
  );
}

const benefits = [
  {
    title: "Yüksek Enerji Tasarrufu",
    icon: BarChart3,
    desc: "Doğalgazın 3-5 katı verimlilik ile işletme ve konut enerji giderlerini belirgin şekilde düşürür.",
  },
  {
    title: "3'ü 1 Arada Tek Sistem",
    icon: Thermometer,
    desc: "Isıtma, soğutma ve sıcak su ihtiyacını tek sistemle karşılar; ayrı sistemlerin kurulum ve bakım maliyetinden kurtarır.",
  },
  {
    title: "Fosil Yakıttan Bağımsızlık",
    icon: Leaf,
    desc: "Fiyatı öngörülemez hale gelen doğalgaz bağımlılığını kırar; karbon ayak izini azaltır.",
  },
  {
    title: "Atık Isı Değerlendirme",
    icon: Recycle,
    desc: "Uygun projelerde tesisteki atık ısıyı yeniden kullanarak toplam verimliliği artırır.",
  },
  {
    title: "Havuz Konforu",
    icon: Waves,
    desc: "Konut ve ticari havuzlarda sezonu uzatır; 500 m³'e kadar havuzlarda sıcak havuz konforu sağlar.",
  },
  {
    title: "Akıllı Kontrol",
    icon: Settings,
    desc: "Wi-Fi, LCD panel ve otomasyon seçenekleriyle sistem performansını izlenebilir hale getirir.",
  },
];

const thermaplusPluses = [
  "Türkiye'de üretilen ısı pompası teknolojisi",
  "Yerli parça, yerli mühendislik ve güçlü servis ağı",
  "Konut, havuz ve endüstriyel seri seçenekleri",
  "GES ve BESS ile entegre, düşük karbonlu kullanım senaryoları",
  "A+++ enerji etiketi ile bina enerji pasaportu değerine katkı",
  "8 KW’dan yüksek kapasiteli sanayi projelerine uzanan geniş güç aralığı",
];

const copStatsEn = [
  { value: "3-5", label: "COP: 3-5 units of heat from 1 unit of electricity" },
  { value: "%75", label: "Potential annual energy cost savings" },
  { value: "A+++", label: "ERP energy efficiency class" },
  { value: "80 °C", label: "Outlet water temperature in industrial series" },
];

const sourcesEn = [
  {
    icon: Wind,
    title: "Air Source",
    desc: "The most common solution, with simple installation and lower initial investment.",
  },
];

const benefitsEn = [
  {
    title: "High Energy Savings",
    icon: BarChart3,
    desc: "Reduces residential and commercial energy costs with efficiency 3-5 times higher than conventional fossil fuel systems.",
  },
  {
    title: "Three Functions in One System",
    icon: Thermometer,
    desc: "Covers heating, cooling, and domestic hot water with one system, reducing separate installation and maintenance costs.",
  },
  {
    title: "Less Dependence on Fossil Fuels",
    icon: Leaf,
    desc: "Reduces exposure to unpredictable natural gas prices and lowers the carbon footprint.",
  },
  {
    title: "Waste Heat Recovery",
    icon: Recycle,
    desc: "In suitable projects, reuses waste heat inside the facility to increase total efficiency.",
  },
  {
    title: "Pool Comfort",
    icon: Waves,
    desc: "Extends the pool season for residential and commercial pools, including pools up to 500 m³.",
  },
  {
    title: "Smart Control",
    icon: Settings,
    desc: "Makes system performance easy to monitor with Wi-Fi, LCD panel, and automation options.",
  },
];

const thermaplusPlusesEn = [
  "Heat pump technology manufactured in Turkey",
  "Local components, local engineering, and a strong service network",
  "Residential, pool, and industrial series options",
  "Low-carbon use scenarios integrated with solar PV and BESS",
  "A+++ energy label support for building energy performance",
  "Wide power range from 8 KW to high-capacity industrial projects",
];

const categoryMeta: Record<string, { icon: typeof Home; desc: string }> = {
  "Konut Serileri": {
    icon: Home,
    desc: "Isıtma, soğutma ve kullanım sıcak suyu için 8-35 KW inverter monoblok çözümler ve boyler uyumlu seriler.",
  },
  "Havuz Serileri": {
    icon: Waves,
    desc: "15 m³ villa havuzlarından 500 m³ ticari havuzlara kadar korozyona dayanıklı, sessiz ısıtma çözümleri.",
  },
  "Endüstriyel Seriler": {
    icon: Factory,
    desc: "78 °C’ye varan çalışma suyu ve kaskad sistem yapısı ile büyük kapasiteli projelere yönelik çözümler.",
  },
};

export default function HeatPumpPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageCopStats = isEnglish ? copStatsEn : copStats;
  const pageSources = isEnglish ? sourcesEn : sources;
  const pageBenefits = isEnglish ? benefitsEn : benefits;
  const pageThermaplusPluses = isEnglish ? thermaplusPlusesEn : thermaplusPluses;

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-sm mb-8 uppercase tracking-widest">
                  <Leaf className="w-4 h-4" /> {isEnglish ? "Clean Heat Technology" : "Temiz Isı Teknolojisi"}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  Thermaplus <span className="text-[#ea580c]">{isEnglish ? "Heat Pump" : "Isı Pompası"}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                  {isEnglish
                    ? "Eco-friendly, efficient, and economical. A heat pump transfers energy from air, ground, or water into heating and cooling systems. It heats in winter, cools in summer, and can also produce domestic hot water."
                    : "Çevreci, verimli, ekonomik. Isı pompası; çevredeki havadan, topraktan veya sudan aldığı enerjiyi ısıtma ve soğutma sistemine aktaran elektrikli bir cihazdır. Kışın ısıtır, yazın soğutur; üstelik kullanım sıcak suyu da üretir."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#urunler"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors"
                  >
                    {isEnglish ? "View Products" : "Ürünleri İncele"} <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/markalar/thermaplus"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    {isEnglish ? "Meet the Brand" : "Markayı Tanıyın"}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/heat-pump-branded.png"
                  alt={isEnglish ? "Thermaplus heat pump" : "Thermaplus ısı pompası"}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* COP verileri */}
        <section className="py-20 bg-white border-b border-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {pageCopStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#f8fafc] rounded-[28px] p-8 border border-gray-100 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#ea580c] mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-500 font-medium leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-500 font-light mt-10 max-w-3xl mx-auto">
              {isEnglish
                ? "COP (Coefficient of Performance): A heat pump can produce 3-5 units of heating energy from 1 unit of electricity. This means 3-5 times higher efficiency than natural gas and savings of up to 75% per year."
                : "COP (Verimlilik Katsayısı): Isı pompası 1 birim elektrik harcayarak 3-5 birim ısıtma enerjisi üretir. Bu, doğalgaza göre 3-5 kat verimlilik ve yılda %75'e varan tasarruf anlamına gelir."}
            </p>
          </div>
        </section>

        {/* Nasıl çalışır - cable energy flow */}
        <section className="relative overflow-hidden bg-[#07152f] py-24 text-white">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <motion.div
            animate={{ opacity: [0.22, 0.55, 0.22], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e3a8a]/40 blur-[120px]"
          />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-[#f97316]">
                {isEnglish ? "Heat Energy Flow" : "Isı Enerjisi Akışı"}
              </span>
              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                {isEnglish ? "How Does a Heat Pump Work?" : "Isı Pompası Nasıl Çalışır?"}
              </h2>
              <p className="text-lg font-light leading-relaxed text-white/70">
                {isEnglish
                  ? "Low-temperature environmental energy moves through the refrigerant circuit and is converted into usable heat through the evaporator, compressor, and condenser cycle."
                  : "Düşük sıcaklıklı çevre enerjisi kablo hattı boyunca taşınır; evaporatör, kompresör ve kondenser çevrimiyle kullanılabilir ısıya dönüştürülür."}
              </p>
            </div>

            <HeatPumpCycleDiagram />

            <div className="relative mx-auto hidden max-w-7xl">
              <svg
                viewBox="0 0 1200 560"
                className="pointer-events-none absolute inset-x-0 top-2 z-0 hidden h-[560px] w-full overflow-visible lg:block"
                aria-hidden="true"
              >
                <path
                  d="M240 150 C300 150 285 430 360 430 C455 430 455 150 560 150 C665 150 665 430 800 430 C910 430 900 150 1035 150"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeLinecap="round"
                  strokeWidth="14"
                />
                <path
                  d="M240 150 C300 150 285 430 360 430 C455 430 455 150 560 150 C665 150 665 430 800 430 C910 430 900 150 1035 150"
                  fill="none"
                  stroke="rgba(7,21,47,0.9)"
                  strokeLinecap="round"
                  strokeWidth="8"
                />
                <motion.path
                  animate={{ strokeDashoffset: [120, -920] }}
                  transition={{ repeat: Infinity, duration: 5.8, ease: "linear" }}
                  d="M240 150 C300 150 285 430 360 430 C455 430 455 150 560 150 C665 150 665 430 800 430 C910 430 900 150 1035 150"
                  fill="none"
                  stroke="#f97316"
                  strokeDasharray="34 86"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
                {[
                  { cx: 240, cy: 150, delay: 0 },
                  { cx: 360, cy: 430, delay: 0.25 },
                  { cx: 560, cy: 150, delay: 0.5 },
                  { cx: 800, cy: 430, delay: 0.75 },
                  { cx: 1035, cy: 150, delay: 1 },
                ].map((point) => (
                  <motion.circle
                    key={`${point.cx}-${point.cy}`}
                    animate={{ opacity: [0.25, 1, 0.25], r: [5, 9, 5] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      delay: point.delay,
                      ease: "easeInOut",
                    }}
                    cx={point.cx}
                    cy={point.cy}
                    fill="#f97316"
                  />
                ))}
              </svg>

              <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-5 lg:grid-rows-[auto_auto] lg:gap-x-6 lg:gap-y-12">
                {cycleSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.1, duration: 0.55 }}
                    className={`${step.align} relative pb-10 lg:pb-0`}
                  >
                    {index > 0 && (
                      <div className="absolute -left-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#f97316]/60 bg-[#07152f] lg:flex">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
                      </div>
                    )}
                    {index < cycleSteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#f97316]/60 bg-[#07152f] lg:flex">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
                      </div>
                    )}
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          delay: index * 0.25,
                          ease: "easeInOut",
                        }}
                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f97316] text-white shadow-[0_0_28px_rgba(249,115,22,0.35)]"
                      >
                        <step.icon className="h-7 w-7" />
                      </motion.div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-[#1e3a8a]">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-sm font-light leading-relaxed text-white/68">
                        {step.desc}
                      </p>
                      <motion.div
                        animate={{ opacity: [0.2, 0.7, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2.6, delay: index * 0.35 }}
                        className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#f97316]/40"
                      />
                    </div>
                    {index < cycleSteps.length - 1 && (
                      <div className="absolute bottom-0 left-1/2 flex h-10 -translate-x-1/2 flex-col items-center lg:hidden">
                        <div className="h-full w-3 rounded-full bg-white/15" />
                        <motion.div
                          animate={{ y: [0, 28, 0], opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                          className="absolute top-0 h-4 w-4 rounded-full bg-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.9)]"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faydalar */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {isEnglish ? "Benefits of Heat Pumps" : "Isı Pompası ile Elde Edilen Faydalar"}
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="mx-auto mb-12 grid max-w-xl grid-cols-1 gap-6">
              {pageSources.map((source, i) => (
                <motion.div
                  key={source.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-[28px] p-7 border border-gray-100 shadow-sm"
                >
                  <source.icon className="w-8 h-8 text-[#ea580c] mb-5" />
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{source.title}</h3>
                  <p className="text-gray-500 font-light">{source.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Thermaplus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/residential-solutions.png"
                  alt={isEnglish ? "Thermaplus integrated energy solution" : "Thermaplus entegre enerji çözümü"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                  {isEnglish ? "Newstag Registered Brand" : "Newstag'ın Tescilli Markası"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8">
                  {isEnglish ? "Why Thermaplus?" : "Neden Thermaplus?"}
                </h2>
                <div className="space-y-5">
                  {pageThermaplusPluses.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#ea580c] text-white flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <p className="text-lg text-gray-600 font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ürünler - Konut / Havuz / Endüstriyel */}
        <section id="urunler" className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {isEnglish ? "Thermaplus Product Range" : "Thermaplus Ürün Gamı"}
              </h2>
              <p className="text-gray-500 text-lg font-light">
                {isEnglish
                  ? "Series grouped for residential, pool, and industrial needs."
                  : "Konut, havuz ve endüstriyel ihtiyaçlara göre gruplanmış seriler."}
              </p>
            </div>

            {heatPumpCategories.map((category) => {
              const meta = categoryMeta[category];
              const categoryCopy = isEnglish ? categoryCopyEn[category] : undefined;
              const CategoryIcon = meta.icon;
              return (
                <div key={category} className="mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center">
                        <CategoryIcon className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#1e3a8a]">{categoryCopy?.title ?? category}</h3>
                    </div>
                    <p className="text-gray-500 font-light md:mb-1 max-w-2xl">{categoryCopy?.desc ?? meta.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {heatPumpProducts
                      .filter((product) => product.category === category)
                      .map((product) => {
                        const displayProduct = isEnglish && productCopyEn[product.slug]
                          ? { ...product, ...productCopyEn[product.slug] }
                          : product;
                        return (
                        <Link
                          key={product.slug}
                          href={`/isi-pompasi/${product.slug}`}
                          className="group flex flex-col items-stretch gap-5 rounded-[24px] border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center"
                        >
                          <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[18px] bg-gray-50 sm:aspect-square sm:w-36">
                            <Image
                              src={product.image}
                              alt={displayProduct.title}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="min-w-0 py-1">
                            <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 leading-tight">
                              {displayProduct.title}
                            </h4>
                            <p className="text-gray-500 font-light leading-relaxed mb-3 text-sm line-clamp-2">
                              {displayProduct.summary}
                            </p>
                            {product.options && (
                              <p className="mb-3 line-clamp-2 text-xs font-bold leading-relaxed text-[#ea580c]">
                                {product.options.join(" · ")}
                              </p>
                            )}
                            <span className="inline-flex items-center gap-2 font-bold text-sm text-[#1e3a8a] group-hover:text-[#ea580c]">
                              {isEnglish ? "View Details" : "Detayları İncele"} <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </Link>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tasarruf hesaplama modülü */}
        <section className="py-24 bg-[#1e3a8a]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto text-white">
              <Calculator className="w-14 h-14 text-[#f97316] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {isEnglish ? "Capacity Calculation Simulator" : "Kapasite Hesaplama Simülatörü"}
              </h2>
              <p className="text-white/75 font-light text-lg md:text-xl leading-relaxed mb-10">
                {isEnglish
                  ? "Enter your existing building and system information into our simulator to calculate the estimated savings rate provided by a heat pump, and view the required capacity and our product recommendation. At the end of the calculation, you can share your information with our technical team to request an offer."
                  : "Mevcut yapı ve sistem bilgilerinizi simülatörümüze girerek, ısı pompası ile sağlanacak tahmini tasarruf oranını hesaplayabilir, ihtiyaç duyulan kapasite ve ürün önerimizi görebilirsiniz. Dilerseniz hesaplama sonunda bilgilerinizi teknik ekibimizle paylaşarak teklif alabilirsiniz."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/kapasite-hesaplama.html"
                  className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
                >
                  {isEnglish ? "Calculate Now" : "Hesaplama Yapın"} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1e3a8a] transition-colors"
                >
                  <ThermometerSun className="w-5 h-5" />
                  {isEnglish ? "Talk to an Expert" : "Uzmana Danışın"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
