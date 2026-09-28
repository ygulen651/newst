"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { applyAutoTranslation, observeAutoTranslation } from "@/lib/auto-translate";
import { resolveContent } from "@/lib/content/resolve";
import { useContentOverrides } from "@/lib/content/store";
import type { ContentOverrides } from "@/lib/content/types";

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

// The dictionary is built from editable content (admin panel → İçerik), with today's copy as defaults.
function buildDictionary(overrides: ContentOverrides, lang: Language): Dictionary {
  const layout = resolveContent(overrides, "layout", lang).text;
  const home = resolveContent(overrides, "home", lang).text;

  return {
    nav: {
      home: layout("navHome"),
      about: layout("navAbout"),
      brands: layout("navBrands"),
      solutions: layout("navSolutions"),
      bess: layout("navBess"),
      heatPump: layout("navHeatPump"),
      service: layout("navService"),
      contact: layout("navContact"),
    },
    common: {
      exploreProducts: layout("exploreProducts"),
      exploreSolutions: layout("exploreSolutions"),
      getQuote: layout("getQuote"),
      contactUs: layout("contactUs"),
      discoverMore: layout("discoverMore"),
      products: layout("products"),
      solutions: layout("solutions"),
    },
    hero: {
      badge: layout("holdingBadge"),
      titleLine1: home("heroTitleLine1"),
      titleLine2: home("heroTitleLine2"),
      subtitle: home("heroSubtitle"),
    },
    banners: {
      bessTitle: home("bannerBessTitle"),
      heatPumpTitle: home("bannerHeatPumpTitle"),
    },
    footer: {
      tagline: layout("footerTagline"),
      corporate: layout("footerCorporate"),
      products: layout("footerProducts"),
      solutions: layout("footerSolutions"),
      aboutUs: layout("footerAboutUs"),
      sarayHolding: layout("footerSarayHolding"),
      bess: layout("footerBess"),
      heatPump: layout("footerHeatPump"),
      brandNote: layout("footerBrandNote"),
      location: layout("footerLocation"),
    },
  };
}

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "tr",
  setLang: () => {},
  t: buildDictionary({}, "tr"),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");
  const overrides = useContentOverrides();
  const t = useMemo(() => buildDictionary(overrides, lang), [overrides, lang]);
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
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
