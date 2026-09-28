import { unstable_cache } from "next/cache";
import { adminDb } from "./admin";
import type { Product, ProductType } from "@/lib/products";

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
  return (await cachedPublishedProducts()).filter((product) => product.type === type);
}
