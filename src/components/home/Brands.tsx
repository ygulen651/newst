"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePageContent } from "@/lib/content/context";

export default function Brands() {
  const c = usePageContent("home");
  const pageBrands = c.list("brands");

  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-[#1e3a8a]">
            {c.text("brandsTitleLine1")} <br /> {c.text("brandsTitleLine2")}
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-light">
            {c.text("brandsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pageBrands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo and Role */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <Link href={brand.brandHref} className="relative h-20 md:h-24 w-64 md:w-72 shrink-0">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain object-left transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-[10px] font-bold tracking-widest uppercase border border-gray-100">
                    {brand.role}
                  </span>
                </div>

                <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                  {brand.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {brand.tags.split(",").map((tag) => tag.trim()).filter(Boolean).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-auto">
                <div className="relative w-full sm:w-44 h-40 sm:h-44 rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner group-hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={brand.brandHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-[#1e3a8a] transition-colors hover:border-[#ea580c] hover:text-[#ea580c]"
                  >
                    {c.text("brandsMeetButton")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={brand.productsHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ea580c]"
                  >
                    {c.text("brandsProductsButton")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
