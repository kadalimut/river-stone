// A quiet text, written to relax the reader.
// The program writes one text to /output/entry.txt and nothing else.
// No network, no dependencies, deterministic: the same text every run.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Draft chosen in this session: a river stone that was once a mountain.
// Deep time in the palm of a hand, grain by grain, with nowhere to hurry to.
const TEXT =
  "The river stone in your pocket was once a mountain. " +
  "Rain and winter wore it down, grain by grain, until it fit in your hand. " +
  "It is still warm from the afternoon sun, still round from a journey " +
  "longer than any road you have walked, and in no hurry to be anywhere else.";

// Guard the gate: 1 to 280 Unicode code points, not only whitespace.
if ([...TEXT].length < 1 || [...TEXT].length > 280 || TEXT.trim().length === 0) {
  throw new Error("entry text must be 1 to 280 characters");
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  const outPath = join(outputDir, "entry.txt");
  writeFileSync(outPath, TEXT, { encoding: "utf8" });
  chmodSync(outPath, 0o644);
}

main();
