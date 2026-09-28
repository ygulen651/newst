import { unstable_cache } from "next/cache";
import { adminDb } from "./admin";
import type { ContentOverrides, PageValues } from "@/lib/content/types";

export const CONTENT_TAG = "content";
export const contentCollection = () => adminDb.collection("content");

async function fetchOverrides(): Promise<ContentOverrides> {
  const snapshot = await contentCollection().get();
  return Object.fromEntries(snapshot.docs.map((doc) => [doc.id, (doc.data().values ?? {}) as PageValues]));
}

const cachedOverrides = unstable_cache(fetchOverrides, ["content-overrides"], { tags: [CONTENT_TAG] });

// Admin edits to page copy. If Firestore is unreachable the site falls back to the built-in defaults.
export async function getContentOverrides(): Promise<ContentOverrides> {
  try {
    return await cachedOverrides();
  } catch (error) {
    console.error("İçerik okunamadı, varsayılan metinler kullanılıyor:", error);
    return {};
  }
}

export async function getPageOverrides(pageId: string): Promise<PageValues> {
  const doc = await contentCollection().doc(pageId).get();
  return (doc.data()?.values ?? {}) as PageValues;
}
