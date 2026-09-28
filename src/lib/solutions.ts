// Shared solution types, safe to import from client components.
import type { LucideIcon } from "lucide-react";
import { getIcon } from "./icons";
import { pick, type Localized } from "./products";

export type SolutionBenefit = { icon: string; title: Localized; desc: Localized };
export type SolutionSegment = SolutionBenefit & { image: string; thumbnail: string };
export type SolutionProduct = { eyebrow: Localized; title: Localized; desc: Localized; href: string; image: string };

export type Solution = {
  slug: string;
  order: number;
  published: boolean;
  title: Localized;
  navTitle: Localized;
  icon: string;
  image: string;
  shortDesc: Localized;
  // Paragraphs separated by a blank line.
  intro: Localized;
  highlight: Localized;
  segmentsTitle: Localized;
  segments: SolutionSegment[];
  whyBess: SolutionBenefit[];
  whyHeatPump: SolutionBenefit[];
  products: SolutionProduct[];
};

// Flattened, single-language view used by the public pages.
export type LocalizedSolution = {
  slug: string;
  title: string;
  navTitle: string;
  icon: LucideIcon;
  image: string;
  shortDesc: string;
  intro: string[];
  highlight: string;
  segmentsTitle: string;
  segments: { icon: LucideIcon; title: string; desc: string; image: string; thumbnail: string }[];
  whyBess: { icon: LucideIcon; title: string; desc: string }[];
  whyHeatPump: { icon: LucideIcon; title: string; desc: string }[];
  products: { eyebrow: string; title: string; desc: string; href: string; image: string }[];
};

export function localizeSolution(solution: Solution, lang: "tr" | "en"): LocalizedSolution {
  const t = (value: Localized) => pick(value, lang);
  const benefit = (b: SolutionBenefit) => ({ icon: getIcon(b.icon), title: t(b.title), desc: t(b.desc) });

  return {
    slug: solution.slug,
    title: t(solution.title),
    navTitle: t(solution.navTitle) || t(solution.title),
    icon: getIcon(solution.icon),
    image: solution.image,
    shortDesc: t(solution.shortDesc),
    intro: t(solution.intro).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean),
    highlight: t(solution.highlight),
    segmentsTitle: t(solution.segmentsTitle),
    segments: solution.segments.map((s) => ({ ...benefit(s), image: s.image, thumbnail: s.thumbnail })),
    whyBess: solution.whyBess.map(benefit),
    whyHeatPump: solution.whyHeatPump.map(benefit),
    products: solution.products.map((p) => ({ eyebrow: t(p.eyebrow), title: t(p.title), desc: t(p.desc), href: p.href, image: p.image })),
  };
}
