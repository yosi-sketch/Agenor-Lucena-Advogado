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
  const uploadDir = 'C:/Users/matheus/.gemini/antigravity/brain/b55cfa47-e27f-4dc6-a5a6-0cb89398663a/.user_uploaded';
  const logoUpload = path.join(uploadDir, 'media_1793049852942_0cfed82e.png');
  const photoUpload = path.join(uploadDir, 'media_1793049844546_cda18e05.jpg');

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('app')) {
    fs.mkdirSync('app', { recursive: true });
  }

  console.log('1. Processing Full Brand Logo...');
  const trimmedLogo = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmedLogo);
  fs.writeFileSync('public/logo-white.png', trimmedLogo);
  fs.writeFileSync('public/logo-jessica-bernardes.png', trimmedLogo);
  console.log('Full logo saved (public/logo.png, public/logo-white.png, public/logo-jessica-bernardes.png).');

  console.log('2. Extracting Scales & JB Monogram Emblem...');
  // The emblem is on the left: left: 15, top: 45, width: 310, height: 270
  const cropStep1 = await sharp(logoUpload)
    .extract({ left: 15, top: 45, width: 310, height: 270 })
    .png()
    .toBuffer();

  const rawCrop = await sharp(cropStep1)
    .trim()
    .png()
    .toBuffer({ resolveWithObject: true });

  console.log('Emblem trimmed size:', rawCrop.info.width, 'x', rawCrop.info.height);

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
      input: await sharp(rawCrop.data).resize(420, 360, { fit: 'inside' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/logo-emblem.png', emblemTrans);
  fs.writeFileSync('public/logo-monogram.png', emblemTrans);
  console.log('Emblem saved (public/logo-emblem.png, public/logo-monogram.png).');

  console.log('3. Creating Premium Luxury Navy & Champagne Gold Badge Icon for Favicon...');
  // High-end badge with deep midnight navy radial gradient + metallic champagne gold border
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#182844" />
          <stop offset="50%" stop-color="#0e1728" />
          <stop offset="100%" stop-color="#080d17" />
        </radialGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fdf6eb" />
          <stop offset="35%" stop-color="#ecdecc" />
          <stop offset="70%" stop-color="#d7bca5" />
          <stop offset="100%" stop-color="#81644e" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ecdecc" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </linearGradient>
      </defs>
      <!-- Base Rounded Rectangle -->
      <rect x="12" y="12" width="488" height="488" rx="108" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="12" />
      <rect x="22" y="22" width="468" height="234" rx="98" fill="url(#glowGrad)" />
    </svg>
  `);

  const emblemResized = await sharp(rawCrop.data)
    .resize(340, 300, { fit: 'inside' })
    .toBuffer();

  const badge512 = await sharp(badgeSvg)
    .composite([{
      input: emblemResized,
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  // Save 512x512 icons
  fs.writeFileSync('public/icon.png', badge512);
  fs.writeFileSync('app/icon.png', badge512);

  // Apple touch icon 180x180
  const apple180 = await sharp(badge512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', apple180);
  fs.writeFileSync('app/apple-icon.png', apple180);

  // Favicon sizes: 16x16, 32x32, 48x48
  const ico16 = await sharp(badge512).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(badge512).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(badge512).resize(48, 48).png().toBuffer();
  const ico64 = await sharp(badge512).resize(64, 64).png().toBuffer();

  fs.writeFileSync('public/icon-16x16.png', ico16);
  fs.writeFileSync('public/icon-32x32.png', ico32);

  createIco([
    { width: 16, height: 16, buffer: ico16 },
    { width: 32, height: 32, buffer: ico32 },
    { width: 48, height: 48, buffer: ico48 },
    { width: 64, height: 64, buffer: ico64 },
  ], 'public/favicon.ico');

  createIco([
    { width: 16, height: 16, buffer: ico16 },
    { width: 32, height: 32, buffer: ico32 },
    { width: 48, height: 48, buffer: ico48 },
    { width: 64, height: 64, buffer: ico64 },
  ], 'app/favicon.ico');

  console.log('Favicons and App Icons created successfully in public/ and app/.');

  console.log('4. Processing Portrait Photos for Dra. Jéssica Bernardes...');
  // Photo 1: Hero (full portrait high resolution)
  const heroJpg = await sharp(photoUpload)
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/hero.jpg', heroJpg);
  fs.writeFileSync('public/jessica-bernardes-hero.jpg', heroJpg);

  // Photo 2: About (tastefully focused on portrait upper body)
  const aboutJpg = await sharp(photoUpload)
    .extract({ left: 40, top: 20, width: 780, height: 950 })
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/about.jpg', aboutJpg);
  fs.writeFileSync('public/jessica-bernardes-about.jpg', aboutJpg);

  console.log('Hero and About portraits generated successfully.');
  console.log('All brand assets successfully updated!');
}

run().catch((err) => {
  console.error('Error during asset generation:', err);
  process.exit(1);
});
