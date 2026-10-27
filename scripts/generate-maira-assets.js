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
  const uploadDir = 'C:/Users/matheus/.gemini/antigravity/brain/a7d22776-5e68-478a-8dcf-387061832c70/.user_uploaded';
  const logoUpload = path.join(uploadDir, 'media_1793101106153_7a45b5d3.png');
  const officeUpload = path.join(uploadDir, 'media_1793101305761_bd33bb80.jpg');
  const lawyerUpload = path.join(uploadDir, 'media_1793101691945_c9cab8d9.jpg');

  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
  if (!fs.existsSync('app')) fs.mkdirSync('app', { recursive: true });

  console.log('1. Processing Full Brand Logo (Trimmed)...');
  const trimmedLogo = await sharp(logoUpload).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo.png', trimmedLogo);
  fs.writeFileSync('public/logo-maira-gomes.png', trimmedLogo);

  const trimmedMeta = await sharp(trimmedLogo).metadata();
  console.log(`Trimmed logo dimensions: ${trimmedMeta.width}x${trimmedMeta.height}`);

  console.log('2. Processing Isolated Emblem (MR with Scales of Justice)...');
  // From our earlier analysis: row 33 to row 245 of original 1024x512
  // Let's extract the top half containing the MR emblem
  const originalLogo = sharp(logoUpload);
  const emblemBuffer = await originalLogo
    .extract({
      left: 200,
      top: 25,
      width: 624,
      height: 230
    })
    .trim()
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync('public/logo-emblem.png', emblemBuffer);
  const emblemMeta = await sharp(emblemBuffer).metadata();
  console.log(`Emblem dimensions: ${emblemMeta.width}x${emblemMeta.height}`);

  console.log('3. Generating Luxury Obsidian & Gold App Icons & Favicons...');
  // Create a 512x512 square icon with dark luxury background and subtle gold border
  const baseSize = 512;
  const emblemScaled = await sharp(emblemBuffer)
    .resize(380, 240, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon512 = await sharp({
    create: {
      width: baseSize,
      height: baseSize,
      channels: 4,
      background: { r: 11, g: 19, b: 32, alpha: 1 } // #0b1320 Deep obsidian midnight
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

  // Favicons 32x32 & 16x16
  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();

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
  // Dra. Maira Gomes portrait
  const lawyerPortrait = await sharp(lawyerUpload)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/dra-maira-gomes.jpg', lawyerPortrait);

  // Office wall sign photo (framed perfectly around the 3D golden letters with balanced top/bottom margins)
  const officePhoto = await sharp(officeUpload)
    .extract({ left: 0, top: 80, width: 768, height: 640 })
    .jpeg({ quality: 96, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync('public/escritorio-sede.jpg', officePhoto);

  console.log('All brand assets generated successfully!');
}

main().catch(console.error);
