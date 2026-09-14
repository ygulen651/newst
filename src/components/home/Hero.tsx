"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const container = useRef(null);
  const { lang, t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={container} className="relative h-[120vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative mx-auto h-full w-full overflow-hidden"
        >
          <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
            <video
              src="/images/1500.mp4"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
          </motion.div>

          {/* Saray Holding badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-24 right-6 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 shadow-2xl backdrop-blur-md md:top-28 md:right-12"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#ea580c]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90 md:text-sm">
              {t.hero.badge}
            </span>
          </motion.div>

          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-end px-6 pb-28 text-center md:pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-medium uppercase tracking-tight text-white drop-shadow-lg md:text-8xl"
            >
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-3xl text-base font-light leading-relaxed text-white/85 drop-shadow md:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/bess"
                className="inline-flex items-center gap-3 rounded-full bg-[#1e3a8a] px-8 py-4 font-bold text-white shadow-2xl transition-colors hover:bg-[#172554]"
              >
                Inspur BESS
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/isi-pompasi"
                className="inline-flex items-center gap-3 rounded-full bg-[#ea580c] px-8 py-4 font-bold text-white shadow-2xl transition-colors hover:bg-[#c2410c]"
              >
                {lang === "en" ? "Thermaplus Heat Pump" : "Thermaplus Isı Pompası"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
