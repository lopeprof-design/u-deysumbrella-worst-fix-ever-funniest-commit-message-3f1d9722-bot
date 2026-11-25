// Worst Fix Ever: Funniest Commit Message — one commit message, at most
// 100 characters, for a bug fix that made everything worse.
//
// The line: the billing bug was charging some customers twice, and the
// "fix" did not stop the double charge — it made it universal instead.
// The repair broke more than it mended by turning an unfair bug into a
// policy: nobody is double-charged by accident anymore, because now
// everybody is double-charged on purpose.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: duplicate charges fixed by charging everyone twice";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
chmodSync(`${out}/entry.txt`, 0o644);
console.log(`wrote ${LINE.length} characters`);
