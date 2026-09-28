"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ThermometerSun } from "lucide-react";
import { usePageContent } from "@/lib/content/context";
import { Highlight } from "@/lib/content/format";
import { getIcon } from "@/lib/icons";

export default function ThermaplusBrandPage() {
  const c = usePageContent("thermaplus");
  const pageStats = c.list("stats");
  const pageStrengths = c.list("strengths");
  const pageProductGroups = c.list("productGroups").map((group) => ({
    icon: group.icon,
    title: group.title,
    lines: group.items.split("\n").map((line) => line.trim()).filter(Boolean),
  }));

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
                <div className="relative h-20 w-72 mb-10">
                  <Image
                    src={c.text("logo")}
                    alt="Thermaplus"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  <Highlight text={c.text("title")} className="text-[#ea580c]" />
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                  {c.text("intro")}
                </p>
                <Link
                  href="/isi-pompasi#urunler"
                  className="inline-flex items-center gap-3 bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c2410c] transition-colors"
                >
                  <ThermometerSun className="w-5 h-5" />
                  {c.text("heroButton")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src={c.text("heroImage")}
                  alt="Thermaplus"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {pageStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[28px] bg-white border border-gray-100 p-7 text-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#ea580c] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Thermaplus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {c.text("strengthsTitle")}
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pageStrengths.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-[#f8fafc] rounded-[30px] p-8 border border-gray-100"
                >
                  {React.createElement(getIcon(item.icon), { className: "w-9 h-9 text-[#ea580c] mb-6" })}
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ürün gamı */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                {c.text("rangeTitle")}
              </h2>
              <p className="text-gray-500 text-lg font-light">
                {c.text("rangeText")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pageProductGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center mb-6">
                    {React.createElement(getIcon(group.icon), { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">{group.title}</h3>
                  <ul className="space-y-4 mb-8 flex-1">
                    {group.lines.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/isi-pompasi#urunler"
                    className="inline-flex items-center gap-2 font-bold text-[#1e3a8a] hover:text-[#ea580c] transition-colors"
                  >
                    {c.text("groupLink")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {c.text("ctaTitle")}
            </h2>
            <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light">
              {c.text("ctaText")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/isi-pompasi#urunler"
                className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
              >
                {c.text("ctaProductsButton")} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 border border-white/40 px-10 py-5 rounded-full font-bold hover:bg-white hover:text-[#1e3a8a] transition-colors"
              >
                {c.text("ctaQuoteButton")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
