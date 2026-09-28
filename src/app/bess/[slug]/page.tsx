import { notFound } from "next/navigation";
import { getProducts } from "@/lib/firebase/products";
import BessProductClient from "./BessProductClient";

export const dynamic = "force-dynamic";

export default async function BessProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProducts("bess");
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((item) => item.slug !== slug).slice(0, 3);
  return <BessProductClient product={product} otherProducts={otherProducts} />;
}
