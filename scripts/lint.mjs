import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcDir = path.join(root, "src");

const issues = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!/\.(js|jsx|ts|tsx|css|mjs)$/.test(entry.name)) continue;

    const content = fs.readFileSync(fullPath, "utf8");

    if (/[ÃÂâ]/.test(content)) {
      issues.push(`${path.relative(root, fullPath)}: possible mojibake characters found`);
    }

    if (fullPath.includes(path.join("src", "app", "lib", "spotify.js")) && /REACT_APP_SPOTIFY/.test(content)) {
      issues.push(`${path.relative(root, fullPath)}: REACT_APP_SPOTIFY vars should not be used in server code`);
    }
  }
}

walk(srcDir);

if (issues.length) {
  console.error("Lint checks failed:\n");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("Lint checks passed.");
