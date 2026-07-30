import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const repositoryDir = path.resolve(projectDir, "..");
const hostingPath = path.join(projectDir, ".openai", "hosting.json");
const workerPath = path.join(projectDir, "worker", "index.js");
const distWorkerPath = path.join(projectDir, "dist", "server", "index.js");
const distHostingPath = path.join(
  projectDir,
  "dist",
  ".openai",
  "hosting.json",
);

const explicitFiles = ["index.html", "pending.js", "pending.json"];
const includedTrees = [
  "credit-tracker/dashboard",
  "credit-tracker/macro-monitor/output",
  "credit-tracker/sentiment-monitor/output",
  "stability-monitor/dashboard",
  "stability-monitor/data",
  "stability-monitor/docs",
  "stability-monitor/scripts/output",
];
const allowedExtensions = new Set([".html", ".js", ".json", ".css", ".md"]);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};
const automationRoutes = [
  "/credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json",
  "/credit-tracker/sentiment-monitor/output/credit-sentiment-data.js",
  "/credit-tracker/sentiment-monitor/output/daily-credit-alert-pending.json",
  "/credit-tracker/dashboard/p2p-pending.js",
  "/credit-tracker/dashboard/macro-pending.js",
  "/credit-tracker/macro-monitor/output/macro-pending.json",
  "/stability-monitor/scripts/output/street-heat-latest.html",
  "/stability-monitor/scripts/street_heat_history.json",
  "/pending.json",
  "/pending.js",
];

async function collectTree(relativeDir) {
  const absoluteDir = path.join(repositoryDir, relativeDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTree(relativePath)));
    } else if (entry.isFile() && allowedExtensions.has(path.extname(entry.name))) {
      files.push(relativePath);
    }
  }
  return files;
}

const relativeFiles = [...explicitFiles];
for (const tree of includedTrees) {
  relativeFiles.push(...(await collectTree(tree)));
}
relativeFiles.sort();

const bundledFiles = [];
for (const relativePath of relativeFiles) {
  const extension = path.extname(relativePath);
  const contents = await readFile(path.join(repositoryDir, relativePath), "utf8");
  bundledFiles.push([
    `/${relativePath.replaceAll("\\", "/")}`,
    { contentType: mimeTypes[extension], contents },
  ]);
}

const workerSource = `const FILES = new Map(${JSON.stringify(bundledFiles)});
const AUTOMATION_ROUTES = new Set(${JSON.stringify(automationRoutes)});

const SECURITY_HEADERS = {
  "cache-control": "private, no-store, max-age=0",
  "referrer-policy": "same-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "SAMEORIGIN",
};

async function ensureAutomationTable(env) {
  if (!env?.DB) return false;
  await env.DB.prepare(
    "CREATE TABLE IF NOT EXISTS automation_files (" +
    "path TEXT PRIMARY KEY, content_type TEXT NOT NULL, contents TEXT NOT NULL, " +
    "updated_at TEXT NOT NULL)"
  ).run();
  return true;
}

async function dynamicFile(env, pathname) {
  if (!AUTOMATION_ROUTES.has(pathname) || !(await ensureAutomationTable(env))) {
    return null;
  }
  return env.DB.prepare(
    "SELECT content_type AS contentType, contents, updated_at AS updatedAt " +
    "FROM automation_files WHERE path = ?"
  ).bind(pathname).first();
}

async function responseFor(pathname, env) {
  const resolvedPath = pathname === "/" ? "/index.html" : pathname;
  const file = (await dynamicFile(env, resolvedPath)) || FILES.get(resolvedPath);
  if (!file) {
    return new Response("Not found", {
      status: 404,
      headers: { ...SECURITY_HEADERS, "content-type": "text/plain; charset=utf-8" },
    });
  }
  return new Response(file.contents, {
    headers: {
      ...SECURITY_HEADERS,
      "content-type": file.contentType,
    },
  });
}

async function ingestAutomationFiles(request, env) {
  if (!(await ensureAutomationTable(env))) {
    return new Response(JSON.stringify({ error: "D1 is not configured" }), {
      status: 503,
      headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
    });
  }
  const expected = env.DASHBOARD_INGEST_TOKEN || "";
  const supplied = request.headers.get("x-dashboard-ingest-token") || "";
  if (!expected || supplied !== expected) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
    });
  }
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid JSON" }), {
      status: 400,
      headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
    });
  }
  const entries = Object.entries(payload.files || {});
  if (!entries.length || entries.length > AUTOMATION_ROUTES.size) {
    return new Response(JSON.stringify({ error: "invalid file batch" }), {
      status: 400,
      headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
    });
  }
  let totalSize = 0;
  const now = new Date().toISOString();
  const statements = [];
  for (const [path, file] of entries) {
    if (!AUTOMATION_ROUTES.has(path) || typeof file?.contents !== "string") {
      return new Response(JSON.stringify({ error: "route not allowed", path }), {
        status: 400,
        headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
      });
    }
    totalSize += file.contents.length;
    if (totalSize > 5_000_000) {
      return new Response(JSON.stringify({ error: "batch too large" }), {
        status: 413,
        headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
      });
    }
    statements.push(
      env.DB.prepare(
        "INSERT INTO automation_files(path, content_type, contents, updated_at) " +
        "VALUES (?, ?, ?, ?) ON CONFLICT(path) DO UPDATE SET " +
        "content_type=excluded.content_type, contents=excluded.contents, " +
        "updated_at=excluded.updated_at"
      ).bind(
        path,
        String(file.contentType || "text/plain; charset=utf-8"),
        file.contents,
        now,
      )
    );
  }
  await env.DB.batch(statements);
  return new Response(JSON.stringify({ updated: entries.length, updatedAt: now }), {
    headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
  });
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    if (url.pathname === "/api/automation-files") {
      if (request.method === "POST") return ingestAutomationFiles(request, env);
      if (request.method === "GET") {
        if (!(await ensureAutomationTable(env))) {
          return new Response(JSON.stringify({ files: [] }), {
            headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
          });
        }
        const rows = await env.DB.prepare(
          "SELECT path, updated_at AS updatedAt FROM automation_files ORDER BY path"
        ).all();
        return new Response(JSON.stringify({ files: rows.results || [] }), {
          headers: { ...SECURITY_HEADERS, "content-type": "application/json" },
        });
      }
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { ...SECURITY_HEADERS, allow: "GET, HEAD" },
      });
    }
    const response = await responseFor(decodeURIComponent(url.pathname), env);
    return request.method === "HEAD"
      ? new Response(null, { status: response.status, headers: response.headers })
      : response;
  },
};
`;

const hostingConfig = JSON.parse(await readFile(hostingPath, "utf8"));
await rm(path.join(projectDir, "dist"), { recursive: true, force: true });
await mkdir(path.dirname(workerPath), { recursive: true });
await mkdir(path.dirname(distWorkerPath), { recursive: true });
await mkdir(path.dirname(distHostingPath), { recursive: true });
await writeFile(workerPath, workerSource, "utf8");
await writeFile(distWorkerPath, workerSource, "utf8");
await writeFile(
  distHostingPath,
  `${JSON.stringify(hostingConfig, null, 2)}\n`,
  "utf8",
);
await cp(
  path.join(projectDir, ".openai", "drizzle"),
  path.join(projectDir, "dist", ".openai", "drizzle"),
  { recursive: true },
);

console.log(`Bundled ${bundledFiles.length} approved static files.`);
