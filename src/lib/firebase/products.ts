import { unstable_cache } from "next/cache";
import { adminDb } from "./admin";
import type { Product, ProductType } from "@/lib/products";
import productsSeed from "../../../scripts/data/products.seed.json";

export const PRODUCTS_TAG = "products";
export const productsCollection = () => adminDb.collection("products");

async function fetchProducts(): Promise<Product[]> {
  const snapshot = await productsCollection().orderBy("order").get();
  return snapshot.docs.map((doc) => ({ ...(doc.data() as Product), slug: doc.id }));
}

// All products (including unpublished), for the admin panel. Not cached.
export const listAllProducts = fetchProducts;

// Published products for the public site, cached until an admin edit invalidates the tag.
const cachedPublishedProducts = unstable_cache(
  async () => (await fetchProducts()).filter((product) => product.published),
  ["published-products"],
  { tags: [PRODUCTS_TAG] }
);

export async function getProducts(type: ProductType) {
  let products: Product[];
  try {
    products = await cachedPublishedProducts();
  } catch (error) {
    // Keep the public site up with the bundled catalogue if Firestore is unreachable.
    console.error("Ürünler Firestore'dan okunamadı, yedek veri kullanılıyor:", error);
    products = productsSeed as Product[];
  }
  return products.filter((product) => product.type === type);
}
