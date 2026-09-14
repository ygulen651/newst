"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BatteryCharging, ThermometerSun } from "lucide-react";
import { getLocalizedSolution, getLocalizedSolutions, type SolutionBenefit } from "@/lib/solutions-data";
import { useLanguage } from "@/lib/i18n";

function BenefitGrid({
  title,
  icon: Icon,
  benefits,
}: {
  title: string;
  icon: typeof BatteryCharging;
  benefits: SolutionBenefit[];
}) {
  return (
    <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Icon className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
        <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] tracking-tight">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
            className="bg-gray-50 border border-gray-100 rounded-[26px] p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
            <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">{benefit.title}</h4>
            <p className="text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionDetail({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const solution = getLocalizedSolution(slug, lang)!;
  const otherSolutions = getLocalizedSolutions(lang).filter((s) => s.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen pt-32">
        {/* Hero */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-6">
            <Link
              href="/cozumlerimiz"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> {isEnglish ? "All Solutions" : "Tüm Çözümler"}
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  {isEnglish ? "Solution Area" : "Çözüm Alanı"}
                </span>
                <h1 className="text-5xl md:text-7xl font-medium text-[#1e3a8a] tracking-tight mb-8 leading-tight">
                  {solution.title}
                </h1>
                <div className="space-y-5 text-lg text-gray-600 font-light leading-relaxed">
                  {solution.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="font-medium text-[#1e3a8a]">{solution.highlight}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Segments */}
        {solution.segments && (
          <section className="py-20 bg-[#eef4fb]">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-12 max-w-3xl">
                {solution.segmentsTitle}
              </h2>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  solution.segments.some((s) => s.image)
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-4"
                } gap-6`}
              >
                {solution.segments.map((segment, index) => (
                  <motion.div
                    key={segment.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="bg-white border border-blue-100 rounded-[28px] overflow-hidden shadow-sm"
                  >
                    {segment.image && (
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={segment.image}
                          alt={segment.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-7">
                      {segment.thumbnail ? (
                        <div className="relative mb-6 h-36 w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                          <Image
                            src={segment.thumbnail}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <segment.icon className="w-8 h-8 text-[#ea580c] mb-5" />
                      )}
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                        {segment.title}
                      </h3>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {segment.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why BESS */}
        {solution.whyBess && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <BenefitGrid
                title={isEnglish ? `Why BESS for ${solution.title}?` : `${solution.title} İçin Neden BESS?`}
                icon={BatteryCharging}
                benefits={solution.whyBess}
              />
            </div>
          </section>
        )}

        {/* Why Heat Pump */}
        {solution.whyHeatPump && (
          <section className="pb-20">
            <div className="container mx-auto px-6">
              <BenefitGrid
                title={isEnglish ? `Why Heat Pumps for ${solution.title}?` : `${solution.title} İçin Neden Isı Pompası?`}
                icon={ThermometerSun}
                benefits={solution.whyHeatPump}
              />
            </div>
          </section>
        )}

        {/* Related products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                {isEnglish ? "Recommended Products" : "Önerilen Ürünler"}
              </h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <div
              className={`grid grid-cols-1 ${
                solution.products.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"
              } gap-8`}
            >
              {solution.products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-[#f8fafc] rounded-[40px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
                >
                  <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-white border border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {product.eyebrow}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 font-light mb-8 leading-relaxed flex-1">
                      {product.desc}
                    </p>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#ea580c] transition-colors self-start"
                    >
                      {isEnglish ? "View Product" : "Ürünü İncele"} <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other solutions */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a8a]">{isEnglish ? "Other Solution Areas" : "Diğer Çözüm Alanları"}</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {otherSolutions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/cozumlerimiz/${item.slug}`}
                  className="group bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <item.icon className="w-8 h-8 text-[#ea580c] mx-auto mb-4" />
                  <span className="font-bold text-[#1e3a8a] group-hover:text-[#ea580c] transition-colors text-sm">
                    {item.navTitle}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {isEnglish ? `Let Us Design a Solution for ${solution.title}` : `${solution.title} İçin Çözüm Tasarlayalım`}
            </h2>
            <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light">
              {isEnglish
                ? "Our expert team defines the right capacity, product, and financing model for your needs."
                : "Uzman ekibimiz ihtiyacınıza göre kapasite, ürün ve finansman modelini birlikte netleştirir."}
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
            >
              {isEnglish ? "Get a Quote" : "Teklif Al"} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
