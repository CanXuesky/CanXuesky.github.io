import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports a GitHub Pages-ready static homepage", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /<title>薛灿｜个人学术主页<\/title>/);
  assert.match(html, /https:\/\/github\.com\/CanXuesky/);
  assert.doesNotMatch(html, /shuixin1221/i);
  assert.match(html, /src="\/profile\.png"/);
  assert.match(html, /href="\/favicon\.svg"/);
});

test("includes all files required by GitHub Pages", async () => {
  await Promise.all(
    [
      ".nojekyll",
      "404.html",
      "favicon.svg",
      "index.rsc",
      "profile.png",
    ].map((path) => access(new URL(path, outputRoot))),
  );
});
