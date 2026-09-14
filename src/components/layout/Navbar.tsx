"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === "tr" ? "en" : "tr")}
      className={`inline-flex items-center gap-1.5 rounded-full border border-gray-200 text-gray-600 hover:text-[#ea580c] hover:border-[#ea580c] transition-colors font-bold uppercase tracking-wider ${
        compact ? "px-3 py-1.5 text-xs" : "px-3 py-1.5 text-[11px]"
      }`}
      aria-label={lang === "tr" ? "Switch to English" : "Switch to Turkish"}
    >
      <Globe className="w-3.5 h-3.5" />
      {lang === "tr" ? "EN" : "TR"}
    </button>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/hakkimizda" },
    { name: t.nav.brands, href: "/markalar" },
    { name: t.nav.solutions, href: "/cozumlerimiz" },
    { name: t.nav.bess, href: "/bess" },
    { name: t.nav.heatPump, href: "/isi-pompasi" },
    { name: t.nav.service, href: "/servis" },
    { name: t.nav.contact, href: "/iletisim" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        {/* Mobile Header (Hidden on lg) */}
        <div className="flex lg:hidden justify-between items-center py-4">
          <Link href="/" className="z-10">
            <div className="relative w-[120px] h-10 md:w-[150px] md:h-12">
              <Image
                src="/images/image5.png"
                alt="NEWSTAG Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitch compact />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Desktop Header (Hidden on mobile) */}
        <nav className="hidden lg:flex w-full items-center justify-center py-4 relative z-20">
          <div className="flex items-center gap-6 xl:gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap text-gray-700 hover:text-[#ea580c]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/" className="mx-10 xl:mx-20 z-10 shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-[180px] h-14 xl:w-[220px] xl:h-16"
            >
              <Image
                src="/images/image5.png"
                alt="NEWSTAG Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          <div className="flex items-center gap-6 xl:gap-8">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap text-gray-700 hover:text-[#ea580c]"
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitch />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[100] flex h-[100svh] w-screen flex-col gap-5 overflow-y-auto bg-white p-6 sm:gap-6 sm:p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl font-bold text-[#ea580c]">{lang === "tr" ? "NEWSTAG ENERJİ" : "NEWSTAG ENERGY"}</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menüyü kapat"
              >
                <X className="w-8 h-8 text-black" />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-bold text-gray-800 hover:text-[#ea580c] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageSwitch />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
