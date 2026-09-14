"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const formY = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="bg-white overflow-hidden">
        {/* Hero with product visual */}
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#1e3a8a]">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 opacity-45">
            <Image
              src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
              alt={isEnglish ? "Inspur BESS field installation" : "Inspur BESS saha kurulumu"}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/80 via-[#1e3a8a]/50 to-[#1e3a8a] z-0" />

          <div className="relative z-10 text-center space-y-8 max-w-5xl px-6 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
                {isEnglish ? "Contact" : "İletişim"}
              </span>
              <h1 className="text-6xl md:text-9xl font-medium text-white tracking-tighter leading-none">
                {isEnglish ? "Get in" : "Bize"} <br />
                <span className="text-gray-400">{isEnglish ? "Touch" : "Ulaşın"}</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32 relative z-20 -mt-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Contact Information */}
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-7xl font-medium text-[#020817] tracking-tighter mb-8 leading-tight">
                    {isEnglish ? "Contact" : "Bizimle"} <br /> <span className="text-[#ea580c]">{isEnglish ? "Our Team" : "İletişime Geçin"}</span>
                  </h2>
                  <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
                    {isEnglish
                      ? "Contact our expert team for BESS and heat pump projects, technical support requests, or business partnerships."
                      : "BESS ve ısı pompası projeleriniz, teknik destek talepleriniz veya iş ortaklığı için uzman ekibimizle iletişime geçin."}
                  </p>
                </motion.div>

                <div className="space-y-16">
                  {[
                    {
                      icon: MapPin,
                      title: isEnglish ? "Head Office" : "Genel Merkez",
                      desc: isEnglish
                        ? "Yildizhan Avenue, Saray Business Center No. 4, Kose Street, 34887 Sancaktepe/Istanbul"
                        : "Yıldızhan Cad. Saray İş Merkezi No:4, Köşe Sk., 34887 Sancaktepe/İstanbul",
                      href: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x14cad3c555555555:0xc12bb9adc218764f?sa=X&ved=1t:8290&ictx=111",
                    },
                    { icon: Phone, title: isEnglish ? "Phone" : "Telefon", desc: "0 216 311 00 67", href: "tel:+902163110067" },
                    { icon: Mail, title: isEnglish ? "Email" : "E-posta", desc: "info@newstag.com.tr", href: "mailto:info@newstag.com.tr" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-8 group"
                    >
                      <div className="mt-2 text-[#ea580c] group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#020817] mb-2">{item.title}</h3>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className="text-lg text-gray-500 whitespace-pre-line font-light leading-relaxed transition-colors hover:text-[#ea580c]"
                        >
                          {item.desc}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="relative">
                <motion.div
                  style={{ y: formY }}
                  className="relative z-10 rounded-[28px] border border-gray-100 bg-white p-6 shadow-2xl shadow-[#ea580c]/10 sm:rounded-[40px] md:p-16"
                >
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-[#020817] mb-4">{isEnglish ? "Send a Message" : "Mesaj Gönderin"}</h3>
                    <div className="w-12 h-1 bg-[#ea580c]" />
                  </div>

                  <form className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
                        {isEnglish ? "Full Name" : "Ad Soyad"}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-gray-50 border-none px-6 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800"
                        placeholder={isEnglish ? "Your full name" : "Adınız ve soyadınız"}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
                        {isEnglish ? "Email" : "E-posta"}
                      </label>
                      <input
                        type="email"
                        className="w-full bg-gray-50 border-none px-6 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800"
                        placeholder="ornek@sirket.com"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
                        {isEnglish ? "Your Message" : "Mesajınız"}
                      </label>
                      <textarea
                        className="w-full bg-gray-50 border-none px-6 py-5 rounded-3xl h-40 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800 resize-none"
                        placeholder={isEnglish ? "How can we help you?" : "Size nasıl yardımcı olabiliriz?"}
                      ></textarea>
                    </div>

                    <button className="w-full group bg-[#ea580c] text-white py-6 rounded-3xl font-bold text-lg hover:bg-[#c2410c] transition-all flex items-center justify-center gap-4">
                      {isEnglish ? "Send" : "Gönder"}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                </motion.div>

                <motion.div
                  style={{ rotate }}
                  className="absolute -top-12 -right-12 w-64 h-64 bg-[#f97316] rounded-full blur-[100px] opacity-20 -z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom band */}
        <section className="py-32 bg-[#1e3a8a] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center opacity-5 pointer-events-none">
            <motion.span
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="text-[20rem] font-black text-white tracking-tighter uppercase whitespace-nowrap"
            >
              {isEnglish ? "NEWSTAG ENERGY • CONTACT •" : "NEWSTAG ENERJI • ILETISIM •"}
            </motion.span>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
              {isEnglish ? "Let Us Build the" : "Geleceği Birlikte"} <span className="text-[#f97316]">{isEnglish ? "Future Together" : "İnşa Edelim"}</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              {isEnglish
                ? "We are with you throughout your energy transformation journey, from project design to service. Contact us to explore our solutions."
                : "Enerji dönüşüm yolculuğunuzda projelendirmeden servise kadar yanınızdayız. Çözümlerimizi keşfetmek için bize ulaşın."}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
