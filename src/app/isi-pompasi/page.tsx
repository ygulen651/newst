import { getProducts } from "@/lib/firebase/products";
import HeatPumpPageClient from "./HeatPumpPageClient";

// Rendered per request so product edits from the admin panel show up without a rebuild.
export const dynamic = "force-dynamic";

export default async function HeatPumpPage() {
  return <HeatPumpPageClient products={await getProducts("heat-pump")} />;
}
