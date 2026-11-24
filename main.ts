const fs = require("node:fs");
const path = require("node:path");

// One haiku about debugging, three lines in the 5-7-5 shape.
// Concrete centre: a breakpoint, a log line; the last line turns it.
const haiku = [
  "Breakpoint set at dawn",
  "one log line blinks and then lies",
  "the bug wore my name",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), haiku, "utf8");
