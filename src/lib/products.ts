// Shared product types, safe to import from client components.
export type Localized = { tr: string; en: string };
export type ProductType = "bess" | "heat-pump";
export type ImageFit = "cover" | "contain";

export type Product = {
  slug: string;
  type: ProductType;
  order: number;
  published: boolean;
  title: Localized;
  category: Localized;
  summary: Localized;
  description: Localized;
  specs: Localized[];
  options: string[];
  image: string;
  imageFit: ImageFit;
  // Optional overrides: listing card image (BESS page) and detail page image.
  cardImage: string;
  detailImage: string;
  detailImageFit: ImageFit | "";
  technicalTable: { columns: string[]; rows: { label: Localized; values: string[] }[] } | null;
  solutions: { title: Localized; href: string }[];
};

export const productTypeLabels: Record<ProductType, string> = {
  bess: "BESS",
  "heat-pump": "Isı Pompası",
};

// Heat pump products are grouped on /isi-pompasi by these fixed series.
export const heatPumpCategories: Localized[] = [
  { tr: "Konut Serileri", en: "Residential Series" },
  { tr: "Havuz Serileri", en: "Pool Series" },
  { tr: "Endüstriyel Seriler", en: "Industrial Series" },
];

export const productPath = (product: Pick<Product, "type" | "slug">) =>
  `/${product.type === "bess" ? "bess" : "isi-pompasi"}/${product.slug}`;

export const pick = (value: Localized, lang: "tr" | "en") => (lang === "en" && value.en ? value.en : value.tr);
