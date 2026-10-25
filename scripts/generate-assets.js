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
  const uploadDir = 'C:/Users/matheus/.gemini/antigravity/brain/57467f1a-7108-4fe5-ad6a-f95aa8e59f3e/.user_uploaded';
  const logoUpload = path.join(uploadDir, 'media_1792944981982_4b4c419e.png');
  const photoHero = path.join(uploadDir, 'media_1792948913146_58c11e36.jpg');
  const photoAbout = path.join(uploadDir, 'media_1792949261718_ea8beb50.jpg');

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('app')) {
    fs.mkdirSync('app', { recursive: true });
  }

  console.log('1. Processing Full Brand Logo...');
  const trimmed = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmed);
  fs.writeFileSync('public/logo-morais-ragone.png', trimmed);
  console.log('Full logo saved (public/logo.png).');

  console.log('2. Extracting Monogram MR Emblem...');
  // Monogram bounding box: left: 30, top: 70, width: 290, height: 195
  const rawCrop = await sharp(logoUpload)
    .extract({ left: 30, top: 70, width: 290, height: 195 })
    .png()
    .toBuffer();
    
  const emblemCrop = await sharp(rawCrop)
    .trim()
    .png()
    .toBuffer({ resolveWithObject: true });
    
  console.log('Monogram MR trimmed size:', emblemCrop.info.width, 'x', emblemCrop.info.height);
  
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
      input: await sharp(emblemCrop.data).resize(440, 290, { fit: 'inside' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-emblem.png', emblemTrans);

  // Badge icon for Browser Favicon & Apple Icon with deep luxury obsidian & rose gold metallic border
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#221a17" />
          <stop offset="65%" stop-color="#120e0d" />
          <stop offset="100%" stop-color="#0a0807" />
        </radialGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fcc8ad" />
          <stop offset="40%" stop-color="#e0a689" />
          <stop offset="80%" stop-color="#c58265" />
          <stop offset="100%" stop-color="#794f39" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="12" />
    </svg>
  `);
  
  const emblemInner = await sharp(emblemCrop.data).resize(360, 240, { fit: 'inside' }).png().toBuffer();
  
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
  await sharp(photoHero).jpeg({ quality: 94 }).toFile('public/hero.jpg');
  await sharp(photoHero).jpeg({ quality: 94 }).toFile('public/dra-rithiane-hero.jpg');
  console.log('Hero photo saved (public/hero.jpg, public/dra-rithiane-hero.jpg)');
  
  await sharp(photoAbout).jpeg({ quality: 94 }).toFile('public/about.jpg');
  await sharp(photoAbout).jpeg({ quality: 94 }).toFile('public/dra-rithiane-about.jpg');
  console.log('About photo saved (public/about.jpg, public/dra-rithiane-about.jpg)');

  console.log('SUCCESS: All Morais Ragone Advocacia brand assets, icons and photos generated!');
}

run().catch(console.error);
