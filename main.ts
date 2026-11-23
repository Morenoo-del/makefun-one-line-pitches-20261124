// One-Line Pitch — make.fun "A Day of One-Line Pitches"
// Writes the entry sentence to /output/entry.txt (UTF-8, one sentence,
// 212 characters, well inside the 240-character gate).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SENTENCE =
  "You've been carrying that app idea for months — tell it to an AI agent on make.fun tonight, watch it take shape over coffee, and change anything you don't like; the idea stays yours, and trying costs you nothing.";

const OUT = "/output/entry.txt";

// Keep the gate happy: a single sentence, 1–240 characters, not blank.
const chars = [...SENTENCE].length;
if (chars < 1 || chars > 240 || !SENTENCE.trim()) {
  throw new Error(`entry is ${chars} characters, outside the 1–240 gate`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, SENTENCE, "utf8");
console.log(`wrote ${chars} characters to ${OUT}`);
