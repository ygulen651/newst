"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocalizedSolutions } from "@/lib/solutions-data";
import { useLanguage } from "@/lib/i18n";

export default function SolutionsPage() {
  const { lang } = useLanguage();
  const localizedSolutions = getLocalizedSolutions(lang);

  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen pt-40 pb-32">
        <div className="container mx-auto px-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 max-w-4xl"
          >
            <span className="text-[#ea580c] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
              Newstag Enerji
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium text-[#020817] tracking-tighter mb-8">
              {lang === "en" ? "Solutions" : "Çözümlerimiz"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
              {lang === "en"
                ? "We design energy infrastructure that integrates BESS and heat pump technologies with renewable energy sources. Our solutions reduce energy costs, strengthen supply security, and lower carbon footprint with engineering tailored to each sector."
                : "BESS ve Isı Pompası teknolojilerini yenilenebilir enerji kaynaklarıyla entegre ederek; enerji maliyetlerini düşüren, arz güvenliğini artıran ve karbon ayak izini ölçülebilir şekilde azaltan altyapılar tasarlıyoruz. Enerji santrallerinden konutlara, her sektöre özel mühendislik yaklaşımıyla hizmet veriyoruz."}
            </p>
          </motion.div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedSolutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={
                  index === localizedSolutions.length - 1
                    ? "w-full justify-self-center md:col-span-2 md:max-w-[calc(50%-1rem)] lg:col-span-1 lg:col-start-2 lg:max-w-none"
                    : ""
                }
              >
                <Link
                  href={`/cozumlerimiz/${solution.slug}`}
                  className="group block bg-white rounded-[36px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <solution.icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white drop-shadow">
                        {solution.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-500 font-light leading-relaxed mb-8">
                      {solution.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#ea580c]">
                  {lang === "en" ? "View Details" : "Detaylı İncele"}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 transition-all group-hover:translate-x-2 group-hover:bg-[#ea580c] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 rounded-[40px] bg-[#1e3a8a] p-12 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {lang === "en" ? "Let Us Design a Solution for Your Sector" : "Sektörünüze Özel Çözüm Tasarlayalım"}
            </h2>
            <p className="text-white/75 text-lg font-light max-w-2xl mx-auto mb-10">
              {lang === "en"
                ? "Let us define the right capacity, product, and financing model for your needs, then manage the full process from assessment to commissioning."
                : "İhtiyacınıza göre kapasite, ürün ve finansman modelini birlikte netleştirelim; keşiften devreye almaya tüm süreci yönetelim."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
            >
              {lang === "en" ? "Get a Quote" : "Teklif Al"} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
