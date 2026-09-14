"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Cable,
  Cpu,
  Factory,
  Gauge,
  Globe2,
  LineChart,
  PlugZap,
  Power,
  ShieldCheck,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import { bessProducts } from "@/lib/product-data";
import { useLanguage } from "@/lib/i18n";

const productCardImages: Record<string, string> = {
  "ev-tipi-bess": "/images/residential-solutions.png",
  "tasinabilir-bess": "/images/limited-grid-event.png",
  "sivi-sogutmali-kabinet-bess": "/images/car.png",
  "flexcube-konteyner-bess": "/images/limited-grid-quarry.png",
  "konteyner-tipi-bess": "/images/12121.png",
};

const bessProductCopyEn: Record<string, { title: string; category: string; summary: string }> = {
  "ev-tipi-bess": {
    title: "Home Energy Storage",
    category: "Residential Solutions",
    summary: "A modular home battery that stores solar or low-tariff grid energy, lowers electricity costs, and protects critical loads during outages.",
  },
  "tasinabilir-bess": {
    title: "Portable Energy Storage",
    category: "Mobile Power Solutions",
    summary: "A compact, lightweight, multi-purpose portable power source for outdoor events, field work, and emergency scenarios.",
  },
  "sivi-sogutmali-kabinet-bess": {
    title: "Outdoor Liquid-Cooled Cabinet BESS",
    category: "Industrial and Commercial Facilities",
    summary: "A plug-and-play single-cabinet energy storage system for industrial and commercial sites, expandable through parallel connection.",
  },
  "flexcube-konteyner-bess": {
    title: "FlexCube Container BESS",
    category: "Limited Grid and Off-Grid",
    summary: "A 10 ft integrated, portable, plug-and-play storage solution for locations with weak grid, no grid, or sudden high-power demand.",
  },
  "konteyner-tipi-bess": {
    title: "20 ft Container BESS",
    category: "Power Plants and Grid-Scale Projects",
    summary: "A liquid-cooled, MWh-class modular energy storage system for power plants, grids, and high-power industrial facilities.",
  },
};

const flowSteps = [
  {
    title: "GES / Şebeke",
    desc: "Üretim veya ucuz tarife enerjisi sisteme alınır.",
    icon: Sun,
    align: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "PCS",
    desc: "AC/DC dönüşümü milisaniyeler içinde yönetilir.",
    icon: Cable,
    align: "lg:col-start-2 lg:row-start-2",
  },
  {
    title: "Batarya",
    desc: "LFP hücrelerde güvenli ve ölçeklenebilir depolama yapılır.",
    icon: BatteryCharging,
    align: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "EMS / BMS",
    desc: "Yazılım, batarya sağlığını ve enerji akışını optimize eder.",
    icon: Cpu,
    align: "lg:col-start-4 lg:row-start-2",
  },
  {
    title: "Yük / Şebeke",
    desc: "Enerji ihtiyaç anında tesise veya şebekeye aktarılır.",
    icon: Zap,
    align: "lg:col-start-5 lg:row-start-1",
  },
];

const benefits = [
  {
    title: "Arbitraj ile Tasarruf",
    desc: "Akıllı EMS ile en ucuz saatte şarj edilen enerjiyi en pahalı saatte kullanarak net getiri elde edin.",
    icon: LineChart,
  },
  {
    title: "Pik Güç Tıraşlama",
    desc: "Anlık yüksek güç gereksinimlerini BESS ile karşılayın; güç aşım bedellerini ve kapasite baskısını azaltın.",
    icon: Gauge,
  },
  {
    title: "Operasyonel Süreklilik",
    desc: "Milisaniyeler içinde devreye girerek kesintisiz üretim sağlayın; duruş kaynaklı maliyetleri engelleyin.",
    icon: ShieldCheck,
  },
  {
    title: "Lisanssız GES Tamamlayıcısı",
    desc: "Saatlik mahsuplaşma döneminde gündüz üretimini depolayarak kazanca çevirin, şebeke kısıtlama kayıplarını önleyin.",
    icon: Sun,
  },
  {
    title: "Kapasite Kısıtını Aşma",
    desc: "Kapasite kısıtı olan saatlerde BESS üzerinden enerji sağlayın; trafo yatırımını ve bekleme süresini erteleyin.",
    icon: BatteryCharging,
  },
  {
    title: "Reaktif Güç Kompanzasyonu",
    desc: "Dinamik reaktif güç dengeleme ve gerilim regülasyonu ile ceza risklerini ortadan kaldırın.",
    icon: PlugZap,
  },
  {
    title: "Harmonik Kompanzasyonu",
    desc: "Aktif harmonik filtreleme ile ekipman ömrünü uzatın, enerji iletim kayıplarını azaltın.",
    icon: Cable,
  },
  {
    title: "Jeneratör İkamesi",
    desc: "Yüksek yakıt maliyetli jeneratör yerine ekonomik, sessiz ve temiz yedek enerji kullanın.",
    icon: Zap,
  },
  {
    title: "Frekans Kontrolü",
    desc: "Milisaniyeler içinde tepkiyle primer ve sekonder frekans dengeleme hizmetlerinden ilave gelir kazanın.",
    icon: Power,
  },
  {
    title: "Santraller İçin Kritik Yatırım",
    desc: "GES ve RES üretimindeki dengesizliği düzenleyin, şebeke kısıtlarını yönetin ve yan hizmet gelirlerini çeşitlendirin.",
    icon: Building2,
  },
  {
    title: "Off-grid Çalışabilme",
    desc: "Şebekenin bulunmadığı noktalarda tek başına veya GES ile birlikte güvenilir ve ölçeklenebilir enerji sağlayın.",
    icon: Globe2,
  },
];

const inspurStats = [
  { value: "$31B+", label: "Yıllık Gelir (USD)" },
  { value: "Top 3", label: "Global Sunucu Üreticisi" },
  { value: "120", label: "Ülkede Aktif Operasyon" },
  { value: "31.000+", label: "Global Patent Portföyü" },
];

const inspurReasons = [
  {
    title: "IT Dünyasının Devi",
    desc: "1945'te kurulan Inspur, bugün 3 borsada işlem gören bir teknoloji holdingi. Yapay zeka sunucularında dünya lideri olan şirket, bu birikimini enerji depolama sistemlerine taşıyor.",
    icon: Globe2,
  },
  {
    title: "Ar-Ge ve Mühendislik Gücü",
    desc: "36.000 çalışanının %60'ı Ar-Ge ve mühendislik kadrosunda. IT altyapısı yazılım gücünü BESS'e entegre eden tek oyuncu.",
    icon: Cpu,
  },
  {
    title: "Kanıtlanmış Saha Deneyimi",
    desc: "1 GWh'a yaklaşan kurulum deneyimi; Rizhao Santral Projesi'nde tek seferde 200 MW / 400 MWh kurulum başarısı.",
    icon: BatteryCharging,
  },
  {
    title: "Güvenlik ve Uzun Ömür",
    desc: "8.000+ çevrim ömrü, ürün ömrünü %15'e kadar artıran sıvı soğutma, entegre yangın koruma ve hücre bazlı izleme.",
    icon: ShieldCheck,
  },
];

const investSteps = [
  {
    title: "Enerji Arbitrajı",
    desc: "Ucuz tarifeden şarj, pahalı saatlerde deşarj stratejisi ile net getiri.",
  },
  {
    title: "Yan Gelir Avantajları",
    desc: "Pik güç tıraşlama, jeneratör ikamesi, reaktif güç cezası engelleme ve frekans kontrolü gibi ilave gelirler.",
  },
  {
    title: "Kiralama ve Teşvik Modelleri",
    desc: "Teşvik, leasing, kredi veya ESCO gibi ilk yatırım tasarrufu yaratan modellerle kolay yatırım.",
  },
  {
    title: "Şarj Başına Maliyet Şeffaflığı",
    desc: "8.000+ çevrim ömrü ve önleyici bakım ile muadillerine göre çok daha uygun toplam sahip olma maliyeti.",
  },
];

const flowStepsEn = [
  { title: "Solar / Grid", desc: "Generated or low-tariff energy enters the system.", icon: Sun, align: "lg:col-start-1 lg:row-start-1" },
  { title: "PCS", desc: "AC/DC conversion is managed within milliseconds.", icon: Cable, align: "lg:col-start-2 lg:row-start-2" },
  { title: "Battery", desc: "Energy is stored safely and scalably in LFP cells.", icon: BatteryCharging, align: "lg:col-start-3 lg:row-start-1" },
  { title: "EMS / BMS", desc: "Software optimizes battery health and energy flow.", icon: Cpu, align: "lg:col-start-4 lg:row-start-2" },
  { title: "Load / Grid", desc: "Energy is delivered to the facility or grid when needed.", icon: Zap, align: "lg:col-start-5 lg:row-start-1" },
];

const benefitsEn = [
  { title: "Energy Arbitrage", desc: "Charge when energy is cheaper and use or sell stored energy when prices are higher.", icon: LineChart },
  { title: "Peak Shaving", desc: "Cover sudden high-power demand with BESS and reduce demand charges and capacity pressure.", icon: Gauge },
  { title: "Operational Continuity", desc: "Respond within milliseconds to support uninterrupted production and avoid downtime costs.", icon: ShieldCheck },
  { title: "Solar PV Complement", desc: "Store daytime solar generation and use it later to increase self-consumption and reduce curtailment losses.", icon: Sun },
  { title: "Capacity Flexibility", desc: "Use stored energy when grid capacity is limited and postpone transformer or connection upgrades.", icon: BatteryCharging },
  { title: "Reactive Power Compensation", desc: "Reduce penalty risk with dynamic reactive power balancing and voltage regulation.", icon: PlugZap },
  { title: "Harmonic Compensation", desc: "Protect equipment and reduce transmission losses with active harmonic filtering.", icon: Cable },
  { title: "Generator Replacement", desc: "Use a quiet, clean, and economical backup power source instead of fuel-heavy generators.", icon: Zap },
  { title: "Frequency Control", desc: "Create additional value through fast primary and secondary frequency response services.", icon: Power },
  { title: "Critical Investment for Power Plants", desc: "Manage renewable generation imbalance, grid constraints, and ancillary service revenue.", icon: Building2 },
  { title: "Off-Grid Operation", desc: "Provide reliable and scalable power in no-grid locations, alone or together with solar PV.", icon: Globe2 },
];

const inspurStatsEn = [
  { value: "$31B+", label: "Annual Revenue (USD)" },
  { value: "Top 3", label: "Global Server Manufacturer" },
  { value: "120", label: "Countries with Active Operations" },
  { value: "31,000+", label: "Global Patent Portfolio" },
];

const inspurReasonsEn = [
  { title: "A Global IT Leader", desc: "Founded in 1945, Inspur is a major technology group listed on three stock exchanges and a global leader in AI servers.", icon: Globe2 },
  { title: "Strong R&D and Engineering", desc: "About 60% of Inspur's 36,000 employees work in R&D and engineering, bringing deep software capability into BESS.", icon: Cpu },
  { title: "Proven Field Experience", desc: "Close to 1 GWh of installation experience, including a 200 MW / 400 MWh single-site power plant project.", icon: BatteryCharging },
  { title: "Safety and Long Life", desc: "8,000+ cycle life, liquid cooling that extends product lifetime, integrated fire protection, and cell-level monitoring.", icon: ShieldCheck },
];

const investStepsEn = [
  { title: "Energy Arbitrage", desc: "Charge from low-cost tariffs and discharge during expensive hours to create measurable value." },
  { title: "Additional Revenue", desc: "Capture value from peak shaving, generator replacement, reactive power management, and frequency control." },
  { title: "Leasing and Incentive Models", desc: "Use incentive, leasing, credit, or ESCO models to reduce the initial investment burden." },
  { title: "Transparent Cost per Cycle", desc: "8,000+ cycle life and preventive maintenance reduce total cost of ownership compared with alternatives." },
];

function EnergyConnector({ color, label }: { color: "green" | "blue"; label?: string }) {
  const lineColor = color === "green" ? "bg-emerald-400/35" : "bg-sky-400/35";
  const pulseColor = color === "green" ? "bg-emerald-300" : "bg-sky-300";

  return (
    <div className="relative hidden min-w-6 flex-1 pt-5 lg:block">
      {label && (
        <span className="absolute inset-x-0 top-0 text-center text-[10px] font-bold uppercase tracking-widest text-white/45">
          {label}
        </span>
      )}
      <div className={`relative h-1 overflow-hidden rounded-full ${lineColor}`}>
        <motion.span
          animate={{ left: ["-12%", "105%"] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "linear" }}
          className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ${pulseColor} shadow-[0_0_18px_currentColor]`}
        />
        <motion.span
          animate={{ left: ["-32%", "105%"] }}
          transition={{ repeat: Infinity, duration: 1.7, delay: 0.55, ease: "linear" }}
          className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 ${
            color === "green" ? "border-emerald-200" : "border-sky-200"
          }`}
        />
      </div>
    </div>
  );
}

function EnergyNode({
  icon: Icon,
  title,
  subtitle,
  color,
  details = [],
  battery = false,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: "green" | "blue";
  details?: string[];
  battery?: boolean;
}) {
  const accent = color === "green" ? "text-emerald-300" : "text-sky-300";
  const glow =
    color === "green"
      ? "shadow-[0_0_35px_rgba(52,211,153,0.08)]"
      : "shadow-[0_0_35px_rgba(56,189,248,0.08)]";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`relative w-full rounded-2xl border border-white/10 bg-[#0d1c36] p-5 lg:w-40 lg:shrink-0 ${glow}`}
    >
      <motion.div
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${accent}`}
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
      <p className="text-xs leading-relaxed text-white/55">{subtitle}</p>
      {battery && (
        <div className="mt-4 grid grid-cols-5 gap-1 rounded-lg border border-white/10 bg-black/20 p-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <motion.span
              key={index}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: index * 0.08 }}
              className={`h-4 rounded-sm ${color === "green" ? "bg-emerald-400" : "bg-sky-400"}`}
            />
          ))}
        </div>
      )}
      {details.length > 0 && (
        <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
          {details.map((detail) => (
            <li key={detail} className="flex items-center gap-2 text-[10px] text-white/50">
              <span className={`h-1.5 w-1.5 rounded-full ${color === "green" ? "bg-emerald-300" : "bg-sky-300"}`} />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function SourceStack({ color, isEnglish }: { color: "green" | "blue"; isEnglish: boolean }) {
  const items =
    color === "green"
      ? isEnglish ? [
          { icon: Wind, label: "Wind" },
          { icon: Sun, label: "Solar" },
          { icon: Zap, label: "Grid" },
        ] : [
          { icon: Wind, label: "Rüzgâr" },
          { icon: Sun, label: "Güneş" },
          { icon: Zap, label: "Şebeke" },
        ]
      : isEnglish ? [
          { icon: Zap, label: "Grid" },
          { icon: Factory, label: "Factory" },
          { icon: Building2, label: "Commercial Building" },
        ] : [
          { icon: Zap, label: "Şebeke" },
          { icon: Factory, label: "Fabrika" },
          { icon: Building2, label: "Ticari Bina" },
        ];
  const accent = color === "green" ? "text-emerald-300" : "text-sky-300";

  return (
    <div className="flex w-full flex-col gap-2 lg:w-36 lg:shrink-0">
      {items.map(({ icon: Icon, label }, index) => (
        <motion.div
          key={label}
          animate={{ borderColor: ["rgba(255,255,255,.1)", "rgba(255,255,255,.3)", "rgba(255,255,255,.1)"] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.25 }}
          className="flex items-center gap-3 rounded-xl border bg-[#0d1c36] px-4 py-3 text-sm font-bold text-white"
        >
          <Icon className={`h-5 w-5 ${accent}`} /> {label}
        </motion.div>
      ))}
    </div>
  );
}

export default function BessPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageFlowSteps = isEnglish ? flowStepsEn : flowSteps;
  const pageBenefits = isEnglish ? benefitsEn : benefits;
  const pageInspurStats = isEnglish ? inspurStatsEn : inspurStats;
  const pageInspurReasons = isEnglish ? inspurReasonsEn : inspurReasons;
  const pageInvestSteps = isEnglish ? investStepsEn : investSteps;

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-sm mb-8 uppercase tracking-widest">
                  <BatteryCharging className="w-4 h-4" /> {isEnglish ? "Battery Energy Storage System" : "Batarya Enerji Depolama Sistemi"}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  Inspur <span className="text-[#ea580c]">BESS</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                  {isEnglish
                    ? "A key player in energy security. BESS stores electrical energy in batteries and delivers it back to the grid, facility, or critical loads when needed. It creates flexibility between solar PV, the grid, generators, and consumption infrastructure while managing cost, continuity, and power quality."
                    : "Enerji güvenliğinin ana oyuncusu. BESS; elektrik enerjisini bataryalarda depolayan ve ihtiyaç anında şebekeye, tesise veya kritik yüklere geri veren enerji depolama sistemidir. GES, şebeke, jeneratör ve tüketim altyapısı arasında esneklik sağlayarak maliyet, süreklilik ve güç kalitesini aynı anda yönetir."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#urunler"
                    className="inline-flex items-center gap-3 rounded-full bg-[#1e3a8a] px-8 py-4 font-bold text-white transition-colors hover:bg-[#152e73]"
                  >
                    {isEnglish ? "View Products" : "Ürünleri İncele"} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/markalar/inspur"
                    className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-8 py-4 font-bold text-[#1e3a8a] transition-colors hover:border-[#ea580c] hover:text-[#ea580c]"
                  >
                    {isEnglish ? "Meet the Brand" : "Markayı Tanı"} <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white"
              >
                <Image
                  src="/images/12121.png"
                  alt={isEnglish ? "Inspur container BESS" : "Inspur konteyner tipi BESS"}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır - animated visual system */}
        <section className="relative overflow-hidden bg-[#07152f] py-24 text-white">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <motion.div
            animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e3a8a]/40 blur-[120px]"
          />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-[#f97316]">
                {isEnglish ? "Energy Flow Map" : "Enerji Akış Haritası"}
              </span>
              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                {isEnglish ? "How Does BESS Work?" : "BESS Nasıl Çalışır?"}
              </h2>
              <p className="text-lg font-light leading-relaxed text-white/70">
                {isEnglish
                  ? "Energy is collected from the source, converted through power electronics, stored in the battery, and delivered back to the field at the right time by the intelligent control layer."
                  : "Enerji önce kaynaktan alınır, güç elektroniğiyle dönüştürülür, bataryada saklanır ve akıllı kontrol katmanı tarafından doğru anda sahaya geri verilir."}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#020916] p-5 shadow-2xl shadow-black/40 md:p-8"
            >
              <div className="absolute inset-0 grid-bg opacity-15" />
              <div className="relative space-y-5">
                <div className="rounded-[24px] border border-emerald-400/15 bg-emerald-400/[0.025] p-5 md:p-7">
                  <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-300">{isEnglish ? "CHARGE CYCLE" : "ŞARJ DÖNGÜSÜ"}</h3>
                      <p className="mt-1 text-sm text-white/50">
                        {isEnglish ? "Energy from the sources is stored in the battery according to EMS decisions." : "Kaynaklardan gelen enerji EMS kararıyla bataryaya depolanır."}
                      </p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className="flex items-center gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300"
                    >
                      {isEnglish ? "CHARGING" : "ŞARJ EDİLİYOR"}
                      <BatteryCharging className="h-5 w-5" />
                    </motion.div>
                  </div>
                  <div className="overflow-hidden pb-2">
                    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:flex lg:gap-2">
                      <SourceStack color="green" isEnglish={isEnglish} />
                      <EnergyConnector color="green" label="AC" />
                      <EnergyNode
                        icon={Cpu}
                        title="EMS"
                        subtitle={isEnglish ? "Energy Management System" : "Enerji Yönetim Sistemi"}
                        details={isEnglish ? ["Demand forecast", "Market data", "Weather forecast", "System status"] : ["Talep tahmini", "Piyasa verisi", "Hava tahmini", "Sistem durumu"]}
                        color="green"
                      />
                      <EnergyConnector color="green" label={isEnglish ? "EMS Decision" : "EMS Kararı"} />
                      <EnergyNode icon={Cable} title="PCS" subtitle={isEnglish ? "Power converter; converts AC energy into DC energy." : "Güç dönüştürücü; AC enerjiyi DC enerjiye çevirir."} details={isEnglish ? ["AC -> DC", "Power and frequency control"] : ["AC → DC", "Güç ve frekans kontrolü"]} color="green" />
                      <EnergyConnector color="green" label="DC" />
                      <EnergyNode icon={BatteryCharging} title={isEnglish ? "Battery System" : "Batarya Sistemi"} subtitle={isEnglish ? "Stores energy safely in LFP cells." : "Enerjiyi güvenli LFP hücrelerde depolar."} details={isEnglish ? ["Modular cell architecture", "Scalable capacity"] : ["Modüler hücre mimarisi", "Ölçeklenebilir kapasite"]} battery color="green" />
                      <EnergyConnector color="green" label={isEnglish ? "Monitoring" : "İzleme"} />
                      <EnergyNode icon={ShieldCheck} title="BMS" subtitle={isEnglish ? "Battery Management System" : "Batarya Yönetim Sistemi"} details={isEnglish ? ["Voltage and current monitoring", "Temperature control", "SOC / SOH", "Protection management"] : ["Voltaj ve akım izleme", "Sıcaklık kontrolü", "SOC / SOH", "Koruma yönetimi"]} color="green" />
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-sky-400/15 bg-sky-400/[0.025] p-5 md:p-7">
                  <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-sky-300">{isEnglish ? "DISCHARGE CYCLE" : "DEŞARJ DÖNGÜSÜ"}</h3>
                      <p className="mt-1 text-sm text-white/50">
                        {isEnglish ? "Stored energy is delivered to demand points under EMS control." : "Depolanan enerji EMS kontrolünde ihtiyaç noktalarına aktarılır."}
                      </p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className="flex items-center gap-3 rounded-xl border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-bold text-sky-300"
                    >
                      {isEnglish ? "DISCHARGING" : "DEŞARJ EDİLİYOR"}
                      <BatteryCharging className="h-5 w-5" />
                    </motion.div>
                  </div>
                  <div className="overflow-hidden pb-2">
                    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:flex lg:gap-2">
                      <EnergyNode icon={ShieldCheck} title="BMS" subtitle={isEnglish ? "Battery Management System" : "Batarya Yönetim Sistemi"} details={isEnglish ? ["Voltage and current monitoring", "Temperature control", "SOC / SOH", "Multi-layer protection"] : ["Voltaj ve akım izleme", "Sıcaklık kontrolü", "SOC / SOH", "Çok katmanlı koruma"]} color="blue" />
                      <EnergyConnector color="blue" label={isEnglish ? "Permission" : "İzin"} />
                      <EnergyNode icon={BatteryCharging} title={isEnglish ? "Battery System" : "Batarya Sistemi"} subtitle={isEnglish ? "Safely delivers stored DC energy back to the system." : "Depolanan DC enerjiyi güvenli biçimde sisteme verir."} details={isEnglish ? ["LFP cell technology", "Long cycle life"] : ["LFP hücre teknolojisi", "Uzun çevrim ömrü"]} battery color="blue" />
                      <EnergyConnector color="blue" label="DC" />
                      <EnergyNode icon={Cable} title="PCS" subtitle={isEnglish ? "Power converter; converts DC energy into AC energy." : "Güç dönüştürücü; DC enerjiyi AC enerjiye çevirir."} details={isEnglish ? ["DC -> AC", "Power quality management"] : ["DC → AC", "Güç kalitesi yönetimi"]} color="blue" />
                      <EnergyConnector color="blue" label={isEnglish ? "EMS Decision" : "EMS Kararı"} />
                      <EnergyNode icon={Cpu} title="EMS" subtitle={isEnglish ? "Routes energy to the right consumption point at the right time." : "Enerjiyi doğru zamanda doğru tüketim noktasına yönlendirir."} details={isEnglish ? ["Demand optimization", "Real-time system monitoring"] : ["Talep optimizasyonu", "Anlık sistem izleme"]} color="blue" />
                      <EnergyConnector color="blue" label="AC" />
                      <SourceStack color="blue" isEnglish={isEnglish} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                  {[
                    isEnglish ? ["Bidirectional Energy Flow", "Flexible charge / discharge"] : ["Çift Yönlü Enerji Akışı", "Esnek şarj / deşarj"],
                    isEnglish ? ["Maximum Efficiency", "High-efficiency PCS"] : ["Maksimum Verimlilik", "Yüksek verimli PCS"],
                    isEnglish ? ["Smart Control", "EMS and BMS integration"] : ["Akıllı Kontrol", "EMS ve BMS entegrasyonu"],
                    isEnglish ? ["Safety", "Multi-layer protection"] : ["Güvenlik", "Çok katmanlı koruma"],
                    isEnglish ? ["Scalability", "Modular battery architecture"] : ["Ölçeklenebilirlik", "Modüler batarya mimarisi"],
                  ].map(([title, desc]) => (
                      <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center">
                        <p className="text-xs font-bold text-white/75">{title}</p>
                        <p className="mt-1 text-[10px] text-white/35">{desc}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

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
                <motion.circle
                  animate={{ opacity: [0.35, 1, 0.35], r: [6, 10, 6] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  cx="240"
                  cy="150"
                  fill="#f97316"
                />
                <motion.circle
                  animate={{ opacity: [0.35, 1, 0.35], r: [6, 10, 6] }}
                  transition={{ repeat: Infinity, duration: 1.8, delay: 0.9, ease: "easeInOut" }}
                  cx="1035"
                  cy="150"
                  fill="#f97316"
                />
                {[
                  { cx: 360, cy: 430, delay: 0.25 },
                  { cx: 560, cy: 150, delay: 0.5 },
                  { cx: 800, cy: 430, delay: 0.75 },
                ].map((point) => (
                  <motion.circle
                    key={`${point.cx}-${point.cy}`}
                    animate={{ opacity: [0.25, 0.9, 0.25], r: [5, 8, 5] }}
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
                {pageFlowSteps.map((step, index) => (
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
                    {index < pageFlowSteps.length - 1 && (
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
                    {index < pageFlowSteps.length - 1 && (
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
                {isEnglish ? "Benefits of BESS" : "BESS ile Elde Edilen Faydalar"}
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Inspur - premium dark section */}
        <section className="py-28 bg-[#0b1f4e] text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
                {isEnglish ? "Our Global Technology Partner" : "Global Teknoloji Ortağımız"}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">{isEnglish ? "Why Inspur?" : "Neden Inspur?"}</h2>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                {isEnglish
                  ? "A global authority in IT infrastructure, cloud solutions, and AI servers, Inspur brings this engineering experience into energy storage systems."
                  : "Bilişim altyapısı, bulut çözümleri ve yapay zeka sunucularında küresel bir otorite olan Inspur, bu birikimini enerji depolama sistemlerine taşıyor."}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pageInspurStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[28px] bg-white/5 border border-white/10 p-8 text-center backdrop-blur"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#f97316] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageInspurReasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[30px] bg-white/5 border border-white/10 p-8"
                >
                  <reason.icon className="w-9 h-9 text-[#f97316] mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-white/65 font-light leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/markalar/inspur"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-[#0b1f4e]"
              >
                {isEnglish ? "Meet the Inspur Brand" : "Inspur Markasını Tanıyın"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Yatırım değil kazanç */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {isEnglish ? "Not Just a Cost: Continuous Value and Energy Security" : "Maliyet Değil; Sürekli Kazanç ve Enerji Güvenliği"}
              </h2>
              <p className="text-gray-500 text-lg font-light">
                {isEnglish
                  ? "Where project conditions are suitable, payback under 5 years and an internal rate of return above 40% may be possible."
                  : "Şartların uygun olduğu noktalarda 5 yılın altında geri dönüş süresi ve %40'ın üzerinde iç verim oranı (IRR) mümkün."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageInvestSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-[#f8fafc] rounded-[28px] p-7 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ea580c] text-white flex items-center justify-center font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{step.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ürünler */}
        <section id="urunler" className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                {isEnglish ? "Inspur BESS Product Portfolio" : "Inspur BESS Ürün Portföyü"}
              </h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bessProducts.map((product) => {
                const displayProduct = isEnglish && bessProductCopyEn[product.slug]
                  ? { ...product, ...bessProductCopyEn[product.slug] }
                  : product;
                return (
                <Link
                  key={product.slug}
                  id={`urun-${product.slug}`}
                  href={`/bess/${product.slug}`}
                  className="group scroll-mt-28 bg-white rounded-[36px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-7 bg-gray-50">
                    <Image
                      src={productCardImages[product.slug] ?? product.image}
                      alt={displayProduct.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">
                    {displayProduct.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-3 mb-4">
                    {displayProduct.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-5">
                    {displayProduct.summary}
                  </p>
                  {product.options && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.options.map((option) => (
                        <span
                          key={option}
                          className="text-xs font-bold text-[#1e3a8a] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-2 font-bold text-[#1e3a8a] group-hover:text-[#ea580c]">
                    {isEnglish ? "View Details" : "Detayları İncele"} <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6 text-center">
            <Building2 className="w-12 h-12 text-[#f97316] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {isEnglish ? "BESS Configuration for Your Project" : "Projeniz İçin BESS Konfigürasyonu"}
            </h2>
            <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light">
              {isEnglish
                ? "Let us define the right capacity, power, cooling, safety, and control architecture for your application."
                : "Uygulama alanınıza göre kapasite, güç, soğutma, güvenlik ve kontrol mimarisini birlikte netleştirelim."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
            >
              {isEnglish ? "Get a Quote" : "Teklif Al"} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
