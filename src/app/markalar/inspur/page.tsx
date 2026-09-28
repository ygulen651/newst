"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Globe2 } from "lucide-react";
import { usePageContent } from "@/lib/content/context";
import { Highlight } from "@/lib/content/format";
import { getIcon } from "@/lib/icons";

export default function InspurBrandPage() {
  const c = usePageContent("inspur");
  const stats = c.list("stats");
  const strengths = c.list("strengths");
  const timeline = c.list("timeline");
  const sectors = c.list("sectors");

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white overflow-hidden">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-[#0b1f4e] text-white overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-16 w-56 mb-10 bg-white rounded-2xl p-3">
                  <Image
                    src={c.text("logo")}
                    alt="Inspur"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <Highlight text={c.text("title")} className="text-[#f97316]" />
                </h1>
                <p className="text-xl text-white/75 leading-relaxed mb-10 max-w-xl font-light">
                  {c.text("intro")}
                </p>
                <Link
                  href={c.text("heroButtonLink")}
                  className="inline-flex items-center gap-3 bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c2410c] transition-colors"
                >
                  <BatteryCharging className="w-5 h-5" />
                  {c.text("heroButton")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden bg-white/5 border border-white/10"
              >
                <Image
                  src={c.text("heroImage")}
                  alt="Inspur BESS"
                  fill
                  className="object-contain p-10"
                  priority
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[28px] bg-white/5 border border-white/10 p-7 text-center backdrop-blur"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#f97316] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden farklı */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {c.text("strengthsTitle")}
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-[#f8fafc] rounded-[30px] p-8 border border-gray-100"
                >
                  {item.image && (
                    <div className="relative mb-7 aspect-video overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {React.createElement(getIcon(item.icon), { className: "w-9 h-9 text-[#ea580c] mb-6" })}
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarihçe */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {c.text("timelineTitle")}
              </h2>
              <p className="text-gray-500 text-lg font-light">
                {c.text("timelineText")}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-8 pb-10 last:pb-0 relative"
                >
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[3.4rem] top-14 bottom-0 w-px bg-gray-200" />
                  )}
                  <div className="w-28 shrink-0 text-right">
                    <span className="inline-block rounded-full bg-[#1e3a8a] text-white text-sm font-bold px-4 py-2">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-600 font-light text-lg pt-1.5">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ana sektörler */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {c.text("sectorsTitle")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-[#f8fafc] rounded-[28px] p-7 border border-gray-100"
                >
                  {React.createElement(getIcon(sector.icon), { className: "w-8 h-8 text-[#ea580c] mb-5" })}
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{sector.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{sector.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rizhao referans */}
        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Globe2 className="w-12 h-12 text-[#f97316] mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {c.text("referenceTitle")}
                </h2>
                <p className="text-white/75 text-lg font-light leading-relaxed mb-8">
                  {c.text("referenceText")}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
                  <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#f97316]">{c.text("referenceStat1Value")}</div>
                    <div className="text-white/60 text-sm mt-1">{c.text("referenceStat1Label")}</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#f97316]">{c.text("referenceStat2Value")}</div>
                    <div className="text-white/60 text-sm mt-1">{c.text("referenceStat2Label")}</div>
                  </div>
                </div>
                <Link
                  href={c.text("referenceButtonLink")}
                  className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
                >
                  {c.text("referenceButton")} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src={c.text("referenceImage")}
                  alt={c.text("referenceTitle")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
