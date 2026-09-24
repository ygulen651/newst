import { cpSync, mkdirSync } from "node:fs";

const standaloneDirectory = ".next/standalone";

mkdirSync(`${standaloneDirectory}/.next`, { recursive: true });
cpSync("public", `${standaloneDirectory}/public`, { recursive: true });
cpSync(".next/static", `${standaloneDirectory}/.next/static`, {
  recursive: true,
});

console.log("Prepared the standalone deployment output.");
