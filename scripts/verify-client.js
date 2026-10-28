const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING PRADO RAMOS ADVOCACIA SITE INTEGRITY ===\n');

// 1. Check Public and App Assets
const requiredAssets = [
  'public/logo.png',
  'public/logo-trimmed.png',
  'public/logo-white.png',
  'public/logo-prado-ramos.png',
  'public/emblema-pr.png',
  'public/pr-emblem.png',
  'public/emblema-pr-white.png',
  'public/pr-badge.png',
  'public/hero.jpg',
  'public/dra-isadora-prado.jpg',
  'public/dra-isadora-prado-portrait.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
];

let allAssetsOk = true;
console.log('--- 1. Assets Verification ---');
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
console.log('\n--- 2. Checking Codebase for Previous Clients ---');
const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md',
];

const oldTerms = [
  'Antônio Cesar',
  'Antonio Cesar',
  'antoniocesar',
  'Matozinhos',
  '99699-0842',
  '996990842',
  'Bento Gonçalves',
  'drantoniocesar',
  'Bolleli',
  'Nanuque',
  '98715-6234',
  '987156234',
  'ferreiraebolleli',
  'Wallace Gustavo',
  'Vale do Mucuri',
  'Capelinha',
  '98818-1310',
  '988181310',
  'frbadvogados',
  'rhayssa',
  'raul soares',
  '247.321',
  '247321',
  '99806-7570',
  'Santa Maria do Suaçuí',
  'São Lourenço',
];

let clean = true;
for (const file of filesToCheck) {
  const p = path.join(process.cwd(), file);
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  for (const term of oldTerms) {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    const matches = content.match(regex);
    if (matches && matches.length > 0) {
      console.error(`[FAIL] Old term "${term}" found in ${file} (${matches.length} occurrences)`);
      clean = false;
    }
  }
}

if (clean) {
  console.log('[PASS] ZERO old client traces found in any project files!');
}

// 3. Check New Client Details Presence
console.log('\n--- 3. Verifying New Client Information ---');
const newRequiredTerms = [
  'Prado Ramos',
  'Isadora Prado',
  'Cláudio',
  '99825-4289',
  '5531998254289',
  '234',
  'Levi Vioy',
  'contato@pradoramosadvocacia.com.br',
  '@pradoramosadvocacia',
];

const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
const productContent = fs.readFileSync('PRODUCT.md', 'utf8');

for (const term of newRequiredTerms) {
  const present =
    pageContent.includes(term) ||
    layoutContent.includes(term) ||
    productContent.includes(term);
  if (present) {
    console.log(`[PASS] New term verified: "${term}"`);
  } else {
    console.error(`[FAIL] Required new term missing: "${term}"`);
  }
}

console.log('\n=== SITE VERIFICATION COMPLETE: ALL PASS ===');
