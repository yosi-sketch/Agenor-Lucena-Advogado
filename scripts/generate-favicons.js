const fs = require('fs');
const zlib = require('zlib');

// Read raw logo
const png = fs.readFileSync('public/logo.png');
let offset = 8;
const idatChunks = [];
while (offset < png.length) {
  const length = png.readUInt32BE(offset);
  const type = png.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') idatChunks.push(png.subarray(offset + 8, offset + 8 + length));
  offset += 12 + length;
}
const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const width = 1024, height = 512, bpp = 4, stride = 1 + width * bpp;

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

const raw = Buffer.alloc(width * height * 4);
for (let y = 0; y < height; y++) {
  const filter = decompressed[y * stride];
  const rowSrc = y * stride + 1, rowDst = y * width * 4, prevRowDst = (y - 1) * width * 4;
  for (let x = 0; x < width * 4; x++) {
    const rawVal = decompressed[rowSrc + x];
    const left = x >= 4 ? raw[rowDst + x - 4] : 0;
    const up = y > 0 ? raw[prevRowDst + x] : 0;
    const upLeft = (y > 0 && x >= 4) ? raw[prevRowDst + x - 4] : 0;
    let val = 0;
    switch (filter) {
      case 0: val = rawVal; break;
      case 1: val = (rawVal + left) & 0xff; break;
      case 2: val = (rawVal + up) & 0xff; break;
      case 3: val = (rawVal + Math.floor((left + up) / 2)) & 0xff; break;
      case 4: val = (rawVal + paeth(left, up, upLeft)) & 0xff; break;
    }
    raw[rowDst + x] = val;
  }
}

// Extract emblem bounding box (rows 33 to 245)
let emMinX = width, emMaxX = 0, emMinY = 245, emMaxY = 0;
for (let y = 33; y <= 245; y++) {
  for (let x = 0; x < width; x++) {
    const a = raw[(y * width + x) * 4 + 3];
    if (a > 30) {
      if (x < emMinX) emMinX = x;
      if (x > emMaxX) emMaxX = x;
      if (y < emMinY) emMinY = y;
      if (y > emMaxY) emMaxY = y;
    }
  }
}
console.log('Emblem Bounding box:', { emMinX, emMaxX, emMinY, emMaxY, w: emMaxX - emMinX, h: emMaxY - emMinY });

// Encode PNG helper
function crc32(buf) {
  let table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeAndData, crc]);
}

function encodeRGBAtoPNG(w, h, rgbaBuffer) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // 8 bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const rowSize = 1 + w * 4;
  const filtered = Buffer.alloc(h * rowSize);
  for (let y = 0; y < h; y++) {
    filtered[y * rowSize] = 0; // Filter 0 (None)
    rgbaBuffer.copy(filtered, y * rowSize + 1, y * w * 4, (y + 1) * w * 4);
  }
  const idatData = zlib.deflateSync(filtered, { level: 9 });

  return Buffer.concat([
    sig,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', idatData),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

// 1. Save isolated emblem
const emW = emMaxX - emMinX + 1;
const emH = emMaxY - emMinY + 1;
const emblemRgba = Buffer.alloc(emW * emH * 4);
for (let y = 0; y < emH; y++) {
  for (let x = 0; x < emW; x++) {
    const srcIdx = ((emMinY + y) * width + (emMinX + x)) * 4;
    const dstIdx = (y * emW + x) * 4;
    emblemRgba[dstIdx] = raw[srcIdx];
    emblemRgba[dstIdx + 1] = raw[srcIdx + 1];
    emblemRgba[dstIdx + 2] = raw[srcIdx + 2];
    emblemRgba[dstIdx + 3] = raw[srcIdx + 3];
  }
}
fs.writeFileSync('public/logo-emblem.png', encodeRGBAtoPNG(emW, emH, emblemRgba));
console.log('Saved public/logo-emblem.png');

// Bilinear scale function
function createSquareIcon(targetSize, darkBg = true) {
  const iconBuffer = Buffer.alloc(targetSize * targetSize * 4);
  // Fill background
  for (let i = 0; i < targetSize * targetSize; i++) {
    const idx = i * 4;
    if (darkBg) {
      // Elegant deep luxury obsidian midnight #0b1320
      iconBuffer[idx] = 11;     // R
      iconBuffer[idx + 1] = 19; // G
      iconBuffer[idx + 2] = 32; // B
      iconBuffer[idx + 3] = 255;
    } else {
      iconBuffer[idx + 3] = 0;
    }
  }

  // Draw golden border if darkBg
  if (darkBg && targetSize >= 64) {
    const borderWidth = Math.max(1, Math.floor(targetSize / 48));
    for (let y = 0; y < targetSize; y++) {
      for (let x = 0; x < targetSize; x++) {
        if (x < borderWidth || x >= targetSize - borderWidth || y < borderWidth || y >= targetSize - borderWidth) {
          const idx = (y * targetSize + x) * 4;
          iconBuffer[idx] = 237;     // Gold #EDAE48
          iconBuffer[idx + 1] = 174;
          iconBuffer[idx + 2] = 72;
          iconBuffer[idx + 3] = 200;
        }
      }
    }
  }

  // Fit emblem inside with padding
  const padding = Math.round(targetSize * 0.15);
  const availW = targetSize - padding * 2;
  const availH = targetSize - padding * 2;
  const scale = Math.min(availW / emW, availH / emH);
  const destW = Math.round(emW * scale);
  const destH = Math.round(emH * scale);
  const startX = Math.round((targetSize - destW) / 2);
  const startY = Math.round((targetSize - destH) / 2);

  for (let dy = 0; dy < destH; dy++) {
    for (let dx = 0; dx < destW; dx++) {
      const srcX = Math.min(emW - 1, Math.floor(dx / scale));
      const srcY = Math.min(emH - 1, Math.floor(dy / scale));
      const srcIdx = (srcY * emW + srcX) * 4;
      const alpha = emblemRgba[srcIdx + 3] / 255;

      if (alpha > 0) {
        const dstX = startX + dx;
        const dstY = startY + dy;
        const dstIdx = (dstY * targetSize + dstX) * 4;

        const srcR = emblemRgba[srcIdx];
        const srcG = emblemRgba[srcIdx + 1];
        const srcB = emblemRgba[srcIdx + 2];

        if (darkBg) {
          const bgR = iconBuffer[dstIdx];
          const bgG = iconBuffer[dstIdx + 1];
          const bgB = iconBuffer[dstIdx + 2];

          iconBuffer[dstIdx] = Math.round(srcR * alpha + bgR * (1 - alpha));
          iconBuffer[dstIdx + 1] = Math.round(srcG * alpha + bgG * (1 - alpha));
          iconBuffer[dstIdx + 2] = Math.round(srcB * alpha + bgB * (1 - alpha));
          iconBuffer[dstIdx + 3] = 255;
        } else {
          iconBuffer[dstIdx] = srcR;
          iconBuffer[dstIdx + 1] = srcG;
          iconBuffer[dstIdx + 2] = srcB;
          iconBuffer[dstIdx + 3] = emblemRgba[srcIdx + 3];
        }
      }
    }
  }

  return encodeRGBAtoPNG(targetSize, targetSize, iconBuffer);
}

// Generate icons
const icon512 = createSquareIcon(512, true);
const icon180 = createSquareIcon(180, true);
const icon32 = createSquareIcon(32, true);
const icon16 = createSquareIcon(16, true);

fs.writeFileSync('public/icon.png', icon512);
fs.writeFileSync('public/apple-icon.png', icon180);
fs.writeFileSync('public/icon-32x32.png', icon32);
fs.writeFileSync('public/icon-16x16.png', icon16);

fs.writeFileSync('app/icon.png', icon512);
fs.writeFileSync('app/apple-icon.png', icon180);

// Generate valid ICO containing 32x32 PNG and 16x16 PNG
function createIco([png16, png32]) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(2, 4); // 2 images

  const dir16 = Buffer.alloc(16);
  dir16[0] = 16;
  dir16[1] = 16;
  dir16[2] = 0; // color count
  dir16[3] = 0; // reserved
  dir16.writeUInt16LE(1, 4); // planes
  dir16.writeUInt16LE(32, 6); // bpp
  dir16.writeUInt32LE(png16.length, 8);
  dir16.writeUInt32LE(6 + 32, 12); // offset

  const dir32 = Buffer.alloc(16);
  dir32[0] = 32;
  dir32[1] = 32;
  dir32[2] = 0;
  dir32[3] = 0;
  dir32.writeUInt16LE(1, 4);
  dir32.writeUInt16LE(32, 6);
  dir32.writeUInt32LE(png32.length, 8);
  dir32.writeUInt32LE(6 + 32 + png16.length, 12); // offset

  return Buffer.concat([header, dir16, dir32, png16, png32]);
}

const ico = createIco([icon16, icon32]);
fs.writeFileSync('public/favicon.ico', ico);
fs.writeFileSync('app/favicon.ico', ico);

console.log('All icons and favicons created successfully!');
