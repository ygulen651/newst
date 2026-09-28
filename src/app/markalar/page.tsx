"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { usePageContent } from "@/lib/content/context";
import { Highlight } from "@/lib/content/format";

export default function BrandsPage() {
  const c = usePageContent("brands");
  const pageBrands = c.list("brands").map((brand) => ({
    name: brand.name,
    tagline: brand.tagline,
    desc: brand.desc,
    logo: brand.logo,
    image: brand.image,
    brandLink: brand.brandLink,
    productsLink: brand.productsLink,
    stats: [1, 2, 3]
      .map((n) => ({ value: brand[`stat${n}Value`], label: brand[`stat${n}Label`] }))
      .filter((stat) => stat.value),
  }));

  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen pt-40 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-[#ea580c] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
                {c.text("eyebrow")}
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium text-[#020817] tracking-tighter mb-4">
                <Highlight text={c.text("title")} className="text-[#ea580c]" />
              </h1>
            </div>
            <div className="text-xl text-gray-500 font-light max-w-md">
              {c.text("intro")}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10">
            {pageBrands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[40px] p-8 md:p-14 border border-gray-200/80 hover:shadow-2xl hover:border-[#ea580c]/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Logo + stats */}
                  <div className="w-full lg:w-1/3 flex flex-col gap-10">
                    <Link href={brand.brandLink} className="relative h-24 md:h-32 w-full">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain object-center lg:object-left transition-all duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="grid grid-cols-3 gap-3">
                      {brand.stats.map((stat, j) => (
                        <div
                          key={j}
                          className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-center"
                        >
                          <div className="text-xl font-bold text-[#ea580c]">{stat.value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <span className="text-[#ea580c] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
                      {brand.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-5 tracking-tight">
                      {brand.name}
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                      {brand.desc}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <Link
                        href={brand.brandLink}
                        className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#ea580c]"
                      >
                        {c.text("profileButton")}
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href={brand.productsLink}
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 font-bold text-[#1e3a8a] transition-colors hover:border-[#ea580c] hover:text-[#ea580c]"
                      >
                        {c.text("productsButton")}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Product visual */}
                  <div className="relative w-full lg:w-72 aspect-square rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
