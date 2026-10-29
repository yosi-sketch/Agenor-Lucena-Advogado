const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const LOGO_SRC = 'C:/Users/matheus/.gemini/antigravity/brain/e034c799-4539-4b6d-b11e-3f50bc6a666c/.user_uploaded/media_1793285554886_95bf95cd.png';

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
  console.log('=== STARTING ASSET SETUP FOR SANTOS TEIXEIRA ADVOGADOS ASSOCIADOS ===');

  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
  if (!fs.existsSync('app')) fs.mkdirSync('app', { recursive: true });

  // 1. RAW & TRIMMED LOGO
  console.log('1. Copying and trimming logo files...');
  const logoBuf = fs.readFileSync(LOGO_SRC);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-original.png', logoBuf);
  fs.writeFileSync('public/santos-teixeira-logo.png', logoBuf);

  // Trimmed logo with balanced padding
  const trimmedLogo = await sharp(LOGO_SRC)
    .trim()
    .extend({ top: 12, bottom: 12, left: 16, right: 16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-trimmed.png', trimmedLogo);
  fs.writeFileSync('public/santos-teixeira-logo-trimmed.png', trimmedLogo);

  // 2. EXTRACT ST MONOGRAM
  console.log('2. Extracting ST monogram...');
  const stMonogramBuf = await sharp(LOGO_SRC)
    .extract({ left: 95, top: 20, width: 250, height: 305 })
    .toBuffer();

  const stMonogramTrimmed = await sharp(stMonogramBuf).trim().toBuffer();

  const stMonogramPadded = await sharp(stMonogramTrimmed)
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblema-st.png', stMonogramPadded);
  fs.writeFileSync('public/st-monogram.png', stMonogramPadded);
  fs.writeFileSync('public/logo-symbol.png', stMonogramPadded);

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
      // Check if pixel is gold or ivory
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      // Invert shadows and amplify gold/white for dark mode contrast
      if (r > 160 && g > 130 && b < 100) {
        // Rich gold borders - enhance glow
        whiteLogoBuf[i] = Math.min(255, Math.round(r * 1.15));
        whiteLogoBuf[i + 1] = Math.min(255, Math.round(g * 1.15));
        whiteLogoBuf[i + 2] = Math.min(255, Math.round(b * 1.25));
        whiteLogoBuf[i + 3] = a;
      } else if (r > 200 && g > 200 && b > 200) {
        // Bright white/ivory body
        whiteLogoBuf[i] = 255;
        whiteLogoBuf[i + 1] = 255;
        whiteLogoBuf[i + 2] = 255;
        whiteLogoBuf[i + 3] = a;
      } else {
        // Midtones/shadows - lighten so they don't vanish on black
        whiteLogoBuf[i] = Math.min(255, Math.round(r * 1.35 + 40));
        whiteLogoBuf[i + 1] = Math.min(255, Math.round(g * 1.30 + 35));
        whiteLogoBuf[i + 2] = Math.min(255, Math.round(b * 1.20 + 20));
        whiteLogoBuf[i + 3] = a;
      }
    } else {
      whiteLogoBuf[i] = whiteLogoBuf[i + 1] = whiteLogoBuf[i + 2] = whiteLogoBuf[i + 3] = 0;
    }
  }

  const whiteLogoPng = await sharp(whiteLogoBuf, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-white.png', whiteLogoPng);
  fs.writeFileSync('public/santos-teixeira-logo-white.png', whiteLogoPng);

  // 4. GENERATE HIGH CONTRAST PRESTIGE FAVICON
  console.log('4. Generating high-contrast luxury favicon...');
  const iconCanvasSize = 512;
  const stResized = await sharp(stMonogramPadded)
    .resize(360, 360, { fit: 'inside' })
    .toBuffer();

  const svgBg = Buffer.from(`
    <svg width="${iconCanvasSize}" height="${iconCanvasSize}" viewBox="0 0 ${iconCanvasSize} ${iconCanvasSize}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#141C2B" />
          <stop offset="60%" stop-color="#0B0F19" />
          <stop offset="100%" stop-color="#05080E" />
        </radialGradient>
        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F5DE88" />
          <stop offset="50%" stop-color="#D4AF37" />
          <stop offset="100%" stop-color="#8C651F" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${iconCanvasSize}" height="${iconCanvasSize}" rx="110" fill="url(#bgGrad)" />
      <rect x="12" y="12" width="${iconCanvasSize - 24}" height="${iconCanvasSize - 24}" rx="98" fill="none" stroke="url(#goldBorder)" stroke-width="8" stroke-opacity="0.85" />
    </svg>
  `);

  const bgBuffer = await sharp(svgBg).png().toBuffer();

  // Composite the ST monogram in the center of the luxurious rounded tile
  const finalIcon512 = await sharp(bgBuffer)
    .composite([{ input: stResized, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/icon.png', finalIcon512);
  fs.writeFileSync('app/icon.png', finalIcon512);

  // Generate Apple Touch Icon (180x180)
  const appleIcon = await sharp(finalIcon512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', appleIcon);
  fs.writeFileSync('public/apple-touch-icon.png', appleIcon);
  fs.writeFileSync('app/apple-icon.png', appleIcon);

  // Generate 192x192
  const icon192 = await sharp(finalIcon512).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192.png', icon192);

  // Generate smaller PNG icons for browsers
  const icon48 = await sharp(finalIcon512).resize(48, 48).png().toBuffer();
  const icon32 = await sharp(finalIcon512).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(finalIcon512).resize(16, 16).png().toBuffer();

  fs.writeFileSync('public/icon-48x48.png', icon48);
  fs.writeFileSync('public/icon-32x32.png', icon32);
  fs.writeFileSync('public/icon-16x16.png', icon16);
  fs.writeFileSync('public/favicon-32x32.png', icon32);
  fs.writeFileSync('public/favicon-16x16.png', icon16);

  // Multi-resolution ICO
  const icoData = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
  ]);
  fs.writeFileSync('public/favicon.ico', icoData);
  fs.writeFileSync('app/favicon.ico', icoData);

  console.log('=== SANTOS TEIXEIRA ASSETS SETUP FINISHED SUCCESSFULLY ===');
}

run().catch(console.error);
