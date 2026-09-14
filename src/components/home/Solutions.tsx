"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Factory, Zap, Database, Hotel, Home, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const solutions = [
  {
    title: "Fabrikalar",
    description: "Yüksek tüketimli endüstriyel tesisler için akıllı enerji optimizasyonu ve verimlilik.",
    icon: Factory,
    href: "/cozumlerimiz/fabrikalar",
    color: "from-orange-500/20",
  },
  {
    title: "Veri Merkezleri",
    description: "Kesintisiz operasyonlar için %99.99 çalışma süresi ve kritik güç güvenliği.",
    icon: Database,
    href: "/cozumlerimiz/veri-merkezleri",
    color: "from-blue-500/20",
  },
  {
    title: "Enerji Santralleri",
    description: "Yenilenebilir enerji sistemleri için şebeke stabilizasyonu ve depolama.",
    icon: Zap,
    href: "/cozumlerimiz/santraller",
    color: "from-yellow-500/20",
  },
  {
    title: "Konutlar",
    description: "Evler için yeni nesil akıllı enerji depolama ve yönetim teknolojileri.",
    icon: Home,
    href: "/cozumlerimiz/evler",
    color: "from-green-500/20",
  },
  {
    title: "Ticari Binalar",
    description: "İş merkezleri ve ofisler için operasyonel maliyet düşürücü çözümler.",
    icon: Building2,
    href: "/cozumlerimiz/ticari-binalar",
    color: "from-purple-500/20",
  },
  {
    title: "Oteller",
    description: "Üstün konfor standartlarından ödün vermeden maksimum enerji tasarrufu.",
    icon: Hotel,
    href: "/cozumlerimiz/oteller",
    color: "from-cyan-500/20",
  },
];

const solutionsEn = [
  {
    title: "Factories",
    description: "Smart energy optimization and efficiency for high-consumption industrial facilities.",
    icon: Factory,
    href: "/cozumlerimiz/fabrikalar",
    color: "from-orange-500/20",
  },
  {
    title: "Data Centers",
    description: "Critical power security and reliable uptime for uninterrupted operations.",
    icon: Database,
    href: "/cozumlerimiz/veri-merkezleri",
    color: "from-blue-500/20",
  },
  {
    title: "Power Plants",
    description: "Grid stabilization and storage for renewable energy systems.",
    icon: Zap,
    href: "/cozumlerimiz/santraller",
    color: "from-yellow-500/20",
  },
  {
    title: "Residential",
    description: "Next-generation smart energy storage and management technologies for homes.",
    icon: Home,
    href: "/cozumlerimiz/evler",
    color: "from-green-500/20",
  },
  {
    title: "Commercial Buildings",
    description: "Solutions that reduce operating costs for offices and business centers.",
    icon: Building2,
    href: "/cozumlerimiz/ticari-binalar",
    color: "from-purple-500/20",
  },
  {
    title: "Hotels",
    description: "Maximum energy savings without compromising comfort standards.",
    icon: Hotel,
    href: "/cozumlerimiz/oteller",
    color: "from-cyan-500/20",
  },
];

function SolutionCard({ solution, index, isEnglish }: { solution: typeof solutions[0]; index: number; isEnglish: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[40px] border border-gray-100 bg-white p-10 transition-shadow hover:shadow-2xl hover:shadow-gray-200/50"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 106, 0, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-50 transition-colors group-hover:bg-[#ff6a00] group-hover:text-white">
          <solution.icon className="h-10 w-10 text-[#ff6a00] transition-colors group-hover:text-white" />
        </div>
        
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-[#1e3a8a]">
          {solution.title}
        </h3>
        
        <p className="mb-10 text-lg leading-relaxed text-gray-500 font-light">
          {solution.description}
        </p>
        
        <Link
          href={solution.href}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6a00]"
        >
          {isEnglish ? "Details" : "Detaylı Bilgi"}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 transition-all group-hover:translate-x-2 group-hover:bg-[#ff6a00] group-hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageSolutions = isEnglish ? solutionsEn : solutions;

  return (
    <section className="relative overflow-hidden py-32 bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-30">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-50/50 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff6a00] mb-4 block"
            >
              {isEnglish ? "Application Areas" : "Uygulama Alanları"}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-medium tracking-tighter text-[#1e3a8a]"
            >
              {isEnglish ? "Solutions for" : "Her İhtiyaca"} <br />
              <span className="text-gray-300">{isEnglish ? "Every Need" : "Özel Çözümler"}</span>
            </motion.h2>
          </div>
          <Link href="/cozumlerimiz" className="hidden md:flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#ff6a00] transition-colors">
            {isEnglish ? "View All Solutions" : "Tüm Çözümleri Gör"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageSolutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} isEnglish={isEnglish} />
          ))}
        </div>
      </div>
    </section>
  );
}
