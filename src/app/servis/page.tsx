"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const serviceSteps = [
  {
    icon: Phone,
    title: "Talep Alımı",
    desc: "Servis, bakım veya keşif ihtiyacınız genel merkez üzerinden kayıt altına alınır.",
  },
  {
    icon: Wrench,
    title: "Teknik Değerlendirme",
    desc: "Ürün, saha koşulları ve öncelik seviyesine göre doğru ekip ve aksiyon planı belirlenir.",
  },
  {
    icon: Truck,
    title: "Saha Organizasyonu",
    desc: "Türkiye genelindeki hizmet ağımızla kurulum, devreye alma ve servis süreçleri planlanır.",
  },
  {
    icon: ShieldCheck,
    title: "Süreklilik",
    desc: "Periyodik bakım, kontrol ve uzaktan takip süreçleriyle sistem performansı korunur.",
  },
];

const serviceScope = [
  "BESS kurulum ve devreye alma desteği",
  "Isı pompası keşif, montaj ve servis yönlendirmesi",
  "Periyodik bakım ve performans kontrolü",
  "Arıza kaydı ve teknik destek koordinasyonu",
  "Yedek parça ve garanti süreç takibi",
  "Proje sonrası işletme desteği",
];

const coverageStats = [
  { value: "81", label: "İlde servis koordinasyonu" },
  { value: "7/24", label: "Kritik arıza kaydı takibi" },
  { value: "Tek Merkez", label: "Uçtan uca servis koordinasyonu" },
  { value: "6 Aşama", label: "Keşiften işletme desteğine" },
];

const serviceStepsEn = [
  {
    icon: Phone,
    title: "Request Intake",
    desc: "Your service, maintenance, or site assessment request is registered through our head office.",
  },
  {
    icon: Wrench,
    title: "Technical Review",
    desc: "The right team and action plan are defined according to the product, site conditions, and priority level.",
  },
  {
    icon: Truck,
    title: "Field Organization",
    desc: "Installation, commissioning, and service operations are planned through our nationwide service network.",
  },
  {
    icon: ShieldCheck,
    title: "Continuity",
    desc: "System performance is protected through periodic maintenance, checks, and remote monitoring processes.",
  },
];

const serviceScopeEn = [
  "BESS installation and commissioning support",
  "Heat pump site assessment, installation, and service coordination",
  "Periodic maintenance and performance checks",
  "Fault registration and technical support coordination",
  "Spare parts and warranty process tracking",
  "Post-project operational support",
];

const coverageStatsEn = [
  { value: "81", label: "Citywide service coordination" },
  { value: "7/24", label: "Critical fault request tracking" },
  { value: "Single Center", label: "End-to-end service coordination" },
  { value: "6 Steps", label: "From assessment to operational support" },
];

export default function ServicePage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageServiceSteps = isEnglish ? serviceStepsEn : serviceSteps;
  const pageServiceScope = isEnglish ? serviceScopeEn : serviceScope;
  const pageCoverageStats = isEnglish ? coverageStatsEn : coverageStats;

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-32">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  {isEnglish ? "Service and Sales Network" : "Servis ve Satış Ağı"}
                </span>
                <h1 className="text-5xl md:text-7xl font-medium text-[#1e3a8a] tracking-tight mb-8 leading-tight">
                  {isEnglish ? "Always in the Field" : "Enerjiniz İçin"} <br />
                  <span className="text-[#ea580c]">{isEnglish ? "For Your Energy" : "Her Zaman Sahadayız"}</span>
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mb-8">
                  {isEnglish
                    ? "With our nationwide service and support network, we manage installation, commissioning, periodic maintenance, fault response, and technical guidance from a single head-office coordination point."
                    : "Türkiye genelinde hizmet veren servis ve destek ağımızla; kurulum, devreye alma, periyodik bakım, arıza müdahalesi ve teknik yönlendirme süreçlerini genel merkez koordinasyonunda, tek noktadan yönetiyoruz."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+902163110067"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-7 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    0 216 311 00 67
                  </a>
                  <a
                    href="mailto:info@newstag.com.tr"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-7 py-4 rounded-full font-bold border border-blue-100 hover:text-[#ea580c] hover:border-[#ea580c] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@newstag.com.tr
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/service-technician.png"
                  alt={isEnglish ? "Newstag technical service team in the field" : "Newstag teknik servis ekibi sahada"}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/50 to-transparent" />
                <div className="absolute left-6 bottom-6 right-6 rounded-3xl bg-white/90 backdrop-blur p-6">
                  <div className="flex items-center gap-3 text-[#1e3a8a] font-bold">
                    <Clock3 className="w-6 h-6 text-[#ea580c]" />
                    {isEnglish ? "Sustainable operational support after installation" : "Kurulum sonrası sürdürülebilir operasyon desteği"}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Türkiye geneli - premium band */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="relative rounded-[40px] bg-[#0b1f4e] p-10 md:p-16 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#ea580c]/20 blur-[100px] pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
                    {isEnglish ? "Service Scope" : "Hizmet Kapsamı"}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    {isEnglish ? "Service and support across Turkiye" : "Tüm Türkiye'de servis ve destek"}
                  </h2>
                  <p className="text-white/70 font-light text-lg leading-relaxed">
                    {isEnglish
                      ? "Instead of a limited regional list, we work with an organization that can coordinate service across all 81 cities. Wherever your project is located, assessment, installation, maintenance, and fault processes for BESS and heat pump systems are managed from one center."
                      : "Bölgesel liste yerine 81 ilin tamamında hizmet veren bir organizasyonla çalışıyoruz. Nerede olursanız olun; BESS ve ısı pompası sistemleriniz için keşif, kurulum, bakım ve arıza süreçleriniz tek merkezden koordine edilir."}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {pageCoverageStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-3xl bg-white/10 p-7 border border-white/10 text-white"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-[#f97316] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servis süreci */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-6">
                {isEnglish ? "Service Process" : "Servis Süreci"}
              </h2>
              <p className="text-gray-500 text-lg font-light">
                {isEnglish
                  ? "The full process is tracked from request intake to field organization through a single coordination center."
                  : "Talebin alınmasından saha organizasyonuna kadar süreç tek merkezden takip edilir."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageServiceSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-white rounded-[30px] p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <step.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{step.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Genel merkez + kapsam */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div>
                <span className="text-[#ea580c] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  {isEnglish ? "Head Office" : "Genel Merkez"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-6">
                  {isEnglish ? "All requests are coordinated from one center" : "Tüm talepler tek merkezden koordine edilir"}
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  {isEnglish
                    ? "You can contact us through our head office channels for project, maintenance, service, and warranty processes."
                    : "Proje, bakım, servis ve garanti süreçleriniz için genel merkez iletişim kanallarımız üzerinden bize ulaşabilirsiniz."}
                </p>
              </div>

              <div className="bg-[#f8fafc] rounded-[36px] p-8 md:p-10 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#ea580c] mt-1" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        {isEnglish ? "Location" : "Lokasyon"}
                      </div>
                      <a
                        href="https://www.google.com/maps/place/data=!4m2!3m1!1s0x14cad3c555555555:0xc12bb9adc218764f?sa=X&ved=1t:8290&ictx=111"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-[#1e3a8a] transition-colors hover:text-[#ea580c]"
                      >
                        {isEnglish
                          ? "Yildizhan Avenue, Saray Business Center No. 4, Kose Street, 34887 Sancaktepe/Istanbul"
                          : "Yıldızhan Cad. Saray İş Merkezi No:4, Köşe Sk., 34887 Sancaktepe/İstanbul"}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#ea580c] mt-1" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        {isEnglish ? "Phone" : "Telefon"}
                      </div>
                      <a href="tel:+902163110067" className="font-bold text-[#1e3a8a] transition-colors hover:text-[#ea580c]">
                        0 216 311 00 67
                      </a>
                      <p className="text-gray-500 font-light mt-1">
                        {isEnglish ? "Service and support coordination" : "Servis ve destek koordinasyonu"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#ea580c] mt-1" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        {isEnglish ? "Email" : "E-Posta"}
                      </div>
                      <p className="text-[#1e3a8a] font-bold">info@newstag.com.tr</p>
                      <p className="text-gray-500 font-light mt-1">
                        {isEnglish ? "Quotes, service, and technical support" : "Teklif, servis ve teknik destek"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-[#ea580c] mt-1" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        {isEnglish ? "Scope" : "Kapsam"}
                      </div>
                      <p className="text-[#1e3a8a] font-bold">{isEnglish ? "BESS and Heat Pump" : "BESS ve Isı Pompası"}</p>
                      <p className="text-gray-500 font-light mt-1">{isEnglish ? "After-installation support" : "Kurulum sonrası destek"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {pageServiceScope.map((item) => (
                <div
                  key={item}
                  className="bg-[#f8fafc] border border-gray-100 rounded-2xl px-5 py-4 text-gray-600 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 bg-[#ea580c] text-white px-10 py-5 rounded-full font-bold hover:bg-[#c2410c] transition-colors"
              >
                {isEnglish ? "Create a Service Request" : "Servis Talebi Oluştur"} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
