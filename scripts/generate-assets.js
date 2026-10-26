const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(pngBuffers, outputPath) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];
  const imageBuffers = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);

    entries.push(entry);
    imageBuffers.push(item.buffer);
    offset += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...imageBuffers]);
  fs.writeFileSync(outputPath, icoBuffer);
}

async function run() {
  const uploadDir = 'C:/Users/matheus/.gemini/antigravity/brain/f2513213-8ddb-4592-a48b-9ce4b7fd7194/.user_uploaded';
  const logoUpload = path.join(uploadDir, 'media_1793013187084_b872c273.png');
  const photoFabricia = path.join(uploadDir, 'media_1793013068412_cfde8e7c.jpg');
  const photoTeam = path.join(uploadDir, 'media_1793013138056_686a86a6.jpg');

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('app')) {
    fs.mkdirSync('app', { recursive: true });
  }

  console.log('1. Processing Full Brand Logo...');
  const trimmed = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmed);
  fs.writeFileSync('public/logo-alves-fragoso.png', trimmed);
  console.log('Full logo saved (public/logo.png, public/logo-alves-fragoso.png).');

  console.log('2. Extracting Monogram AF Emblem...');
  // Emblem bounds: left=296, top=19, width=436, height=318
  const rawCrop = await sharp(logoUpload)
    .extract({ left: 290, top: 15, width: 448, height: 326 })
    .png()
    .toBuffer();
    
  const emblemCrop = await sharp(rawCrop)
    .trim()
    .png()
    .toBuffer({ resolveWithObject: true });
    
  console.log('Monogram AF trimmed size:', emblemCrop.info.width, 'x', emblemCrop.info.height);
  
  // Transparent 512x512 emblem
  const emblemTrans = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(emblemCrop.data).resize(430, 310, { fit: 'inside' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-emblem.png', emblemTrans);

  // Badge icon for Browser Favicon & Apple Icon with deep luxury midnight obsidian & silver metallic border
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#1a202c" />
          <stop offset="60%" stop-color="#0f141d" />
          <stop offset="100%" stop-color="#07090e" />
        </radialGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="35%" stop-color="#e2e8f0" />
          <stop offset="70%" stop-color="#94a3b8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="14" />
    </svg>
  `);
  
  const emblemInner = await sharp(emblemCrop.data).resize(360, 260, { fit: 'inside' }).png().toBuffer();
  
  const appIconBuffer = await sharp(badgeSvg)
    .composite([{
      input: emblemInner,
      gravity: 'center'
    }])
    .png()
    .toBuffer();
    
  fs.writeFileSync('public/icon.png', appIconBuffer);
  fs.writeFileSync('app/icon.png', appIconBuffer);
  fs.writeFileSync('public/apple-icon.png', appIconBuffer);
  fs.writeFileSync('app/apple-icon.png', appIconBuffer);

  const icon32 = await sharp(appIconBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);
  const icon16 = await sharp(appIconBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);
  const icon48 = await sharp(appIconBuffer).resize(48, 48).png().toBuffer();

  const icoBuffers = [
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ];
  createIco(icoBuffers, 'public/favicon.ico');
  createIco(icoBuffers, 'app/favicon.ico');
  console.log('Favicons (.ico, .png, apple-icon) created in public/ and app/.');

  console.log('3. Processing Photos...');
  await sharp(photoFabricia).jpeg({ quality: 95 }).toFile('public/hero.jpg');
  await sharp(photoFabricia).jpeg({ quality: 95 }).toFile('public/dra-fabricia-hero.jpg');
  console.log('Hero photo saved (public/hero.jpg, public/dra-fabricia-hero.jpg)');
  
  await sharp(photoTeam).jpeg({ quality: 95 }).toFile('public/about.jpg');
  await sharp(photoTeam).jpeg({ quality: 95 }).toFile('public/equipe-alves-fragoso.jpg');
  console.log('About/Team photo saved (public/about.jpg, public/equipe-alves-fragoso.jpg)');

  console.log('SUCCESS: All Alves e Fragoso Advocacia brand assets, icons and photos generated!');
}

run().catch(console.error);
