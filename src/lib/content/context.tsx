"use client";

import { useMemo } from "react";
import { useLanguage } from "@/lib/i18n";
import { resolveContent } from "./resolve";
import { useContentOverrides } from "./store";

// Usage: const c = usePageContent("home"); c.text("heroTitle"); c.list("stats")
export function usePageContent(pageId: string) {
  const overrides = useContentOverrides();
  const { lang } = useLanguage();
  return useMemo(() => resolveContent(overrides, pageId, lang), [overrides, pageId, lang]);
}
