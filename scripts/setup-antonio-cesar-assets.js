const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function setupAntonioCesarAssets() {
  const photoSrc = 'C:/Users/matheus/.gemini/antigravity/brain/034fadef-c6e0-4b7b-b561-980f8925d001/.user_uploaded/media_1793197851933_14cd7288.jpg';
  const logoSrc = 'C:/Users/matheus/.gemini/antigravity/brain/034fadef-c6e0-4b7b-b561-980f8925d001/.user_uploaded/media_1793197862653_ae44e4b4.png';
  const bannerSrc = 'C:/Users/matheus/.gemini/antigravity/brain/034fadef-c6e0-4b7b-b561-980f8925d001/.user_uploaded/media_1793197983458_3d3c8bb8.jpg';

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  // 1. Process Logo
  console.log('1. Processing Logo...');
  const logoBuf = fs.readFileSync(logoSrc);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-antonio-cesar.png', logoBuf);

  // 2. Process Dr. Antonio Cesar Photos
  console.log('2. Processing Dr. Antonio Cesar Photos...');
  await sharp(photoSrc)
    .jpeg({ quality: 95 })
    .toFile('public/hero.jpg');

  await sharp(photoSrc)
    .jpeg({ quality: 95 })
    .toFile('public/antonio-cesar.jpg');

  await sharp(photoSrc)
    .jpeg({ quality: 95 })
    .toFile('public/dr-antonio-cesar.jpg');

  // Also create a square/portrait optimized version for mobile or about section
  await sharp(photoSrc)
    .extract({ left: 30, top: 0, width: 709, height: 880 })
    .jpeg({ quality: 95 })
    .toFile('public/dr-antonio-cesar-portrait.jpg');

  // 3. Process Banner Mockup
  console.log('3. Processing Banner Mockup...');
  await sharp(bannerSrc)
    .jpeg({ quality: 95 })
    .toFile('public/banner-antonio-cesar.jpg');

  // Extract the right side luxury desk setup (lady justice, legal books, AC notebook) for use in authority / about section
  await sharp(bannerSrc)
    .extract({ left: 520, top: 0, width: 504, height: 673 })
    .jpeg({ quality: 95 })
    .toFile('public/escritorio-ac.jpg');

  // 4. Extract AC Monogram from Logo
  console.log('4. Extracting AC Monogram...');
  // Bounding box from inspection: minX: 40, maxX: 319, minY: 36, maxY: 310
  // Let's add slight margin
  const cropX = 35;
  const cropY = 32;
  const cropW = 290;
  const cropH = 285;

  const acMonogramRaw = await sharp(logoSrc)
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .toBuffer();

  // Make a square transparent monogram with padding
  const size = Math.max(cropW, cropH) + 30;
  const acMonogramSquare = await sharp(acMonogramRaw)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblema-ac.png', acMonogramSquare);
  fs.writeFileSync('public/ac-emblem.png', acMonogramSquare);

  // Also create a luxury dark navy badge version with gold AC monogram for favicon and luxury badges
  // Deep midnight navy circle with gold AC monogram
  const badgeSize = 512;
  const badgeCanvas = Buffer.alloc(badgeSize * badgeSize * 4);
  const cx = badgeSize / 2;
  const cy = badgeSize / 2;
  const rOuter = 246;
  const rInner = 240;

  for (let y = 0; y < badgeSize; y++) {
    for (let x = 0; x < badgeSize; x++) {
      const idx = (y * badgeSize + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const d = Math.sqrt(dx * dx + dy * dy);

      if (d <= rInner) {
        // Dark luxury navy background (#071526)
        badgeCanvas[idx] = 7;      // R
        badgeCanvas[idx + 1] = 21;  // G
        badgeCanvas[idx + 2] = 38;  // B
        badgeCanvas[idx + 3] = 255; // A
      } else if (d <= rOuter) {
        // Metallic Gold outer ring (#d8a84e)
        badgeCanvas[idx] = 216;     // R
        badgeCanvas[idx + 1] = 168; // G
        badgeCanvas[idx + 2] = 78;  // B
        badgeCanvas[idx + 3] = 255; // A
      } else if (d <= rOuter + 2) {
        // Antialias outer ring
        const factor = 1 - (d - rOuter) / 2;
        badgeCanvas[idx] = 216;
        badgeCanvas[idx + 1] = 168;
        badgeCanvas[idx + 2] = 78;
        badgeCanvas[idx + 3] = Math.round(Math.max(0, Math.min(255, factor * 255)));
      } else {
        badgeCanvas[idx + 3] = 0;
      }
    }
  }

  const badgeBg = await sharp(badgeCanvas, {
    raw: {
      width: badgeSize,
      height: badgeSize,
      channels: 4
    }
  }).png().toBuffer();

  // Overlay AC monogram onto badge
  const monogramForBadge = await sharp(acMonogramRaw)
    .resize(360, 360, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const finalFaviconBadge = await sharp(badgeBg)
    .composite([
      {
        input: monogramForBadge,
        gravity: 'centre'
      }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync('public/ac-badge.png', finalFaviconBadge);

  // 5. Generate Favicons and App Icons
  console.log('5. Generating Favicons & App Icons...');
  const icon512 = await sharp(finalFaviconBadge)
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('app/icon.png', icon512);

  const icon180 = await sharp(finalFaviconBadge)
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-icon.png', icon180);
  fs.writeFileSync('app/apple-icon.png', icon180);

  const icon48 = await sharp(finalFaviconBadge)
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon-48x48.png', icon48);

  const icon32 = await sharp(finalFaviconBadge)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);

  const icon16 = await sharp(finalFaviconBadge)
    .resize(16, 16)
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);

  // Generate multi-size .ico file (contains 16x16, 32x32, 48x48 PNG frames)
  const frames = [
    { size: 16, buf: icon16 },
    { size: 32, buf: icon32 },
    { size: 48, buf: icon48 }
  ];

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type 1 = icon
  icoHeader.writeUInt16LE(frames.length, 4); // count

  let offset = 6 + frames.length * 16;
  const dirEntries = [];
  for (const frame of frames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(frame.size >= 256 ? 0 : frame.size, 0); // width
    entry.writeUInt8(frame.size >= 256 ? 0 : frame.size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(frame.buf.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += frame.buf.length;
  }

  const icoBuffer = Buffer.concat([
    icoHeader,
    ...dirEntries,
    ...frames.map(f => f.buf)
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);

  console.log('All Antonio Cesar Advocacia assets processed and generated successfully!');
}

setupAntonioCesarAssets().catch(console.error);
