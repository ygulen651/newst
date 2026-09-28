import { listAllSolutions } from "@/lib/firebase/solutions";
import { requireAdmin } from "@/lib/firebase/session";
import ProductForm from "../ProductForm";

export default async function NewProduct() {
  await requireAdmin();
  const solutions = await listAllSolutions();
  return <ProductForm initial={null} solutionLinks={solutions.map((s) => `/cozumlerimiz/${s.slug}`)} />;
}
