const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING SANTOS TEIXEIRA ADVOGADOS ASSOCIADOS PROJECT ===\n');

let hasErrors = false;

// 1. Check required public files
const requiredFiles = [
  'public/logo.png',
  'public/logo-trimmed.png',
  'public/santos-teixeira-logo-trimmed.png',
  'public/logo-white.png',
  'public/santos-teixeira-logo-white.png',
  'public/emblema-st.png',
  'public/st-monogram.png',
  'public/favicon.ico',
  'public/icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
  'public/apple-icon.png',
  'public/dr-wesley-santos.jpg',
  'public/hero.jpg',
  'public/wesley-santos-portrait.jpg',
  'public/escritorio-santos-teixeira.jpg',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
];

console.log('--- 1. Checking required assets ---');
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    const stat = fs.statSync(file);
    console.log(`[OK] ${file} (${stat.size} bytes)`);
  } else {
    console.error(`[ERROR] Missing file: ${file}`);
    hasErrors = true;
  }
}

// 2. Check for traces of previous clients
console.log('\n--- 2. Checking for old client traces in active code ---');
const forbiddenTerms = [
  'debora',
  'cupertino',
  'matozinhos',
  '99766',
  '99766-1362',
  '106 avaliações',
  'claudomiro',
];

const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md',
];

for (const filePath of filesToCheck) {
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      console.error(`[ERROR] Found old client term "${term}" in ${filePath}`);
      hasErrors = true;
    }
  }
}

// 3. Check for mandatory new client terms
console.log('\n--- 3. Checking for mandatory Santos Teixeira terms ---');
const mandatoryTerms = [
  'Santos Teixeira Advogados',
  '5537999674308',
  '(37) 99967-4308',
  'Oliveira',
  'Shopping XV',
  '41 avaliações',
  'Previdenciário',
  'Usucapião',
  'Família',
];

const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
for (const term of mandatoryTerms) {
  if (pageContent.includes(term)) {
    console.log(`[OK] Found mandatory term "${term}" in app/page.tsx`);
  } else {
    console.error(`[ERROR] Missing mandatory term "${term}" in app/page.tsx`);
    hasErrors = true;
  }
}

// 4. Verify favicon configuration
console.log('\n--- 4. Checking Favicon configuration ---');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
if (layoutContent.includes('favicon.ico') && layoutContent.includes('icon-32x32.png') && layoutContent.includes('apple-icon.png')) {
  console.log('[OK] Favicon and apple-icon tags properly configured in app/layout.tsx');
} else {
  console.error('[ERROR] Favicon tags missing in app/layout.tsx');
  hasErrors = true;
}

if (hasErrors) {
  console.error('\n❌ Verification FAILED with errors.');
  process.exit(1);
} else {
  console.log('\n✅ ALL CHECKS PASSED PERFECTLY FOR SANTOS TEIXEIRA ADVOGADOS ASSOCIADOS!');
}
