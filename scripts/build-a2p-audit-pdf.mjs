import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const ROOT = path.resolve(path.dirname(__filename), '..')

const mdPath = path.join(ROOT, 'A2P_AUDIT_REPORT.md')
const htmlPath = path.join(ROOT, 'A2P_AUDIT_REPORT.html')
const pdfPath = path.join(ROOT, 'A2P_AUDIT_REPORT.pdf')

const CHROME_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
]

const chromeExe = CHROME_CANDIDATES.find((p) => existsSync(p))
if (!chromeExe) {
  console.error('Could not find Chrome or Edge in standard install locations.')
  process.exit(1)
}

const markdown = await readFile(mdPath, 'utf8')

const markedUrl = pathToFileURL(
  path.join(ROOT, 'node_modules', '.ppd-tmp', 'node_modules', 'marked', 'lib', 'marked.esm.js'),
).href

let marked
try {
  ({ marked } = await import(markedUrl))
} catch {
  console.log('Installing marked into a temp folder (one-time)…')
  const tmp = path.join(ROOT, 'node_modules', '.ppd-tmp')
  await mkdir(tmp, { recursive: true })
  const npm = spawnSync(
    process.platform === 'win32' ? 'npm.cmd' : 'npm',
    ['install', '--no-save', '--no-audit', '--no-fund', '--prefix', tmp, 'marked@12'],
    { stdio: 'inherit' },
  )
  if (npm.status !== 0) {
    console.error('npm install marked failed')
    process.exit(1)
  }
  ;({ marked } = await import(markedUrl))
}

marked.setOptions({ gfm: true, breaks: false })
const bodyHtml = marked.parse(markdown)

const css = `
  :root {
    --navy-900: #0D1B2A;
    --navy-800: #1A2744;
    --navy-700: #1B3A5C;
    --patriot-red: #C41E3A;
    --red-dark: #9E1830;
    --green-ok: #0F7A3A;
    --amber: #B7791F;
    --off-white: #F8F9FA;
    --warm-50: #F5F3F0;
    --warm-100: #E8E4DF;
    --warm-400: #9C958C;
    --warm-600: #6B6560;
    --warm-800: #3A3632;
  }
  @page { size: Letter; margin: 0.6in 0.6in 0.75in 0.6in; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
    color: var(--warm-800);
    font-size: 10pt;
    line-height: 1.55;
    background: #fff;
  }
  .page { padding: 0; }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", Georgia, serif;
    color: var(--navy-900);
    line-height: 1.2;
    margin: 1.4em 0 0.5em;
    page-break-after: avoid;
  }
  h1 {
    font-size: 22pt; font-weight: 900;
    border-bottom: 3px solid var(--patriot-red);
    padding-bottom: 0.3em; margin-top: 0;
  }
  h2 {
    font-size: 15pt; font-weight: 800;
    border-bottom: 1px solid var(--warm-100);
    padding-bottom: 0.25em;
    margin-top: 1.6em;
  }
  h3 { font-size: 12pt; font-weight: 700; color: var(--navy-800); }
  h4 { font-size: 10.5pt; font-weight: 700; color: var(--navy-800); }
  p { margin: 0.55em 0; }
  strong { color: var(--navy-900); font-weight: 600; }
  a { color: var(--patriot-red); text-decoration: none; }
  ul, ol { margin: 0.5em 0 0.7em; padding-left: 1.3em; }
  li { margin: 0.18em 0; }
  li > p { margin: 0.15em 0; }
  hr {
    border: 0;
    border-top: 1px solid var(--warm-100);
    margin: 1.6em 0;
  }
  blockquote {
    margin: 0.8em 0;
    padding: 0.6em 1em;
    border-left: 4px solid var(--patriot-red);
    background: var(--warm-50);
    color: var(--warm-800);
    font-style: normal;
  }
  blockquote p { margin: 0.3em 0; }
  code {
    font-family: "Consolas", "Menlo", monospace;
    font-size: 9pt;
    background: var(--warm-50);
    border: 1px solid var(--warm-100);
    border-radius: 3px;
    padding: 0.05em 0.35em;
    color: var(--navy-800);
  }
  pre {
    background: var(--navy-900);
    color: #E8E4DF;
    padding: 0.9em 1em;
    border-radius: 6px;
    font-size: 8.5pt;
    line-height: 1.45;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    page-break-inside: avoid;
  }
  pre code {
    background: transparent;
    border: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.8em 0 1em;
    font-size: 9pt;
    page-break-inside: auto;
  }
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; }
  thead th {
    background: var(--navy-900);
    color: #fff;
    text-align: left;
    font-weight: 600;
    padding: 0.5em 0.6em;
    font-size: 8.5pt;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  tbody td {
    padding: 0.45em 0.6em;
    border-bottom: 1px solid var(--warm-100);
    vertical-align: top;
  }
  tbody tr:nth-child(even) td { background: var(--off-white); }
  .content h1:first-of-type { display: none; }

  .cover {
    background: var(--navy-900);
    color: #fff;
    padding: 0.9in 0.7in;
    margin: -0.05in -0.05in 0.5in;
    position: relative;
    overflow: hidden;
  }
  .cover .kicker {
    font-size: 10pt;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--patriot-red);
    margin-bottom: 0.8em;
  }
  .cover h1 {
    font-size: 28pt;
    color: #fff;
    border: 0;
    margin: 0 0 0.25em;
    padding: 0;
    line-height: 1.1;
  }
  .cover .sub {
    font-size: 12pt;
    color: rgba(255,255,255,0.72);
    max-width: 6in;
    line-height: 1.5;
  }
  .cover .meta {
    margin-top: 1.4em;
    font-size: 9pt;
    color: rgba(255,255,255,0.55);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1em;
    row-gap: 0.25em;
  }
  .cover .meta dt {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.7);
  }
  .cover .meta dd { margin: 0; color: #fff; }
  .cover .accent {
    position: absolute;
    right: -60px; top: -60px;
    width: 240px; height: 240px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .cover .accent2 {
    position: absolute;
    right: 40px; bottom: -80px;
    width: 160px; height: 160px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.06);
  }
`

const coverHtml = `
<section class="cover">
  <div class="accent"></div>
  <div class="accent2"></div>
  <div class="kicker">Operation 1776 — A2P 10DLC</div>
  <h1>Website Compliance Audit</h1>
  <p class="sub">Audit of jennykamprath.com against the Operation 1776 A2P Website Compliance SOP — 19-item checklist, TOS &amp; Privacy Policy required elements, per-form consent review, and submission readiness.</p>
  <dl class="meta">
    <dt>Client</dt><dd>Friends of Jenny Kamprath</dd>
    <dt>Audit Date</dt><dd>2026-04-25</dd>
    <dt>Methodology</dt><dd>Static source inspection at HEAD</dd>
  </dl>
</section>
`

const fullHtml = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>A2P 10DLC Website Compliance Audit — Friends of Jenny Kamprath</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <div class="page">
    ${coverHtml}
    <div class="content">${bodyHtml}</div>
  </div>
</body>
</html>
`

await writeFile(htmlPath, fullHtml, 'utf8')
console.log('Wrote HTML:', htmlPath)

const htmlUrl = pathToFileURL(htmlPath).href
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  htmlUrl,
]
console.log('Running Chrome headless…')
const res = spawnSync(chromeExe, args, { stdio: 'inherit' })
if (res.status !== 0) {
  console.error('Chrome print-to-pdf failed, status', res.status)
  process.exit(res.status || 1)
}
console.log('Wrote PDF:', pdfPath)
