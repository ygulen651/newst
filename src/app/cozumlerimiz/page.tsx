import { getSolutions } from "@/lib/firebase/solutions";
import SolutionsPageClient from "./SolutionsPageClient";

// Rendered per request so solution edits from the admin panel show up without a rebuild.
export const dynamic = "force-dynamic";

export default async function SolutionsPage() {
  return <SolutionsPageClient solutions={await getSolutions()} />;
}
