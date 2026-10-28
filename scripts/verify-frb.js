const fs = require('fs');
const path = require('path');

console.log('--- VERIFYING FRB ADVOGADOS SITE INTEGRITY ---');

// 1. Check Public and App Assets
const requiredAssets = [
  'public/logo.png',
  'public/frb-logo.png',
  'public/frb-emblem.png',
  'public/hero.jpg',
  'public/dr-filipe-rabelo.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png'
];

let allAssetsOk = true;
for (const asset of requiredAssets) {
  const p = path.join(process.cwd(), asset);
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] Asset missing: ${asset}`);
    allAssetsOk = false;
  } else {
    const stat = fs.statSync(p);
    console.log(`[PASS] ${asset} (${stat.size} bytes)`);
  }
}

// 2. Check Codebase for Old Client traces
const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md'
];

const oldTerms = ['rhayssa', 'raul soares', '247.321', '247321', '99806-7570'];
let clean = true;

for (const file of filesToCheck) {
  const content = fs.readFileSync(path.join(process.cwd(), file), 'utf-8').toLowerCase();
  for (const term of oldTerms) {
    if (content.includes(term.toLowerCase())) {
      console.error(`[FAIL] Found old term "${term}" in ${file}`);
      clean = false;
    }
  }
}

if (clean) {
  console.log('[PASS] ZERO traces of previous client found in code files!');
}

// 3. Verify New Client Data
const pageContent = fs.readFileSync(path.join(process.cwd(), 'app/page.tsx'), 'utf-8');
const layoutContent = fs.readFileSync(path.join(process.cwd(), 'app/layout.tsx'), 'utf-8');

const checks = [
  { name: 'FRB Advogados brand', ok: pageContent.includes('FRB ADVOGADOS') },
  { name: 'Dr. Filipe Rabelo', ok: pageContent.includes('Dr. Filipe Rabelo') },
  { name: 'Capelinha MG address', ok: pageContent.includes('Capelinha - MG') },
  { name: '10 offices in MG', ok: pageContent.includes('10 Escritórios') || pageContent.includes('10 escritórios') },
  { name: 'WhatsApp 5533988181310', ok: pageContent.includes('5533988181310') },
  { name: 'Phone (33) 98818-1310', ok: pageContent.includes('(33) 98818-1310') },
  { name: 'Google 5.0 Review with 14 reviews', ok: pageContent.includes('14 avaliações') },
  { name: 'Reviewer Fernanda Costa', ok: pageContent.includes('Fernanda Costa') },
  { name: 'Reviewer Adão Alves', ok: pageContent.includes('Adão Alves') },
  { name: 'Favicon in layout.tsx', ok: layoutContent.includes('/favicon.ico?v=frb1') && layoutContent.includes('/apple-icon.png?v=frb1') },
];

for (const c of checks) {
  if (c.ok) {
    console.log(`[PASS] ${c.name}`);
  } else {
    console.error(`[FAIL] ${c.name}`);
  }
}
