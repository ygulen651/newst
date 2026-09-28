import { notFound } from "next/navigation";
import { productsCollection } from "@/lib/firebase/products";
import { listAllSolutions } from "@/lib/firebase/solutions";
import { requireAdmin } from "@/lib/firebase/session";
import type { Product } from "@/lib/products";
import ProductForm, { emptyProduct } from "../ProductForm";

export default async function EditProduct({ params }: { params: Promise<{ slug: string }> }) {
  await requireAdmin();
  const { slug } = await params;
  const [doc, solutions] = await Promise.all([productsCollection().doc(slug).get(), listAllSolutions()]);
  if (!doc.exists) notFound();

  // Fill any fields missing in older documents so the form is always fully controlled.
  const product: Product = { ...emptyProduct, ...(doc.data() as Product), slug: doc.id };
  return <ProductForm initial={product} solutionLinks={solutions.map((s) => `/cozumlerimiz/${s.slug}`)} />;
}
