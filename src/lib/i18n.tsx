"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { applyAutoTranslation, observeAutoTranslation } from "@/lib/auto-translate";

export type Language = "tr" | "en";

type Dictionary = {
  nav: {
    home: string;
    about: string;
    brands: string;
    solutions: string;
    bess: string;
    heatPump: string;
    service: string;
    contact: string;
  };
  common: {
    exploreProducts: string;
    exploreSolutions: string;
    getQuote: string;
    contactUs: string;
    discoverMore: string;
    products: string;
    solutions: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
  };
  banners: {
    bessTitle: string;
    heatPumpTitle: string;
  };
  footer: {
    tagline: string;
    corporate: string;
    products: string;
    solutions: string;
    aboutUs: string;
    sarayHolding: string;
    bess: string;
    heatPump: string;
    brandNote: string;
    location: string;
  };
};

const tr: Dictionary = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    brands: "Markalarımız",
    solutions: "Çözümlerimiz",
    bess: "BESS",
    heatPump: "Isı Pompası",
    service: "Servis Ağı",
    contact: "İletişim",
  },
  common: {
    exploreProducts: "Ürünleri İncele",
    exploreSolutions: "Çözümleri İncele",
    getQuote: "Teklif Al",
    contactUs: "Bize Ulaşın",
    discoverMore: "Daha Fazlasını Keşfedin",
    products: "Ürünler",
    solutions: "Çözümler",
  },
  hero: {
    badge: "Bir Saray Holding Markası",
    titleLine1: "Enerjiyi Bugünden",
    titleLine2: "Geleceğe Dönüştürün",
    subtitle:
      "Güneş santrallerinden veri merkezlerine, sanayiden konutlara: Inspur BESS ve Thermaplus Isı Pompası ile temiz enerji dönüşümü.",
  },
  banners: {
    bessTitle: "Inspur BESS: Enerji Güvenliğinin Ana Oyuncusu",
    heatPumpTitle: "Thermaplus Isı Pompası: Çevreci, Verimli, Ekonomik",
  },
  footer: {
    tagline:
      "Saray Holding güvencesiyle, geleceğin enerji altyapısını bugün inşa ediyoruz. Sürdürülebilir ve verimli enerji çözümleri.",
    corporate: "Kurumsal",
    products: "Ürünler",
    solutions: "Çözümler",
    aboutUs: "Hakkımızda",
    sarayHolding: "Saray Holding",
    bess: "Inspur BESS",
    heatPump: "Thermaplus Isı Pompası",
    brandNote: "Bir Saray Holding kuruluşudur.",
    location: "İstanbul, Türkiye",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About Us",
    brands: "Our Brands",
    solutions: "Solutions",
    bess: "BESS",
    heatPump: "Heat Pump",
    service: "Service Network",
    contact: "Contact",
  },
  common: {
    exploreProducts: "Explore Products",
    exploreSolutions: "Explore Solutions",
    getQuote: "Get a Quote",
    contactUs: "Contact Us",
    discoverMore: "Discover More",
    products: "Products",
    solutions: "Solutions",
  },
  hero: {
    badge: "A Saray Holding Brand",
    titleLine1: "Carry Energy From Today",
    titleLine2: "Into the Future",
    subtitle:
      "From solar plants to data centers, from industry to homes: clean energy transformation with Inspur BESS and Thermaplus Heat Pumps.",
  },
  banners: {
    bessTitle: "Inspur BESS: The Key Player in Energy Security",
    heatPumpTitle: "Thermaplus Heat Pump: Green, Efficient, Economical",
  },
  footer: {
    tagline:
      "Backed by Saray Holding, we are building the energy infrastructure of the future today. Sustainable and efficient energy solutions.",
    corporate: "Corporate",
    products: "Products",
    solutions: "Solutions",
    aboutUs: "About Us",
    sarayHolding: "Saray Holding",
    bess: "Inspur BESS",
    heatPump: "Thermaplus Heat Pump",
    brandNote: "A Saray Holding company.",
    location: "Istanbul, Turkiye",
  },
};

const dictionaries: Record<Language, Dictionary> = { tr, en };

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "tr",
  setLang: () => {},
  t: tr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");
  const stopTranslationObserver = useRef<() => void>(() => {});

  useEffect(() => {
    // Sync the language stored in localStorage after hydration; the server
    // always renders Turkish, so this must run in an effect.
    const stored = window.localStorage.getItem("newstag-lang");
    if (stored === "en") {
      applyAutoTranslation("en");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState("en");
      document.documentElement.lang = "en";
    }
  }, []);

  useEffect(() => {
    const stop = observeAutoTranslation(lang);
    stopTranslationObserver.current = stop;

    return () => {
      stop();
      if (stopTranslationObserver.current === stop) {
        stopTranslationObserver.current = () => {};
      }
    };
  }, [lang]);

  const setLang = (next: Language) => {
    stopTranslationObserver.current();
    stopTranslationObserver.current = () => {};
    document.documentElement.lang = next;
    applyAutoTranslation(next);
    setLangState(next);
    window.localStorage.setItem("newstag-lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
