import type { FieldDef, PageDef, PageValues } from "./types";
import { layoutPage } from "./pages/layout";
import { homePage } from "./pages/home";
import { aboutPage } from "./pages/about";
import { servicePage } from "./pages/service";
import { contactPage } from "./pages/contact";
import { brandsPage } from "./pages/brands";
import { inspurPage } from "./pages/inspur";
import { thermaplusPage } from "./pages/thermaplus";

// Order here is the order shown in the admin panel.
export const pageDefs: PageDef[] = [layoutPage, homePage, aboutPage, servicePage, contactPage, brandsPage, inspurPage, thermaplusPage];

export const getPageDef = (id: string) => pageDefs.find((page) => page.id === id);

export const pageFields = (page: PageDef): FieldDef[] => page.sections.flatMap((section) => section.fields);

// Defaults with admin overrides applied on top.
export function resolvePageValues(page: PageDef, overrides: PageValues | undefined): PageValues {
  const values: PageValues = {};
  for (const field of pageFields(page)) {
    values[field.key] = overrides?.[field.key] ?? field.default;
  }
  return values;
}
