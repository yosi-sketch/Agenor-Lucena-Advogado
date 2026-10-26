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
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    entries.push(entry);
    imageBuffers.push(item.buffer);
    offset += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...imageBuffers]);
  fs.writeFileSync(outputPath, icoBuffer);
}

async function run() {
  const uploadDir = 'C:/Users/matheus/.gemini/antigravity/brain/dbc6c40e-4d29-4637-b632-ae46deca393e/.user_uploaded';
  const logoUpload = path.join(uploadDir, 'media_1793046310674_d9c364ca.png');
  const photoSitting = path.join(uploadDir, 'media_1793046161565_5e91cf99.jpg');
  const photoStandingSuit = path.join(uploadDir, 'media_1793046318435_9b61aa9d.jpg');

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('app')) {
    fs.mkdirSync('app', { recursive: true });
  }

  console.log('1. Processing Full Brand Logo...');
  const trimmed = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmed);
  fs.writeFileSync('public/logo-yan-rezende.png', trimmed);
  console.log('Full logo saved (public/logo.png, public/logo-yan-rezende.png).');

  console.log('2. Extracting Monogram YR Emblem...');
  // The monogram square frame spans from x=36 to x=282, y=30 to y=308
  const cropStep1 = await sharp(logoUpload)
    .extract({ left: 35, top: 28, width: 250, height: 280 })
    .png()
    .toBuffer();

  const rawCrop = await sharp(cropStep1)
    .trim()
    .png()
    .toBuffer({ resolveWithObject: true });
    
  console.log('Monogram YR trimmed size:', rawCrop.info.width, 'x', rawCrop.info.height);
  
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
      input: await sharp(rawCrop.data).resize(400, 400, { fit: 'inside' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-emblem.png', emblemTrans);
  fs.writeFileSync('public/logo-monogram.png', emblemTrans);
  console.log('Emblem saved (public/logo-emblem.png, public/logo-monogram.png).');

  // Badge icon for Browser Favicon & Apple Icon with deep luxury obsidian plum & metallic rose-wine gradient border
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#240c19" />
          <stop offset="55%" stop-color="#15050e" />
          <stop offset="100%" stop-color="#090206" />
        </radialGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="25%" stop-color="#f2d6de" />
          <stop offset="60%" stop-color="#c992a2" />
          <stop offset="85%" stop-color="#8f415c" />
          <stop offset="100%" stop-color="#4a192c" />
        </linearGradient>
      </defs>
      <!-- Squircle rounded background -->
      <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="12" />
    </svg>
  `);

  const emblemForBadge = await sharp(rawCrop.data)
    .resize(320, 320, { fit: 'inside' })
    .toBuffer();

  const badge512 = await sharp(badgeSvg)
    .composite([{ input: emblemForBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/icon.png', badge512);
  fs.writeFileSync('app/icon.png', badge512);

  const apple180 = await sharp(badge512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', apple180);
  fs.writeFileSync('app/apple-icon.png', apple180);

  const icon32 = await sharp(badge512).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);

  const icon16 = await sharp(badge512).resize(16, 16).png().toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);

  const icon48 = await sharp(badge512).resize(48, 48).png().toBuffer();

  createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ], 'public/favicon.ico');

  createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ], 'app/favicon.ico');

  console.log('Favicons and App Icons created in public/ and app/.');

  console.log('3. Processing Photos of Yan Rezende...');
  // Standing suit with red tie -> Hero Photo (public/hero.jpg)
  const heroJpg = await sharp(photoStandingSuit)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/hero.jpg', heroJpg);
  fs.writeFileSync('public/yan-rezende-hero.jpg', heroJpg);
  console.log('Hero photo saved (public/hero.jpg, public/yan-rezende-hero.jpg).');

  // Sitting in chair with light blazer -> About / Bio Photo (public/about.jpg)
  const aboutJpg = await sharp(photoSitting)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/about.jpg', aboutJpg);
  fs.writeFileSync('public/yan-rezende-about.jpg', aboutJpg);
  console.log('About photo saved (public/about.jpg, public/yan-rezende-about.jpg).');

  console.log('ALL ASSETS SUCCESSFULLY GENERATED!');
}

run().catch(console.error);
