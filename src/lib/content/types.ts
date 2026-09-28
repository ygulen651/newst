// Editable page content: each page declares its fields (with today's copy as defaults) in
// src/lib/content/pages/*. Firestore `content/{pageId}` stores only the values an admin changed.
import type { Localized } from "@/lib/products";

export type { Localized };

// text/textarea are bilingual; image, video, link and icon are a single string for both languages.
export type ScalarType = "text" | "textarea" | "image" | "video" | "link" | "icon";
export type ScalarValue = Localized | string;
export type ListItem = Record<string, ScalarValue>;
export type FieldValue = ScalarValue | ListItem[];

export type ScalarField = {
  key: string;
  label: string;
  type: ScalarType;
  default: ScalarValue;
  help?: string;
};

export type ListField = {
  key: string;
  label: string;
  type: "list";
  itemLabel: string;
  fields: Omit<ScalarField, "default">[];
  default: ListItem[];
  help?: string;
};

export type FieldDef = ScalarField | ListField;
export type SectionDef = { title: string; fields: FieldDef[] };
export type PageDef = { id: string; title: string; path: string; sections: SectionDef[] };

export type PageValues = Record<string, FieldValue>;
export type ContentOverrides = Record<string, PageValues>;

export const isLocalizedType = (type: ScalarType) => type === "text" || type === "textarea";

// Shorthand helpers for page definitions.
export const L = (tr: string, en = ""): Localized => ({ tr, en });
