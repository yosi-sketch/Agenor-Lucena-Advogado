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
  const logoUpload = 'C:/Users/matheus/.gemini/antigravity/brain/bb6bc9c1-58e6-4e1f-a407-43f698982d32/.user_uploaded/media_1792925315616_e502eb3d.png';
  const photoDesk = 'C:/Users/matheus/.gemini/antigravity/brain/bb6bc9c1-58e6-4e1f-a407-43f698982d32/.user_uploaded/media_1792925422549_2d78aa31.jpg';
  const photoPortrait = 'C:/Users/matheus/.gemini/antigravity/brain/bb6bc9c1-58e6-4e1f-a407-43f698982d32/.user_uploaded/media_1792925561875_9e442362.jpg';

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  console.log('1. Processing Full Brand Logo...');
  const trimmed = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmed);
  fs.writeFileSync('public/logo-luana-moreira.png', trimmed);
  console.log('Full logo saved.');

  console.log('2. Extracting Monogram LM Emblem...');
  // minX = 285, maxX = 753, minY = 15, maxY = 360
  const emblemCrop = await sharp(logoUpload)
    .extract({ left: 285, top: 15, width: 468, height: 346 })
    .trim()
    .toBuffer({ resolveWithObject: true });
    
  console.log('Emblem trimmed:', emblemCrop.info.width, 'x', emblemCrop.info.height);
  
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
      input: await sharp(emblemCrop.data).resize(440, 440, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-emblem.png', emblemTrans);

  // Badge icon for Browser Favicon & Apple Icon with dark obsidian & gold border
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1c1712" />
          <stop offset="100%" stop-color="#0c0a08" />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e2c299" />
          <stop offset="50%" stop-color="#b89269" />
          <stop offset="100%" stop-color="#5a402a" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="14" />
    </svg>
  `);
  
  const emblemInner = await sharp(emblemCrop.data).resize(360, 360, { fit: 'contain' }).png().toBuffer();
  
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

  console.log('3. Processing Photos...');
  await sharp(photoDesk).jpeg({ quality: 95 }).toFile('public/hero.jpg');
  await sharp(photoDesk).jpeg({ quality: 95 }).toFile('public/dra-luana-escritorio.jpg');
  
  await sharp(photoPortrait).jpeg({ quality: 95 }).toFile('public/about.jpg');
  await sharp(photoPortrait).jpeg({ quality: 95 }).toFile('public/dra-luana-moreira.jpg');

  console.log('All brand assets, icons and photos generated successfully!');
}

run().catch(console.error);
