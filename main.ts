/**
 * make.fun entry: The Router Confesses
 *
 * Writes a single funny line, at most 200 characters, that a home Wi-Fi
 * router says to excuse itself for dropping the connection at the exact
 * moment a movie reaches its climax, to /output/entry.txt.
 *
 * The program ships the line itself: it reads nothing from the network,
 * no secrets, no git history, only this file.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You reboot me once a year and call it maintenance. I waited for the climax to hand in my notice \u2014 mid-sentence, like a professional.";

const OUTPUT_PATH = process.env["ENTRY_OUTPUT"] ?? "/output/entry.txt";

function validate(line: string): void {
  // Gate: the line must be 1-199 characters (the competition's entry rule:
  // a single line, at most 200 characters).
  const chars = line.length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry must be 1-199 characters, got ${chars}`);
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf-8");
}

main();
