import { getPageDef, resolvePageValues } from "./registry";
import type { ContentOverrides, ListItem, ScalarValue } from "./types";

// An empty English value falls back to Turkish, which the site's auto-translation then handles.
export function localizeValue(value: ScalarValue | undefined, lang: "tr" | "en"): string {
  if (value === undefined) return "";
  if (typeof value === "string") return value;
  return lang === "en" && value.en ? value.en : value.tr;
}

export function resolveContent(overrides: ContentOverrides, pageId: string, lang: "tr" | "en") {
  const page = getPageDef(pageId);
  if (!page) throw new Error(`Unknown content page: ${pageId}`);
  const values = resolvePageValues(page, overrides[pageId]);

  return {
    text: (key: string) => localizeValue(values[key] as ScalarValue, lang),
    list: (key: string): Record<string, string>[] =>
      ((values[key] as ListItem[]) ?? []).map((item) =>
        Object.fromEntries(Object.entries(item).map(([k, v]) => [k, localizeValue(v, lang)]))
      ),
  };
}
