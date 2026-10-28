const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function setupAssets() {
  const emblemSrc = 'C:/Users/matheus/.gemini/antigravity/brain/d6575dc6-014b-4356-87a8-5e69fc85b695/.user_uploaded/media_1793195020438_bef86ae4.jpg';
  const teamSrc = 'C:/Users/matheus/.gemini/antigravity/brain/d6575dc6-014b-4356-87a8-5e69fc85b695/.user_uploaded/media_1793195228102_36b2e043.jpg';
  const logoSrc = 'C:/Users/matheus/.gemini/antigravity/brain/d6575dc6-014b-4356-87a8-5e69fc85b695/.user_uploaded/media_1793195298408_9951a071.png';

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  // 1. Copy Logo
  console.log('Processing logo...');
  const logoBuf = fs.readFileSync(logoSrc);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-ferreira-bolleli.png', logoBuf);

  // 2. Process Team Photo
  console.log('Processing team photo...');
  await sharp(teamSrc)
    .jpeg({ quality: 95 })
    .toFile('public/equipe-ferreira-bolleli.jpg');
  
  await sharp(teamSrc)
    .jpeg({ quality: 95 })
    .toFile('public/hero.jpg');

  await sharp(teamSrc)
    .jpeg({ quality: 95 })
    .toFile('public/dr-ferreira-bolleli.jpg');

  // 3. Process Circular Emblem
  console.log('Processing circular emblem...');
  const embMeta = await sharp(emblemSrc).metadata();
  console.log('Emblem size:', embMeta.width, embMeta.height);

  const cx = 509;
  const cy = 488.5;
  const r = 441; // covers the outer gold ring

  // Create an RGBA buffer with the circular alpha mask directly
  const { data, info } = await sharp(emblemSrc)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const masked = Buffer.alloc(info.width * info.height * 4);
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const srcIdx = (y * info.width + x) * info.channels;
      const dstIdx = (y * info.width + x) * 4;
      const r_pix = data[srcIdx];
      const g_pix = data[srcIdx + 1];
      const b_pix = data[srcIdx + 2];

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      masked[dstIdx] = r_pix;
      masked[dstIdx + 1] = g_pix;
      masked[dstIdx + 2] = b_pix;

      // Antialiased circle edge
      if (dist <= r - 1.5) {
        masked[dstIdx + 3] = 255;
      } else if (dist <= r + 1.5) {
        const factor = 1 - (dist - (r - 1.5)) / 3;
        masked[dstIdx + 3] = Math.round(Math.max(0, Math.min(255, factor * 255)));
      } else {
        masked[dstIdx + 3] = 0;
      }
    }
  }

  // Crop square around circle
  const size = Math.round(r * 2);
  const left = Math.max(0, Math.round(cx - r));
  const top = Math.max(0, Math.round(cy - r));

  const maskedEmblem = await sharp(masked, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .extract({ left, top, width: size, height: size })
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblema-fb.png', maskedEmblem);
  fs.writeFileSync('public/fb-emblem.png', maskedEmblem);

  // 4. Generate Favicons and App Icons from maskedEmblem
  console.log('Generating favicons & app icons...');
  const icon512 = await sharp(maskedEmblem)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('app/icon.png', icon512);

  const icon180 = await sharp(maskedEmblem)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-icon.png', icon180);
  fs.writeFileSync('app/apple-icon.png', icon180);

  const icon48 = await sharp(maskedEmblem)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon-48x48.png', icon48);

  const icon32 = await sharp(maskedEmblem)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);

  const icon16 = await sharp(maskedEmblem)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
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

  console.log('Assets setup completed successfully!');
}

setupAssets().catch(console.error);
