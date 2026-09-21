import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const src = join(process.cwd(), "dist/client");
const dest = join(process.cwd(), ".output/public");

mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

const shell = readFileSync(join(src, "_shell.html"));
const html = Buffer.from(shell.filter((b) => b !== 0));
writeFileSync(join(dest, "index.html"), html);
writeFileSync(join(dest, "404.html"), html);
writeFileSync(join(dest, ".nojekyll"), "");

console.log("[pages] wrote index.html, 404.html, .nojekyll in .output/public");
