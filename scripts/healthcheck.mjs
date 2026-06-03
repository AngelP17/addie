import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const DOMAIN = "addieelizjones.com";
const VERCEL_ALIAS = "addie-three.vercel.app";
const PUBLIC_RESOLVERS = ["1.1.1.1", "8.8.8.8"];

async function run(command, args, options = {}) {
  try {
    const { stdout, stderr } = await execFileAsync(command, args, {
      timeout: options.timeout ?? 20000,
      maxBuffer: 1024 * 1024,
    });
    return {
      ok: true,
      stdout: stdout.trim(),
      stderr: stderr.trim(),
      output: [stdout, stderr].join("\n").trim(),
    };
  } catch (error) {
    const stdout = error.stdout?.trim() ?? "";
    const stderr = error.stderr?.trim() ?? error.message;
    return {
      ok: false,
      stdout,
      stderr,
      output: [stdout, stderr].join("\n").trim(),
    };
  }
}

function pass(message) {
  console.log(`PASS ${message}`);
}

function fail(message, detail = "") {
  console.error(`FAIL ${message}`);
  if (detail) {
    console.error(detail);
  }
}

async function checkPublicDns() {
  const results = await Promise.all(
    PUBLIC_RESOLVERS.map(async (resolver) => {
      const result = await run("dig", [`@${resolver}`, DOMAIN, "A", "+short"]);
      const addresses = result.stdout
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (!result.ok || addresses.length === 0) {
        fail(`DNS lookup failed via ${resolver}`, result.stderr || result.stdout);
        return false;
      }

      pass(`DNS via ${resolver}: ${addresses.join(", ")}`);
      return true;
    }),
  );

  return results.every(Boolean);
}

async function checkHttp() {
  const result = await run("curl", [
    "-fsSIL",
    "--max-time",
    "20",
    `https://${DOMAIN}/`,
  ]);

  if (!result.ok) {
    fail(`HTTPS check failed for ${DOMAIN}`, result.stderr || result.stdout);
    return false;
  }

  const status = result.stdout.match(/^HTTP\/\S+\s+(\d+)/m)?.[1];
  if (status !== "200") {
    fail(`Expected HTTP 200 from ${DOMAIN}, got ${status ?? "unknown"}`, result.stdout);
    return false;
  }

  pass(`HTTPS ${DOMAIN} returns HTTP 200`);
  return true;
}

async function checkVercelAlias() {
  if (process.env.SKIP_VERCEL_INSPECT === "1") {
    pass("Vercel CLI inspection skipped");
    return true;
  }

  const result = await run("vercel", ["inspect", VERCEL_ALIAS], { timeout: 30000 });

  if (!result.ok) {
    fail("Vercel deployment inspection failed", result.output);
    return false;
  }

  if (!result.output.includes(`https://${DOMAIN}`)) {
    fail(`Vercel deployment is missing alias https://${DOMAIN}`, result.output);
    return false;
  }

  if (!result.output.includes("status") || !result.output.includes("Ready")) {
    fail("Vercel deployment is not Ready", result.output);
    return false;
  }

  pass(`Vercel alias is attached to ${VERCEL_ALIAS}`);
  return true;
}

async function main() {
  console.log(`Checking https://${DOMAIN}/`);

  const checks = await Promise.all([
    checkPublicDns(),
    checkHttp(),
    checkVercelAlias(),
  ]);

  if (!checks.every(Boolean)) {
    console.error("\nHealthcheck failed.");
    process.exit(1);
  }

  console.log("\nHealthcheck passed.");
}

main().catch((error) => {
  fail("Unexpected healthcheck error", error.stack || error.message);
  process.exit(1);
});
