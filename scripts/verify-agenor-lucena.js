const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO INTEGRAL — AGENOR LUCENA ADVOCACIA ===\n');

// 1. Verificar arquivos essenciais
const requiredFiles = [
  'public/logo.png',
  'public/logo-trimmed.png',
  'public/logo-white.png',
  'public/emblema-al.png',
  'public/dr-alexandre-lucena.jpg',
  'public/hero.jpg',
  'public/dr-alexandre-portrait.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
  'public/apple-icon.png',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'package.json',
  'PRODUCT.md',
  'README.md'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    const stat = fs.statSync(file);
    console.log(`[OK] ${file} (${stat.size} bytes)`);
  } else {
    console.error(`[ERRO] Arquivo ausente: ${file}`);
    allFilesExist = false;
  }
}

// 2. Verificar se não há rastros do cliente anterior nos arquivos principais
console.log('\n--- Verificando ausência de termos do cliente anterior ---');
const bannedTerms = ['santos teixeira', 'wesley santos', 'dr wesley', 'shopping xv', 'oliveira - mg', 'oliveira · mg'];
const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md'
];

let clean = true;
for (const file of filesToCheck) {
  const content = fs.readFileSync(file, 'utf8').toLowerCase();
  for (const term of bannedTerms) {
    if (content.includes(term.toLowerCase())) {
      console.warn(`[AVISO] Termo proibido '${term}' encontrado em: ${file}`);
      clean = false;
    }
  }
}

if (clean) {
  console.log('[SUCESSO] Nenhum rastro do cliente anterior foi encontrado nos arquivos da aplicação!');
} else {
  console.error('[FALHA] Termos do cliente anterior ainda presentes.');
}

// 3. Verificar dados cruciais do novo cliente
console.log('\n--- Verificando dados cadastrais do novo cliente ---');
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

const checks = [
  { label: 'Telefone / WhatsApp (37) 99971-0510', ok: pageContent.includes('(37) 99971-0510') && pageContent.includes('5537999710510') },
  { label: 'Dr. Alexandre Abreu Lúcio', ok: pageContent.includes('Dr. Alexandre Abreu Lúcio') },
  { label: 'OAB/MG 217.363', ok: pageContent.includes('217.363') },
  { label: 'Endereço Pitangui (Praça Dr. Isauro Epifânio, 141)', ok: pageContent.includes('Praça Dr. Isauro Epifânio, 141') },
  { label: 'Instagram @agenor_lucena', ok: pageContent.includes('@agenor_lucena') },
  { label: '39 avaliações Google 5,0', ok: pageContent.includes('39 avaliações') && pageContent.includes('5,0') },
  { label: 'Favicon no layout com cache-busting', ok: layoutContent.includes('/favicon.ico?v=al1') }
];

for (const check of checks) {
  console.log(`[${check.ok ? 'OK' : 'ERRO'}] ${check.label}`);
}

console.log('\nVerificação concluída!');
