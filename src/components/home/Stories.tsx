"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const storyCategories = [
  {
    id: "customer",
    label: "Müşteri Hikayeleri",
    title: "Geçmişi Koruyarak, Geleceği Güçlendirerek",
    description: "Tarihi Bir Değirmenin Güneş Enerjisine Yolculuğu.",
    image: "/images/utility-scenario.png", // Using existing utility image as placeholder
    href: "/referanslar",
  },
  {
    id: "distributor",
    label: "Distribütör Hikayeleri",
    title: "Değişime Yön Veriyoruz",
    description: "Newstag ile Yenilenebilir Enerjinin Geleceğini İnşa Edin.",
    image: "/images/business-scenario.png", // Using business image
    href: "/referanslar",
  },
  {
    id: "service",
    label: "Servis Hikayeleri",
    title: "Her An Yanınızdayız",
    description: "7/24 Kesintisiz Enerji ve Teknik Destek Çözümlerimiz.",
    image: "/images/home-scenario.png", // Using home image
    href: "/servis",
  },
];

const storyCategoriesEn = [
  {
    id: "customer",
    label: "Customer Stories",
    title: "Protecting the Past, Powering the Future",
    description: "A historic mill's journey toward solar energy.",
    image: "/images/utility-scenario.png",
    href: "/referanslar",
  },
  {
    id: "distributor",
    label: "Distributor Stories",
    title: "Leading the Change",
    description: "Build the future of renewable energy with Newstag.",
    image: "/images/business-scenario.png",
    href: "/referanslar",
  },
  {
    id: "service",
    label: "Service Stories",
    title: "Always by Your Side",
    description: "Our 24/7 energy continuity and technical support solutions.",
    image: "/images/home-scenario.png",
    href: "/servis",
  },
];

export default function Stories() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const stories = isEnglish ? storyCategoriesEn : storyCategories;
  const [activeCategory, setActiveCategory] = useState("customer");
  const currentStory = stories.find((s) => s.id === activeCategory) ?? stories[0];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-medium text-gray-400 text-center mb-24">
          {isEnglish ? "Stories Inspire" : "Hikayeler İlham Verir"}
        </h2>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Content - Accordion */}
          <div className="w-full lg:w-1/2 space-y-12">
            {stories.map((category) => (
              <div key={category.id} className="border-l-2 border-gray-100 relative">
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="activeBorder"
                    className="absolute left-[-2px] top-0 w-[2px] h-full bg-[#ea580c]"
                  />
                )}
                
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className="w-full text-left px-8 py-4 flex items-center justify-between group"
                >
                  <span className={`text-xl transition-colors ${activeCategory === category.id ? "text-[#1e3a8a] font-medium" : "text-gray-400 group-hover:text-gray-600"}`}>
                    {category.label}
                  </span>
                  {activeCategory === category.id ? (
                    <Minus className="w-6 h-6 text-[#ea580c]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-300 group-hover:text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {activeCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-8 overflow-hidden"
                    >
                      <div className="py-8 space-y-8">
                        <h3 className="text-4xl md:text-5xl font-medium text-[#1e3a8a] leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-gray-500 text-lg font-light">
                          {category.description}
                        </p>
                        <Link
                          href={category.href}
                          className="inline-block px-10 py-3 border border-[#ea580c] text-[#ea580c] rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 font-medium"
                        >
                          {isEnglish ? "Discover More" : "Daha Fazlasını Keşfedin"}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Content - Dynamic Image */}
          <div className="w-full lg:w-1/2 relative h-[600px] rounded-[40px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentStory.image}
                  alt={currentStory.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
