"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { usePageContent } from "@/lib/content/context";
import { Highlight, Lines, paragraphs } from "@/lib/content/format";
import { getIcon } from "@/lib/icons";

export default function AboutPage() {
  const { t } = useLanguage();
  const c = usePageContent("about");
  const pageValues = c.list("values");
  const pageMilestones = c.list("milestones");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="bg-white">
        {/* Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1e3a8a]">
          <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0 opacity-40">
            <Image
              src={c.text("heroImage")}
              alt={c.text("whoEyebrow")}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#ea580c]/20 mix-blend-multiply" />
          </motion.div>

          <div className="relative z-10 text-center space-y-8 max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
                {t.hero.badge}
              </span>
              <h1 className="text-6xl md:text-9xl font-medium text-white tracking-tighter leading-none">
                {c.text("heroTitleLine1")} <br />
                <span className="text-gray-300">
                  {c.text("heroTitleLine2")}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-12"
            >
              <div className="flex flex-col items-center gap-4 text-white/30">
                <span className="text-[10px] uppercase tracking-widest">
                  {c.text("scrollHint")}
                </span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Kimiz */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                  {c.text("whoEyebrow")}
                </span>
                <h2 className="text-4xl md:text-6xl font-medium text-[#1e3a8a] tracking-tighter leading-tight mb-8">
                  {c.text("whoTitleLine1")} <br />
                  <span className="text-[#ea580c]">
                    {c.text("whoTitleLine2")}
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  {paragraphs(c.text("whoText")).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src={c.text("whoImage")}
                  alt={c.text("whoTitleLine2")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/50 to-transparent" />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {pageMilestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#f8fafc] rounded-[28px] p-8 border border-gray-100 text-center"
                >
                  {React.createElement(getIcon(item.icon), { className: "w-8 h-8 text-[#ea580c] mx-auto mb-5" })}
                  <div className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-2">
                    {item.value}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Saray Holding */}
        <section className="py-32 bg-[#0b1f4e] text-white relative overflow-hidden">
          <Image
            src={c.text("holdingImage")}
            alt="Saray Holding"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4e]/90 via-[#0b1f4e]/60 to-[#0b1f4e]/10" />
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl md:text-7xl font-medium mb-8 tracking-tighter leading-none">
                  <Highlight text={c.text("holdingTitle")} className="text-[#f97316]" />
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                    {c.text("holdingText1")}
                  </p>
                  <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                    <Highlight text={c.text("holdingText2")} className="font-medium text-white" />
                  </p>
                </div>
                <a
                  href={c.text("holdingUrl")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-[#0b1f4e]"
                >
                  {c.text("holdingButton")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Değerler */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
                <h2 className="text-5xl md:text-7xl font-medium text-[#1e3a8a] tracking-tighter leading-none">
                  <Lines text={c.text("valuesTitle")} highlightClassName="text-[#f97316]" />
                </h2>
                <div className="mt-8 w-12 h-1 bg-[#ea580c]" />
              </div>

              <div className="w-full lg:w-2/3 space-y-12 lg:space-y-16">
                {pageValues.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row gap-6 md:gap-12 group"
                  >
                    <span className="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-[#ea580c]/10 transition-colors duration-700">
                      0{i + 1}
                    </span>
                    <div className="pt-4">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#1e3a8a] flex items-center gap-4">
                        {v.title}
                        {React.createElement(getIcon(v.icon), { className: "w-6 h-6 text-[#ea580c] md:opacity-0 md:group-hover:opacity-100 transition-all md:-translate-x-4 md:group-hover:translate-x-0" })}
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vizyon & Misyon - kompakt */}
        <section className="py-24 bg-[#1e3a8a]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[36px] bg-white/5 border border-white/10 p-10 md:p-12"
              >
                <Eye className="w-10 h-10 text-[#f97316] mb-8" />
                <h3 className="text-xl font-bold text-[#f97316] mb-6 uppercase tracking-[0.3em]">
                  {c.text("visionTitle")}
                </h3>
                <p className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug">
                  <Highlight text={c.text("visionText")} className="text-white/60" />
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-[36px] bg-white/5 border border-white/10 p-10 md:p-12"
              >
                <Target className="w-10 h-10 text-[#f97316] mb-8" />
                <h3 className="text-xl font-bold text-[#f97316] mb-6 uppercase tracking-[0.3em]">
                  {c.text("missionTitle")}
                </h3>
                <p className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug">
                  <Highlight text={c.text("missionText")} className="text-white/60" />
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-medium text-[#1e3a8a] mb-8">
              {c.text("ctaTitle")}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light mb-10">
              {c.text("ctaText")}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-[#ea580c] text-white px-10 py-5 rounded-full font-bold hover:bg-[#c2410c] transition-colors"
            >
              {c.text("ctaButton")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
