"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePageContent } from "@/lib/content/context";

export default function WhyUs() {
  const c = usePageContent("home");

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
            {c.text("whyTitle")}
          </h2>

          <div className="w-px h-24 bg-[#f97316] mx-auto mb-14 opacity-30" />

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-light mb-10">
            {c.text("whyText1")}
          </p>

          <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-14">
            {c.text("whyText2")}
          </p>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-3 rounded-full bg-[#1e3a8a] px-10 py-4 font-bold text-white transition-colors hover:bg-[#152e73]"
          >
            {c.text("whyButton")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
