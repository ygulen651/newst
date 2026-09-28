import { unstable_cache } from "next/cache";
import { adminDb } from "./admin";
import type { Solution } from "@/lib/solutions";

export const SOLUTIONS_TAG = "solutions";
export const solutionsCollection = () => adminDb.collection("solutions");

async function fetchSolutions(): Promise<Solution[]> {
  const snapshot = await solutionsCollection().orderBy("order").get();
  return snapshot.docs.map((doc) => ({ ...(doc.data() as Solution), slug: doc.id }));
}

// All solutions (including unpublished), for the admin panel. Not cached.
export const listAllSolutions = fetchSolutions;

// Published solutions for the public site, cached until an admin edit invalidates the tag.
export const getSolutions = unstable_cache(
  async () => (await fetchSolutions()).filter((solution) => solution.published),
  ["published-solutions"],
  { tags: [SOLUTIONS_TAG] }
);
