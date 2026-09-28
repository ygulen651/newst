import { getProducts } from "@/lib/firebase/products";
import BessPageClient from "./BessPageClient";

// Rendered per request so product edits from the admin panel show up without a rebuild.
export const dynamic = "force-dynamic";

export default async function BessPage() {
  return <BessPageClient products={await getProducts("bess")} />;
}
