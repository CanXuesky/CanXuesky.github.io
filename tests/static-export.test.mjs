import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { resolve, dirname, relative, sep } from "node:path";
import test from "node:test";

const output = resolve("_site");
const homepage = await readFile(resolve(output, "index.html"), "utf8");
const english = await readFile(resolve(output, "en/index.html"), "utf8");

test("exports the original content in both languages with the al-folio runtime", async () => {
  assert.match(homepage, /<html\s+lang="zh-CN"/);
  assert.match(english, /<html\s+lang="en"/);
  for (const html of [homepage, english]) {
    assert.match(html, /assets\/css\/tailwind\.css/);
    assert.match(html, /assets\/img\/profile\.jpg/);
    assert.match(html, /assets\/img\/favicon\.svg/);
    assert.match(html, /10\.3389\/feart\.2026\.1769685/);
    assert.match(html, /2380863003/);
    assert.doesNotMatch(html, /you@example\.com|prof_pic\.jpg|Write your biography|Albert Einstein/);
  }
  for (const language of ["", "en/"]) {
    for (const section of ["news", "publications", "education", "honors"]) {
      await access(resolve(output, language, section, "index.html"));
    }
    const honors = await readFile(resolve(output, language, "honors/index.html"), "utf8");
    assert.equal((honors.match(/<th scope="row">/g) ?? []).length, 8);
    assert.match(honors, /2026\.08/);
    assert.match(honors, /2024–2025/);
  }
  assert.deepEqual(await readFile(resolve(output, "assets/img/profile.jpg")), await readFile("assets/img/profile.jpg"));
  const icon = await readFile(resolve(output, "assets/img/favicon.svg"), "utf8");
  assert.match(icon, /#096B92/);
  assert.match(icon, /#EEF5F8/);
  await access(resolve(output, ".nojekyll"));
  await access(resolve(output, "404.html"));
});

test("publishes valid local links and assets without leaking local files", async () => {
  async function files(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    return (await Promise.all(entries.map((entry) => entry.isDirectory()
      ? files(resolve(directory, entry.name)) : resolve(directory, entry.name)))).flat();
  }
  for (const file of await files(output)) {
    const path = relative(output, file).split(sep).join("/");
    assert.doesNotMatch(path, /^(?:outputs|tmp|work|scripts|tests|node_modules|vendor)\//);
    assert.doesNotMatch(path, /(?:^|\/)(?:Gemfile(?:\.lock)?|_config\.yml|package(?:-lock)?\.json)$/);
    if (!file.endsWith(".html")) continue;
    const html = await readFile(file, "utf8");
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const link = match[1];
      if (/^(?:[a-z]+:|\/\/|#)/i.test(link)) continue;
      const target = decodeURIComponent(link.split(/[?#]/)[0]);
      let local = target.startsWith("/") ? resolve(output, `.${target}`) : resolve(dirname(file), target);
      assert.ok(local === output || local.startsWith(`${output}${sep}`), `${path}: ${link}`);
      if (!target || target.endsWith("/")) local = resolve(local, "index.html");
      await assert.doesNotReject(access(local), `${path}: missing ${link}`);
    }
  }
});
