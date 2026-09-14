"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function WhyUs() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <section className="py-32 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-[#ea580c] text-3xl md:text-5xl font-medium mb-12">
            {isEnglish ? "Why Newstag Energy?" : "Neden Newstag Enerji?"}
          </h2>

          <div className="w-px h-24 bg-[#f97316] mx-auto mb-14 opacity-30" />

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-light mb-10">
            {isEnglish
              ? "Newstag Energy delivers high standards in technology, production, and service with the strength of trusted global partners. We integrate BESS and heat pump technologies with renewable energy sources to reduce energy costs, strengthen supply security, and lower your carbon footprint."
              : "Küresel iş ortaklarımızın güvenini arkasına alan Newstag Enerji; teknoloji, üretim ve servis süreçlerinde en yüksek standartları sunar. BESS ve ısı pompası teknolojilerini yenilenebilir enerji kaynaklarıyla entegre ederek enerji maliyetlerinizi düşürür, arz güvenliğinizi artırır ve karbon ayak izinizi ölçülebilir şekilde azaltırız."}
          </p>

          <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-14">
            {isEnglish
              ? "From assessment and project design to installation, commissioning, and after-sales support through our nationwide service network, we manage the full process under one roof."
              : "Keşiften projelendirmeye, kurulumdan devreye almaya ve Türkiye genelindeki servis ağımızla kurulum sonrası desteğe kadar tüm süreci tek çatı altında yönetiyoruz. Gelin, sürdürülebilir bir gelecek için enerji dönüşümünüzü bugünden başlatalım."}
          </p>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-3 rounded-full bg-[#1e3a8a] px-10 py-4 font-bold text-white transition-colors hover:bg-[#152e73]"
          >
            {isEnglish ? "Let's Discuss Your Project" : "Projenizi Konuşalım"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
