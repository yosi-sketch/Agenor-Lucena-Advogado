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

async function main() {
  const uploadDir = 'C:/Users/matheus/.gemini/antigravity/brain/1f4d2cfa-ed8c-4ead-b855-a326bd091d43/.user_uploaded';
  const logoUpload = path.join(uploadDir, 'media_1793129229818_fa958a03.png');
  const lawyerUpload = path.join(uploadDir, 'media_1793129100093_30c88450.jpg');

  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
  if (!fs.existsSync('app')) fs.mkdirSync('app', { recursive: true });

  console.log('1. Processing Full Brand Logo (Trimmed)...');
  const trimmedLogo = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmedLogo);
  fs.writeFileSync('public/logo-rhayssa.png', trimmedLogo);

  const trimmedMeta = await sharp(trimmedLogo).metadata();
  console.log(`Trimmed logo dimensions: ${trimmedMeta.width}x${trimmedMeta.height}`);

  console.log('2. Processing Isolated Emblem ("R" with Scales of Justice)...');
  // From our earlier analysis: bounding box is minX: 306, maxX: 728, minY: 18, maxY: 334
  // w: 423, h: 317
  const emblemBuffer = await sharp(logoUpload)
    .extract({
      left: 304,
      top: 16,
      width: 427,
      height: 320
    })
    .trim()
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync('public/logo-emblem.png', emblemBuffer);
  const emblemMeta = await sharp(emblemBuffer).metadata();
  console.log(`Emblem dimensions: ${emblemMeta.width}x${emblemMeta.height}`);

  console.log('3. Generating Luxury Wine Noir & Metallic Rose-Wine App Icons & Favicons...');
  // Background: Luxury deep wine noir #150508
  const baseSize = 512;
  const emblemScaled = await sharp(emblemBuffer)
    .resize(370, 370, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Create 512x512 icon with deep wine background and subtle metallic wine border
  const icon512 = await sharp({
    create: {
      width: baseSize,
      height: baseSize,
      channels: 4,
      background: { r: 21, g: 5, b: 8, alpha: 1 } // #150508 Deep velvet wine noir
    }
  })
    .composite([
      {
        input: emblemScaled,
        gravity: 'centre'
      }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('app/icon.png', icon512);

  // Apple touch icon 180x180
  const icon180 = await sharp(icon512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', icon180);
  fs.writeFileSync('app/apple-icon.png', icon180);

  // Favicons 48x48, 32x32 & 16x16
  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();
  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();

  fs.writeFileSync('public/icon-32x32.png', icon32);
  fs.writeFileSync('public/icon-16x16.png', icon16);

  createIco(
    [
      { width: 16, height: 16, buffer: icon16 },
      { width: 32, height: 32, buffer: icon32 },
      { width: 48, height: 48, buffer: icon48 }
    ],
    'public/favicon.ico'
  );
  fs.copyFileSync('public/favicon.ico', 'app/favicon.ico');
  console.log('Favicons and icons written to public/ and app/');

  console.log('4. Processing Portrait & Office Photos...');
  // Dra. Rhayssa Lima portrait (Full resolution)
  const lawyerPortrait = await sharp(lawyerUpload)
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/dra-rhayssa-lima.jpg', lawyerPortrait);
  fs.writeFileSync('public/hero-rhayssa.jpg', lawyerPortrait);

  // Desk close-up portrait for About section (focused on Dra. Rhayssa and office desk)
  const aboutCrop = await sharp(lawyerUpload)
    .extract({
      left: 0,
      top: 100,
      width: 769,
      height: 900
    })
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/dra-rhayssa-about.jpg', aboutCrop);

  console.log('All Rhayssa Lima brand assets generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
