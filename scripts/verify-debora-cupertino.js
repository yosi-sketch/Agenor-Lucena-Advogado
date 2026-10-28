const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING DÉBORA CUPERTINO ADVOCACIA PROJECT ===');

// 1. Files to check for leftover strings
const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md',
];

const forbiddenTerms = [
  'Prado Ramos',
  'prado ramos',
  'pradoramos',
  'Isadora Prado',
  'isadora prado',
  'isadora-prado',
  'Cláudio - MG',
  'Cláudio, Divinópolis',
  '99825-4289',
  '998254289',
  'extravio de bagagem',
  'companhias aéreas',
  'fraudes do pix',
];

let errors = 0;

for (const file of filesToCheck) {
  if (!fs.existsSync(file)) {
    console.error(`[ERROR] File missing: ${file}`);
    errors++;
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  for (const term of forbiddenTerms) {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      console.error(`[LEFTOVER DETECTED] "${term}" found in ${file}`);
      errors++;
    }
  }
}

// 2. Asset checks
const requiredAssets = [
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
  'public/icon-192x192.png',
  'public/logo.png',
  'public/logo-trimmed.png',
  'public/logo-white.png',
  'public/emblema-dc.png',
  'public/hero.jpg',
  'public/dra-debora-cupertino.jpg',
  'public/debora-cupertino-square.jpg',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
];

for (const asset of requiredAssets) {
  if (!fs.existsSync(asset)) {
    console.error(`[MISSING ASSET] ${asset}`);
    errors++;
  } else {
    const stat = fs.statSync(asset);
    if (stat.size === 0) {
      console.error(`[EMPTY ASSET] ${asset}`);
      errors++;
    }
  }
}

// 3. Check client info in app/page.tsx
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const requiredStrings = [
  '5531997661362',
  '(31) 99766-1362',
  'R. Claudomiro Cupertino, 55 A',
  'Matozinhos',
  '106 avaliações',
  'Protegendo Seus Direitos',
  'Direito das Famílias',
  'Salário Maternidade',
  'BPC/LOAS',
  'Atendimento Humanizado',
  '@deboracupertinoadvocacia',
];

for (const str of requiredStrings) {
  if (!pageContent.includes(str)) {
    console.error(`[MISSING CLIENT INFO] "${str}" not found in app/page.tsx`);
    errors++;
  }
}

if (errors === 0) {
  console.log('✅ ALL CHECKS PASSED PERFECTLY! ZERO LEFTOVERS, ALL ASSETS AND CLIENT INFO VERIFIED.');
} else {
  console.error(`❌ FOUND ${errors} ISSUES TO FIX.`);
  process.exit(1);
}
