import { listAllProducts } from "@/lib/firebase/products";
import { requireAdmin } from "@/lib/firebase/session";
import { productPath } from "@/lib/products";
import SolutionForm from "../SolutionForm";

export default async function NewSolution() {
  await requireAdmin();
  const products = await listAllProducts();
  return <SolutionForm initial={null} productLinks={products.map(productPath)} />;
}
