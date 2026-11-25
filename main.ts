// Worst Fix Ever: Funniest Commit Message — one commit message, at most
// 100 characters, for a bug fix that made everything worse.
//
// The line: "fix: duplicate charges fixed by charging everyone twice".
//
// Why it fits the brief:
// - It reads as a real commit subject: conventional "fix: ..." prefix,
//   lowercase, terse — exactly what a tired engineer types at 2 a.m.
// - It is a fix that backfired, not just a failure: the bug charged some
//   customers twice, and the "fix" did not stop the double charge — it
//   made the bug universal. The repair broke more than it mended by
//   turning an accidental, unfair double charge into a deliberate,
//   everyone-pays-twice policy; the word "fixed" does all the work.
// - Freshness: the joke is a billing irony, not one of the obvious
//   angles (reverting, testing in production, "broke everything") —
//   the fix does not break the system, it perfects the bug.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: duplicate charges fixed by charging everyone twice";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
chmodSync(`${out}/entry.txt`, 0o644);
console.log(`wrote ${LINE.length} characters`);
