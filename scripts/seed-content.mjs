// Loads scripts/data/<collection>.seed.json into the Firestore collection of the same name.
// Usage: node scripts/seed-content.mjs <products|solutions> [--force]
// Without --force, documents that already exist are left untouched (admin edits are kept).
import { readFileSync } from "node:fs";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "./firebase-admin-app.mjs";

const [collection] = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const force = process.argv.includes("--force");
if (!collection) {
  console.error("Kullanım: node scripts/seed-content.mjs <products|solutions> [--force]");
  process.exit(1);
}

const db = getFirestore(app);
const items = JSON.parse(readFileSync(`scripts/data/${collection}.seed.json`, "utf8"));

let written = 0;
for (const { slug, ...data } of items) {
  const ref = db.collection(collection).doc(slug);
  if (!force && (await ref.get()).exists) {
    console.log(`atlandı (zaten var): ${slug}`);
    continue;
  }
  await ref.set(data);
  written++;
  console.log(`yazıldı: ${slug}`);
}

console.log(`${written}/${items.length} kayıt yazıldı (${collection}).`);
