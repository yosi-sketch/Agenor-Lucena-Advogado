const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const LOGO_SRC = 'C:/Users/matheus/.gemini/antigravity/brain/35d81253-d7ed-4997-b7d5-faabac42ed16/.user_uploaded/media_1793209249249_e117204d.png';
const PHOTO_SRC = 'C:/Users/matheus/.gemini/antigravity/brain/35d81253-d7ed-4997-b7d5-faabac42ed16/.user_uploaded/media_1793209242057_b2f6bc0b.jpg';

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
  console.log('=== STARTING ASSET SETUP FOR PRADO RAMOS ADVOCACIA (PROFESSIONAL PALETTE) ===');

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('app')) {
    fs.mkdirSync('app', { recursive: true });
  }

  // 1. RAW LOGO COPIES
  console.log('1. Copying and trimming logo files...');
  const logoBuf = fs.readFileSync(LOGO_SRC);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/prado-ramos-logo.png', logoBuf);
  fs.writeFileSync('public/logo-prado-ramos.png', logoBuf);
  fs.writeFileSync('public/logo-original.png', logoBuf);

  // Trimmed version with small margin for crisp display in header
  const trimmedLogo = await sharp(LOGO_SRC)
    .trim()
    .extend({ top: 8, bottom: 8, left: 12, right: 12, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/prado-ramos-logo-trimmed.png', trimmedLogo);
  fs.writeFileSync('public/logo-trimmed.png', trimmedLogo);

  // 2. CREATE LUMINOUS WHITE / PLATINUM LOGO FOR DARK SECTIONS
  console.log('2. Generating white/platinum logo for dark backgrounds...');
  const { data: trimData, info: trimInfo } = await sharp(trimmedLogo).raw().toBuffer({ resolveWithObject: true });
  const w = trimInfo.width;
  const h = trimInfo.height;
  const whiteLogoBuf = Buffer.alloc(w * h * 4);

  for (let i = 0; i < trimData.length; i += 4) {
    const r = trimData[i];
    const g = trimData[i + 1];
    const b = trimData[i + 2];
    const a = trimData[i + 3];

    if (a > 20) {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      const val = Math.min(255, Math.round(255 - lum * 0.42));
      whiteLogoBuf[i] = val; // R
      whiteLogoBuf[i + 1] = Math.min(255, val + 2); // G
      whiteLogoBuf[i + 2] = Math.min(255, val + 3); // B
      whiteLogoBuf[i + 3] = a;
    } else {
      whiteLogoBuf[i] = whiteLogoBuf[i + 1] = whiteLogoBuf[i + 2] = whiteLogoBuf[i + 3] = 0;
    }
  }

  const whiteLogoPng = await sharp(whiteLogoBuf, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/prado-ramos-logo-white.png', whiteLogoPng);
  fs.writeFileSync('public/logo-white.png', whiteLogoPng);

  // 3. EXTRACT "PR" MONOGRAM
  console.log('3. Extracting official "PR" monogram...');
  const baseTrimmed = await sharp(LOGO_SRC).trim().toBuffer();
  const prRawCrop = await sharp(baseTrimmed)
    .extract({ left: 0, top: 0, width: 155, height: 120 })
    .trim()
    .toBuffer({ resolveWithObject: true });

  // Dark PR
  const prDarkBuf = await sharp(prRawCrop.data)
    .extend({ top: 15, bottom: 15, left: 15, right: 15, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/emblema-pr.png', prDarkBuf);
  fs.writeFileSync('public/pr-emblem.png', prDarkBuf);

  // Light/Platinum PR
  const { data: prData, info: prInfo } = await sharp(prRawCrop.data).raw().toBuffer({ resolveWithObject: true });
  const prLightBuf = Buffer.alloc(prInfo.width * prInfo.height * 4);
  for (let i = 0; i < prData.length; i += 4) {
    const r = prData[i];
    const g = prData[i + 1];
    const b = prData[i + 2];
    const a = prData[i + 3];

    if (a > 20) {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      const val = Math.min(255, Math.round(255 - lum * 0.38));
      prLightBuf[i] = val;
      prLightBuf[i + 1] = Math.min(255, val + 2);
      prLightBuf[i + 2] = Math.min(255, val + 4);
      prLightBuf[i + 3] = a;
    } else {
      prLightBuf[i] = prLightBuf[i + 1] = prLightBuf[i + 2] = prLightBuf[i + 3] = 0;
    }
  }

  const prLightPng = await sharp(prLightBuf, {
    raw: { width: prInfo.width, height: prInfo.height, channels: 4 },
  })
    .png()
    .toBuffer();
  fs.writeFileSync('public/emblema-pr-white.png', prLightPng);

  // 4. GENERATE LUXURY BADGE & APP ICONS (512x512) - OXFORD NAVY & CHAMPAGNE GOLD
  console.log('4. Generating luxury badge & app icons (Navy & Gold)...');
  const badgeSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#0f243f" />
        <stop offset="65%" stop-color="#081322" />
        <stop offset="100%" stop-color="#040810" />
      </radialGradient>
      <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f5d17a" />
        <stop offset="45%" stop-color="#c59b4c" />
        <stop offset="80%" stop-color="#e2c275" />
        <stop offset="100%" stop-color="#9e742a" />
      </linearGradient>
      <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#9e742a" />
        <stop offset="50%" stop-color="#f5d17a" />
        <stop offset="100%" stop-color="#9e742a" />
      </linearGradient>
    </defs>
    
    <!-- Outer Shield / Circle with Champagne Gold Border -->
    <rect x="16" y="16" width="480" height="480" rx="110" fill="url(#bgGrad)" stroke="url(#goldBorder)" stroke-width="14" />
    <rect x="34" y="34" width="444" height="444" rx="96" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    
    <!-- Corner Filigrees / Accents -->
    <circle cx="256" cy="50" r="5" fill="#f5d17a" />
    <circle cx="256" cy="462" r="5" fill="#f5d17a" />
    <path d="M 196 66 L 316 66" stroke="url(#goldFiligree)" stroke-width="2" stroke-linecap="round" />
    <path d="M 196 446 L 316 446" stroke="url(#goldFiligree)" stroke-width="2" stroke-linecap="round" />
  </svg>
  `;

  // Scale PR monogram to 300px width for 512x512 badge
  const prForBadge = await sharp(prLightPng)
    .resize(300, null, { fit: 'inside' })
    .toBuffer();

  const badge512 = await sharp(Buffer.from(badgeSvg))
    .composite([{ input: prForBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/pr-badge.png', badge512);
  fs.writeFileSync('public/icon.png', badge512);
  fs.writeFileSync('app/icon.png', badge512);

  // Apple touch icon 180x180
  const appleIcon = await sharp(badge512)
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-icon.png', appleIcon);
  fs.writeFileSync('app/apple-icon.png', appleIcon);

  // Favicon resolutions
  const icon48 = await sharp(badge512).resize(48, 48).png().toBuffer();
  const icon32 = await sharp(badge512).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(badge512).resize(16, 16).png().toBuffer();

  fs.writeFileSync('public/icon-48x48.png', icon48);
  fs.writeFileSync('public/icon-32x32.png', icon32);
  fs.writeFileSync('public/icon-16x16.png', icon16);

  // Multi-resolution ICO
  const icoBuf = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('app/favicon.ico', icoBuf);
  console.log('Favicons and app icons created successfully in public/ and app/');

  // 5. DIRECT COPY OF DRA. ISADORA PRADO PHOTO (UNTOUCHED)
  console.log('5. Copying photo directly...');
  const rawPhoto = fs.readFileSync(PHOTO_SRC);
  fs.writeFileSync('public/isadora-prado-oficial.jpg', rawPhoto);
  fs.writeFileSync('public/hero.jpg', rawPhoto);
  fs.writeFileSync('public/dra-isadora-prado.jpg', rawPhoto);
  console.log('Photo copied directly: size =', rawPhoto.length);

  console.log('=== ALL ASSETS GENERATED SUCCESSFULLY! ===');
}

run().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
