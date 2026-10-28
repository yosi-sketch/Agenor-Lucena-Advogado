const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const LOGO_SRC = 'C:/Users/matheus/.gemini/antigravity/brain/fb447d5f-3621-48af-bad8-b7c2907191fb/.user_uploaded/media_1793212213009_df5c8581.png';
const PHOTO_SRC = 'C:/Users/matheus/.gemini/antigravity/brain/fb447d5f-3621-48af-bad8-b7c2907191fb/.user_uploaded/media_1793212222656_efc8f39e.jpg';

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // Number of images

  let offset = 6 + count * 16;
  const dirEntries = [];

  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((p) => p.buffer)]);
}

async function run() {
  console.log('=== STARTING ASSET SETUP FOR DÉBORA CUPERTINO ADVOCACIA ===');

  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
  if (!fs.existsSync('app')) fs.mkdirSync('app', { recursive: true });

  // 1. RAW LOGO
  console.log('1. Copying and trimming logo files...');
  const logoBuf = fs.readFileSync(LOGO_SRC);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/debora-cupertino-logo.png', logoBuf);
  fs.writeFileSync('public/logo-debora-cupertino.png', logoBuf);
  fs.writeFileSync('public/logo-original.png', logoBuf);

  // Trimmed logo with small padding
  const trimmedLogo = await sharp(LOGO_SRC)
    .trim()
    .extend({ top: 10, bottom: 10, left: 14, right: 14, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-trimmed.png', trimmedLogo);
  fs.writeFileSync('public/debora-cupertino-logo-trimmed.png', trimmedLogo);

  // 2. EXTRACT DC MONOGRAM
  console.log('2. Extracting DC monogram...');
  const dcMonogramBuf = await sharp(LOGO_SRC)
    .extract({ left: 350, top: 6, width: 352, height: 182 })
    .trim()
    .png()
    .toBuffer();
  fs.writeFileSync('public/emblema-dc.png', dcMonogramBuf);
  fs.writeFileSync('public/dc-monogram.png', dcMonogramBuf);

  // 3. GENERATE LUMINOUS / WHITE LOGO FOR DARK SECTIONS
  console.log('3. Generating luminous logo for dark backgrounds...');
  const { data: trimData, info: trimInfo } = await sharp(trimmedLogo).raw().toBuffer({ resolveWithObject: true });
  const w = trimInfo.width;
  const h = trimInfo.height;
  const whiteLogoBuf = Buffer.alloc(w * h * 4);

  for (let i = 0; i < trimData.length; i += 4) {
    const r = trimData[i];
    const g = trimData[i + 1];
    const b = trimData[i + 2];
    const a = trimData[i + 3];

    if (a > 15) {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      const val = Math.min(255, Math.round(255 - lum * 0.35));
      whiteLogoBuf[i] = val; // R
      whiteLogoBuf[i + 1] = Math.min(255, val + 1); // G
      whiteLogoBuf[i + 2] = Math.min(255, val + 3); // B
      whiteLogoBuf[i + 3] = a;
    } else {
      whiteLogoBuf[i] = whiteLogoBuf[i + 1] = whiteLogoBuf[i + 2] = whiteLogoBuf[i + 3] = 0;
    }
  }

  const whiteLogoPng = await sharp(whiteLogoBuf, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-white.png', whiteLogoPng);
  fs.writeFileSync('public/debora-cupertino-logo-white.png', whiteLogoPng);

  // 4. PHOTO ASSETS
  console.log('4. Processing Dra. Débora Cupertino photos...');
  const photoBuf = fs.readFileSync(PHOTO_SRC);
  fs.writeFileSync('public/debora-cupertino-hero.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/debora-cupertino-oficial.jpg', photoBuf);

  // Clean studio background portrait with 4:5 aspect ratio
  const { data: rawPhoto, info: photoInfo } = await sharp(PHOTO_SRC).raw().toBuffer({ resolveWithObject: true });
  const cleaned = Buffer.from(rawPhoto);
  const pw = photoInfo.width;
  const ph = photoInfo.height;

  for (let y = 0; y < ph; y++) {
    const idxL = (y * pw + 12) * 3;
    const rL = rawPhoto[idxL], gL = rawPhoto[idxL+1], bL = rawPhoto[idxL+2];

    let deboraX = 450;
    if (y < 120) deboraX = 700;
    else if (y < 200) deboraX = 525;
    else if (y < 350) deboraX = 490;
    else if (y < 550) deboraX = 455;
    else if (y < 750) deboraX = 465;
    else deboraX = 440;

    const rightCleanX = deboraX - 8;
    const idxR = (y * pw + rightCleanX) * 3;
    let rR = rawPhoto[idxR], gR = rawPhoto[idxR+1], bR = rawPhoto[idxR+2];

    if (rR > 40 || gR > 75) {
      rR = Math.max(0, Math.min(15, Math.round(rL * 0.25)));
      gR = Math.max(10, Math.min(35, Math.round(gL * 0.4)));
      bR = Math.max(30, Math.min(75, Math.round(bL * 0.55)));
    }

    for (let x = 0; x <= rightCleanX; x++) {
      const idx = (y * pw + x) * 3;
      const t = x / rightCleanX;
      const ease = (1 - Math.cos(t * Math.PI)) / 2;
      const dither = ((x * 13 + y * 7) % 5) - 2;

      cleaned[idx] = Math.max(0, Math.min(255, Math.round(rL * (1 - ease) + rR * ease + dither)));
      cleaned[idx + 1] = Math.max(0, Math.min(255, Math.round(gL * (1 - ease) + gR * ease + dither)));
      cleaned[idx + 2] = Math.max(0, Math.min(255, Math.round(bL * (1 - ease) + bR * ease + dither)));
    }

    for (let x = rightCleanX + 1; x < deboraX; x++) {
      const idx = (y * pw + x) * 3;
      const blendT = (x - rightCleanX) / (deboraX - rightCleanX);
      cleaned[idx] = Math.round(cleaned[idx] * (1 - blendT) + rawPhoto[idx] * blendT);
      cleaned[idx + 1] = Math.round(cleaned[idx + 1] * (1 - blendT) + rawPhoto[idx + 1] * blendT);
      cleaned[idx + 2] = Math.round(cleaned[idx + 2] * (1 - blendT) + rawPhoto[idx + 2] * blendT);
    }
  }

  // Remove top right handle from portrait region
  for (let y = 40; y < 85; y++) {
    for (let x = 440; x < 740; x++) {
      const idx = (y * pw + x) * 3;
      const r = rawPhoto[idx], g = rawPhoto[idx+1], b = rawPhoto[idx+2];
      if (r > 60 || g > 80 || b > 140) {
        const refIdx = (y * pw + 430) * 3;
        cleaned[idx] = cleaned[refIdx];
        cleaned[idx + 1] = cleaned[refIdx + 1];
        cleaned[idx + 2] = cleaned[refIdx + 2];
      }
    }
  }

  // Cropped portrait of Dra. Débora in 4:5 ratio with headroom and zero cut-off text
  const portraitBuf = await sharp(cleaned, { raw: { width: pw, height: ph, channels: 3 } })
    .extract({ left: 132, top: 40, width: 640, height: 800 })
    .jpeg({ quality: 96 })
    .toBuffer();
  fs.writeFileSync('public/dra-debora-cupertino.jpg', portraitBuf);
  fs.writeFileSync('public/debora-cupertino-portrait.jpg', portraitBuf);

  // Square crop for bio cards
  const squareBuf = await sharp(cleaned, { raw: { width: pw, height: ph, channels: 3 } })
    .extract({ left: 240, top: 40, width: 532, height: 532 })
    .jpeg({ quality: 96 })
    .toBuffer();
  fs.writeFileSync('public/debora-cupertino-square.jpg', squareBuf);

  // 5. GENERATE HIGH CONTRAST PRESTIGE FAVICON
  console.log('5. Generating high-contrast luxury favicon...');
  const iconCanvasSize = 512;
  const dcResized = await sharp(dcMonogramBuf)
    .resize(360, 360, { fit: 'inside' })
    .toBuffer();

  const dcResizedMeta = await sharp(dcResized).metadata();

  const svgBg = Buffer.from(
    '<svg width="' + iconCanvasSize + '" height="' + iconCanvasSize + '" viewBox="0 0 ' + iconCanvasSize + ' ' + iconCanvasSize + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">' +
          '<stop offset="0%" stop-color="#0e2a56" />' +
          '<stop offset="60%" stop-color="#061835" />' +
          '<stop offset="100%" stop-color="#020b18" />' +
        '</radialGradient>' +
        '<linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">' +
          '<stop offset="0%" stop-color="#f5dc8b" />' +
          '<stop offset="50%" stop-color="#c89b3c" />' +
          '<stop offset="100%" stop-color="#7a5214" />' +
        '</linearGradient>' +
      '</defs>' +
      '<rect x="8" y="8" width="496" height="496" rx="100" fill="url(#bgGrad)" stroke="url(#goldBorder)" stroke-width="16" />' +
    '</svg>'
  );

  const topOffset = Math.round((iconCanvasSize - dcResizedMeta.height) / 2);
  const leftOffset = Math.round((iconCanvasSize - dcResizedMeta.width) / 2);

  const icon512 = await sharp(svgBg)
    .composite([{ input: dcResized, top: topOffset, left: leftOffset }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('app/icon.png', icon512);

  const icon192 = await sharp(icon512).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192x192.png', icon192);

  const apple180 = await sharp(icon512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', apple180);
  fs.writeFileSync('app/apple-icon.png', apple180);

  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();
  fs.writeFileSync('public/icon-48x48.png', icon48);

  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);

  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);

  // Multi-resolution ICO
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);

  console.log('=== ALL ASSETS SUCCESSFULLY GENERATED ===');
}

run().catch(console.error);
