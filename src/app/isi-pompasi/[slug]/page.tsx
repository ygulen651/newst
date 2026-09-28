import { notFound } from "next/navigation";
import { getProducts } from "@/lib/firebase/products";
import HeatPumpProductClient from "./HeatPumpProductClient";

export const dynamic = "force-dynamic";

export default async function HeatPumpProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProducts("heat-pump");
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category.tr === product.category.tr && item.slug !== slug)
    .slice(0, 3);
  return <HeatPumpProductClient product={product} related={related} />;
}
