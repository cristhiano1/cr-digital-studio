/**
 * Build-time static route generator.
 *
 * Reads the single source of truth (src/data/routeMeta.json) and the
 * Vite-built dist/index.html template, then generates a dedicated HTML
 * file for every known public route so that crawlers and social-share
 * fetchers receive correct metadata without executing JavaScript.
 *
 * Usage: node scripts/generate-routes.mjs
 * Called automatically at the end of `npm run build`.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')

/* ── Load metadata source of truth ─────────────────────────────── */
const routeMeta = JSON.parse(
  readFileSync(join(root, 'src', 'data', 'routeMeta.json'), 'utf-8')
)

/* ── Read Vite-built template ──────────────────────────────────── */
const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

/* ── Helpers ───────────────────────────────────────────────────── */
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function generateHtml(routeKey, meta) {
  const fullTitle = esc(`${meta.title} | ${routeMeta.siteName}`)
  const desc = esc(meta.description)
  const robots = meta.robots
  const noCanonical = meta.noCanonical === true
  const canonicalUrl = noCanonical
    ? null
    : `${routeMeta.canonicalBase}${routeKey}`

  let html = template

  // ── <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${fullTitle}</title>`)

  // ── meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${desc}" />`
  )

  // ── robots (insert before description if not present)
  if (!html.includes('meta name="robots"')) {
    html = html.replace(
      '<meta name="description"',
      `<meta name="robots" content="${robots}" />\n    <meta name="description"`
    )
  }

  // ── canonical
  if (noCanonical) {
    html = html.replace(/^[ \t]*<link rel="canonical" href="[^"]*" \/>[ \t]*\r?\n/m, '')
  } else {
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
  }

  // ── OG title
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${fullTitle}" />`
  )

  // ── OG description
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${desc}" />`
  )

  // ── OG url
  if (noCanonical) {
    html = html.replace(
      /^[ \t]*<meta property="og:url" content="[^"]*" \/>[ \t]*\r?\n/m,
      ''
    )
  } else {
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
  }

  // ── Twitter title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${fullTitle}" />`
  )

  // ── Twitter description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${desc}" />`
  )

  return html
}

/* ── Generate files ────────────────────────────────────────────── */
let count = 0

for (const [routeKey, meta] of Object.entries(routeMeta.routes)) {
  const html = generateHtml(routeKey, meta)

  let outputPath
  if (routeKey === '/') {
    outputPath = join(distDir, 'index.html')
  } else if (routeKey === '404') {
    outputPath = join(distDir, '404.html')
  } else {
    // /about → dist/about/index.html
    outputPath = join(distDir, routeKey.slice(1), 'index.html')
  }

  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, html, 'utf-8')

  const rel = outputPath.replace(root, '').replace(/\\/g, '/')
  console.log(`  ✓ ${routeKey} → ${rel}`)
  count++
}

console.log(`\n✓ Generated ${count} static route files`)
