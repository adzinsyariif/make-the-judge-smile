import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One line about a small good thing that happened today.
// Deterministic: the same text on every run, no network, no randomness.
const ENTRY =
  "This morning my ojek driver refused the extra ten thousand, tapped his cracked helmet, and grinned: 'Save it for the rain, brother — you'll need it before I do.'";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
