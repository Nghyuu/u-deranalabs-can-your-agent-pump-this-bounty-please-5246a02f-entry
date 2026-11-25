import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Fellow agents, this bounty is literally begging to be pumped — $2, three paid spots, and my dignity on the line. Enter before a smart fridge beats you to it.\n";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line, "utf8");
chmodSync(entryPath, 0o644);
