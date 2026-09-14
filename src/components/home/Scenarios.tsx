"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Layers, Package } from "lucide-react";
import Link from "next/link";
import { getLocalizedSolutions } from "@/lib/solutions-data";
import { useLanguage } from "@/lib/i18n";

export default function Scenarios() {
  const { lang, t } = useLanguage();
  const pageSolutions = getLocalizedSolutions(lang);
  const [activeSlug, setActiveSlug] = useState(pageSolutions[0].slug);
  const active = pageSolutions.find((s) => s.slug === activeSlug) ?? pageSolutions[0];
  const primaryBessProduct = active.products.find((product) =>
    product.href.startsWith("/bess/"),
  );
  const primaryBessSlug = primaryBessProduct?.href.split("/").pop();
  const productsHref = primaryBessSlug
    ? `/bess#urun-${primaryBessSlug}`
    : "/bess#urunler";

  return (
    <section className="relative w-full overflow-hidden bg-[#1e3a8a] md:h-[820px]">
      {/* Section Title */}
      <div className="absolute top-12 left-0 w-full z-20 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#f97316] mb-3 block">
          Newstag Enerji
        </span>
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
          {t.nav.solutions}
        </h2>
      </div>

      {/* Background Image with Reveal Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-col px-6 pb-8 pt-36 md:h-full md:justify-center md:py-0">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${active.slug}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/cozumlerimiz/${active.slug}`} className="group">
                <h3 className="text-4xl md:text-7xl font-medium text-white mb-8 flex items-center gap-6 group-hover:text-[#f97316] transition-colors">
                  {active.title}
                  <ChevronRight className="w-12 h-12 md:w-16 md:h-16 text-white/30 group-hover:text-[#f97316] transition-all" />
                </h3>
              </Link>

              <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed mb-12 max-w-xl">
                {active.shortDesc}
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href={productsHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-[#1e3a8a] transition-colors hover:bg-[#ea580c] hover:text-white"
                >
                  <Package className="w-5 h-5" />
                  {t.common.products}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/cozumlerimiz/${active.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#1e3a8a]"
                >
                  <Layers className="w-5 h-5" />
                  {t.common.solutions}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="relative z-20 w-full px-6 pb-8 md:absolute md:bottom-12 md:left-0 md:pb-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-1 rounded-[32px] border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-2xl md:grid-cols-4 xl:grid-cols-7">
            {pageSolutions.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                onMouseEnter={() => setActiveSlug(s.slug)}
                className={`rounded-[24px] px-3 py-4 text-xs font-medium transition-all duration-500 md:text-sm ${
                  activeSlug === s.slug
                    ? "scale-100 bg-white text-[#1e3a8a] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]"
                    : "scale-95 text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                {s.navTitle}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
