import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const prohibitedIdentity = /(?:codex|openai|ai[ -]?assistant)/i;
const attributionTrailer = /^(?:co-authored-by|signed-off-by|generated-by):\s*(.+)$/gim;

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function assertAllowed(value, context, failures) {
  if (prohibitedIdentity.test(value)) failures.push(`${context}: ${value}`);
}

const failures = [];
const recordSeparator = "\u001e";
const fieldSeparator = "\u001f";
const log = git("log", "--all", `--format=%H${fieldSeparator}%an${fieldSeparator}%ae${fieldSeparator}%cn${fieldSeparator}%ce${fieldSeparator}%B${recordSeparator}`);

for (const record of log.split(recordSeparator).filter(Boolean)) {
  const [sha, authorName, authorEmail, committerName, committerEmail, ...bodyParts] = record.trim().split(fieldSeparator);
  const body = bodyParts.join(fieldSeparator);
  assertAllowed(`${authorName} <${authorEmail}>`, `${sha} author`, failures);
  assertAllowed(`${committerName} <${committerEmail}>`, `${sha} committer`, failures);
  for (const match of body.matchAll(attributionTrailer)) {
    assertAllowed(match[1], `${sha} attribution trailer`, failures);
  }
}

const messageFileIndex = process.argv.indexOf("--message-file");
if (messageFileIndex !== -1) {
  const message = readFileSync(process.argv[messageFileIndex + 1], "utf8");
  assertAllowed(git("var", "GIT_AUTHOR_IDENT"), "pending commit author", failures);
  assertAllowed(git("var", "GIT_COMMITTER_IDENT"), "pending commit committer", failures);
  for (const match of message.matchAll(attributionTrailer)) {
    assertAllowed(match[1], "pending attribution trailer", failures);
  }
}

if (failures.length > 0) {
  console.error("Prohibited AI attribution detected:\n");
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Attribution check passed.");