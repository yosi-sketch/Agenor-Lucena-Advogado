const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING FERREIRA E BOLLELI ADVOGADOS SITE INTEGRITY ===');

// 1. Check Public and App Assets
const requiredAssets = [
  'public/logo.png',
  'public/logo-ferreira-bolleli.png',
  'public/emblema-fb.png',
  'public/fb-emblem.png',
  'public/hero.jpg',
  'public/equipe-ferreira-bolleli.jpg',
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

const oldTerms = [
  'FRB',
  'Filipe',
  'Rabelo',
  'Capelinha',
  '98818-1310',
  '988181310',
  'frbadvogados',
  'rhayssa',
  'raul soares',
  '247.321',
  '247321',
  '99806-7570',
  'Santa Maria do Suaçuí'
];

let clean = true;
for (const file of filesToCheck) {
  const p = path.join(process.cwd(), file);
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  for (const term of oldTerms) {
    // case insensitive search
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    const matches = content.match(regex);
    if (matches && matches.length > 0) {
      console.error(`[FAIL] Old term "${term}" found in ${file} (${matches.length} occurrences)`);
      clean = false;
    }
  }
}

if (clean) {
  console.log('[PASS] ZERO old client traces found in checked files!');
}

// 3. Check New Client Details Presence
const newRequiredTerms = [
  'Ferreira',
  'Bolleli',
  'Nanuque',
  '98715-6234',
  'ferreiraebolleliadv',
  '4,9'
];

let newDetailsPresent = true;
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
for (const term of newRequiredTerms) {
  if (!pageContent.includes(term)) {
    console.error(`[FAIL] New required detail "${term}" not found in app/page.tsx`);
    newDetailsPresent = false;
  } else {
    console.log(`[PASS] New required detail "${term}" confirmed in app/page.tsx`);
  }
}

if (allAssetsOk && clean && newDetailsPresent) {
  console.log('\n>>> ALL CHECKS PASSED PERFECTLY! <<<');
} else {
  console.error('\n>>> SOME CHECKS FAILED! Please fix before proceeding. <<<');
  process.exit(1);
}
