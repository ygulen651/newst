"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, BatteryCharging, Factory, Globe2, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const stats = [
  {
    value: "65",
    unit: "YIL",
    label: "Saray Holding Kurumsal Mirası",
    icon: Award,
  },
  {
    value: "15",
    unit: "YIL",
    label: "Enerji Sektöründe Üretim Deneyimi",
    icon: Factory,
  },
  {
    value: "1",
    unit: "GWh",
    label: "Yaklaşan Inspur BESS Kurulum Deneyimi",
    icon: BatteryCharging,
  },
  {
    value: "400",
    unit: "MWh",
    label: "Tek Projede Kurulum",
    icon: Zap,
  },
  {
    value: "120",
    unit: "+",
    label: "Ülkede Aktif Global Teknoloji Ortağı",
    icon: Globe2,
  },
];

const statsEn = [
  { value: "65", unit: "YEARS", label: "Saray Holding Corporate Heritage", icon: Award },
  { value: "15", unit: "YEARS", label: "Production Experience in Energy", icon: Factory },
  { value: "1", unit: "GWh", label: "Inspur BESS Installation Experience", icon: BatteryCharging },
  { value: "400", unit: "MWh", label: "Single Project Installation", icon: Zap },
  { value: "120", unit: "+", label: "Countries with Active Global Partner Operations", icon: Globe2 },
];

export default function Trust() {
  const ref = useRef(null);
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const pageStats = isEnglish ? statsEn : stats;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-40 md:py-48 bg-white overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-0 right-0 w-1/3 h-full -z-10 opacity-10 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full bg-[#ea580c] rounded-full translate-x-1/2" />
      </motion.div>
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-0 left-0 w-1/2 h-full -z-10 opacity-10 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full bg-[#f97316] rounded-full -translate-x-1/2" />
      </motion.div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm mb-12">
            <span className="h-2 w-2 rounded-full bg-[#ea580c]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#1e3a8a]">
              {isEnglish ? "A Saray Holding Brand" : "Bir Saray Holding Markası"}
            </span>
          </span>

          <Image
            src="/images/image5.png"
            alt="Newstag Energy Solutions"
            width={1155}
            height={255}
            className="mx-auto mb-12 h-auto w-full max-w-md"
          />

          <h2 className="text-[#ea580c] text-3xl md:text-5xl font-medium mb-12">
            {isEnglish ? "Your Partner in Energy Transformation" : "Enerji Dönüşümünüzün Çözüm Ortağı"}
          </h2>

          <div className="w-px h-24 bg-[#f97316] mx-auto mb-14 opacity-30" />

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-24 max-w-4xl mx-auto font-light">
            {isEnglish
              ? "Newstag combines Saray Holding's 65-year corporate heritage, 15 years of production experience in the energy sector, and global technology partnerships to become your solution partner in energy transformation."
              : "Saray Holding'in 65 yıllık kurumsal mirasını ve gücünü, enerji sektöründeki 15 yıllık üretim deneyimini ve global ortaklıklarını bir araya getiren Newstag, enerji dönüşümünüzün çözüm ortağı olmak için sizleri bekliyor."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
            {pageStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-lg font-medium text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 leading-tight max-w-[150px] uppercase font-medium tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/hakkimizda"
              className="inline-block px-12 py-4 border border-[#ea580c] text-[#ea580c] rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              {isEnglish ? "Discover Who We Are" : "Kim Olduğumuzu Keşfedin"}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
