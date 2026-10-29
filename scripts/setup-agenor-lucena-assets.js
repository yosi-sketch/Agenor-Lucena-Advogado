const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/702766e0-6859-44ab-aa57-bac0cd0bcb74/.user_uploaded/media_1793290537569_077bd0fb.png';
const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/702766e0-6859-44ab-aa57-bac0cd0bcb74/.user_uploaded/media_1793290551473_a1e09d63.jpg';

async function run() {
  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });

  // 1. Logo
  console.log('Processing logo...');
  const logoBuf = fs.readFileSync(uploadedLogo);
  fs.writeFileSync('public/logo.png', logoBuf);

  // Trimmed logo
  await sharp(logoBuf)
    .trim()
    .toFile('public/logo-trimmed.png');

  // Emblem (AL + wreath) - rows 20 to 309, cols 314 to 721
  const emblemSharp = sharp(logoBuf).extract({
    left: 314,
    top: 20,
    width: 721 - 314 + 1,
    height: 309 - 20 + 1
  });
  await emblemSharp.toFile('public/emblema-al.png');

  // Also create a logo for dark backgrounds / high visibility
  await sharp('public/logo-trimmed.png')
    .resize({ width: 800 })
    .toFile('public/logo-white.png');

  console.log('Logo files written.');

  // 2. Photo
  console.log('Processing photo...');
  const photoBuf = fs.readFileSync(uploadedPhoto);
  fs.writeFileSync('public/dr-alexandre-lucena.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/dr-alexandre-portrait.jpg', photoBuf);
  fs.writeFileSync('public/agenor-lucena.jpg', photoBuf);

  // 3. Favicon generation
  console.log('Generating favicons...');
  // A dark luxury rounded tile with gold stroke and the brilliant golden AL emblem in the center
  const createIconSquare = async (size) => {
    const badgeSize = size;
    const emblemSize = Math.round(size * 0.76);
    
    // Resize emblem
    const resizedEmblem = await sharp('public/emblema-al.png')
      .resize({
        width: emblemSize,
        height: emblemSize,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    const rx = Math.round(badgeSize * 0.22);
    const strokeW = Math.max(1, Math.round(size * 0.03));
    const circleSvg = Buffer.from(
      '<svg width="' + badgeSize + '" height="' + badgeSize + '" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="' + badgeSize + '" height="' + badgeSize + '" rx="' + rx + '" fill="#0c121e"/>' +
      '<rect width="' + (badgeSize - 2) + '" height="' + (badgeSize - 2) + '" x="1" y="1" rx="' + rx + '" fill="none" stroke="#c59b27" stroke-width="' + strokeW + '" stroke-opacity="0.6"/>' +
      '</svg>'
    );

    return sharp(circleSvg)
      .composite([{
        input: resizedEmblem,
        gravity: 'centre'
      }])
      .png()
      .toBuffer();
  };

  const buf512 = await createIconSquare(512);
  const buf180 = await createIconSquare(180);
  const buf48 = await createIconSquare(48);
  const buf32 = await createIconSquare(32);
  const buf16 = await createIconSquare(16);

  fs.writeFileSync('public/icon.png', buf512);
  fs.writeFileSync('app/icon.png', buf512);

  fs.writeFileSync('public/apple-icon.png', buf180);
  fs.writeFileSync('app/apple-icon.png', buf180);

  fs.writeFileSync('public/icon-48x48.png', buf48);
  fs.writeFileSync('public/icon-32x32.png', buf32);
  fs.writeFileSync('public/icon-16x16.png', buf16);

  // Generate ICO file containing 16, 32, 48
  function createIco(images) {
    const count = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = icon
    header.writeUInt16LE(count, 4);

    let offset = 6 + 16 * count;
    const entries = [];
    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // planes
      entry.writeUInt16LE(32, 6); // bpp
      entry.writeUInt32LE(img.buffer.length, 8); // size
      entry.writeUInt32LE(offset, 12); // offset
      offset += img.buffer.length;
      entries.push(entry);
    }

    return Buffer.concat([header, ...entries, ...images.map(i => i.buffer)]);
  }

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 }
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('app/favicon.ico', icoBuf);

  console.log('All favicons generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
