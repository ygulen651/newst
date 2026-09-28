import { notFound } from "next/navigation";
import { listAllProducts } from "@/lib/firebase/products";
import { solutionsCollection } from "@/lib/firebase/solutions";
import { requireAdmin } from "@/lib/firebase/session";
import { productPath } from "@/lib/products";
import type { Solution } from "@/lib/solutions";
import SolutionForm, { emptySolution } from "../SolutionForm";

export default async function EditSolution({ params }: { params: Promise<{ slug: string }> }) {
  await requireAdmin();
  const { slug } = await params;
  const [doc, products] = await Promise.all([solutionsCollection().doc(slug).get(), listAllProducts()]);
  if (!doc.exists) notFound();

  // Fill any fields missing in older documents so the form is always fully controlled.
  const solution: Solution = { ...emptySolution, ...(doc.data() as Solution), slug: doc.id };
  return <SolutionForm initial={solution} productLinks={products.map(productPath)} />;
}
