"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { lang, t } = useLanguage();
  const isEnglish = lang === "en";

  const footerLinks = [
    {
      title: t.footer.corporate,
      links: [
        { name: t.footer.aboutUs, href: "/hakkimizda", external: false },
        { name: t.nav.brands, href: "/markalar", external: false },
        { name: t.nav.service, href: "/servis", external: false },
        {
          name: t.footer.sarayHolding,
          href: "https://www.sarayholding.com.tr/",
          external: true,
        },
      ],
    },
    {
      title: t.footer.products,
      links: [
        { name: t.footer.bess, href: "/bess", external: false },
        { name: t.footer.heatPump, href: "/isi-pompasi", external: false },
      ],
    },
    {
      title: t.footer.solutions,
      links: [
        { name: isEnglish ? "Power Plants" : "Enerji Santralleri", href: "/cozumlerimiz/enerji-santralleri", external: false },
        { name: isEnglish ? "Industrial Facilities" : "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri", external: false },
        { name: isEnglish ? "Commercial Facilities" : "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler", external: false },
        { name: isEnglish ? "Residential" : "Konutlar", href: "/cozumlerimiz/konutlar", external: false },
        { name: isEnglish ? "Data Centers" : "Veri Merkezleri", href: "/cozumlerimiz/veri-merkezleri", external: false },
        { name: isEnglish ? "Limited Grid Locations" : "Sınırlı Şebeke Noktaları", href: "/cozumlerimiz/sinirli-sebeke", external: false },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-12">
              <div className="relative h-16 lg:h-24 w-[200px] sm:w-[250px] lg:w-[350px]">
                <Image
                  src="/images/image5.png"
                  alt="NEWSTAG Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-500 mb-10 max-w-sm leading-relaxed font-light">
              {t.footer.tagline}
            </p>
            <a
              href="https://www.sarayholding.com.tr/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#ea580c] hover:border-[#ea580c] transition-all"
            >
              {t.hero.badge}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[#1e3a8a] font-bold mb-8 uppercase text-xs tracking-widest">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) =>
                  link.external ? (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-[#ea580c] transition-colors font-light inline-flex items-center gap-1.5"
                      >
                        {link.name}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-500 hover:text-[#ea580c] transition-colors font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm text-gray-400">
            <a
              href="https://www.google.com/maps/place/data=!4m2!3m1!1s0x14cad3c555555555:0xc12bb9adc218764f?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#ea580c] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Yıldızhan Cad. Saray İş Merkezi No:4, Köşe Sk., 34887 Sancaktepe/İstanbul
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 0 216 311 00 67
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@newstag.com.tr
            </span>
          </div>
          <p className="text-xs text-gray-400 font-light">
            © {new Date().getFullYear()} {isEnglish ? "Newstag Energy." : "Newstag Enerji."}{" "}
            <span className="font-medium text-gray-600">{t.footer.brandNote}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
