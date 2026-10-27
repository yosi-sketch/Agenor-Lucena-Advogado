const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const uploadPath = 'C:/Users/matheus/.gemini/antigravity/brain/1f4d2cfa-ed8c-4ead-b855-a326bd091d43/.user_uploaded/media_1793129229818_fa958a03.png';

  // 1. Process Vivid Emblem (Isolated "R" with Scales of Justice)
  console.log('1. Generating Vivid High-Luminance Emblem...');
  const emblemRaw = await sharp(uploadPath)
    .extract({ left: 304, top: 16, width: 427, height: 320 })
    .trim()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: emData, info: emInfo } = emblemRaw;
  const emW = emInfo.width, emH = emInfo.height;
  const emOut = Buffer.alloc(emW * emH * 4);

  for (let i = 0; i < emData.length; i += 4) {
    const a = emData[i + 3];
    if (a > 10) {
      let r = emData[i], g = emData[i + 1], b = emData[i + 2];
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      // Enhance the metallic wine, ruby and rose-gold luster
      const newR = Math.min(255, Math.round(110 + Math.pow(lum, 0.65) * 145));
      const newG = Math.min(255, Math.round(28 + Math.pow(lum, 0.75) * 215));
      const newB = Math.min(255, Math.round(45 + Math.pow(lum, 0.75) * 205));

      emOut[i] = newR;
      emOut[i + 1] = newG;
      emOut[i + 2] = newB;
      emOut[i + 3] = a;
    }
  }

  const vividEmblem = await sharp(emOut, { raw: { width: emW, height: emH, channels: 4 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/rhayssa-emblem-vivid.png', vividEmblem);
  console.log('Saved public/rhayssa-emblem-vivid.png');

  // 2. Full Stacked Logo with Vivid Emblem + High Contrast Luminous Typography
  console.log('2. Generating Full Stacked Logo (Vivid & Luminous)...');
  const fullRaw = await sharp(uploadPath).raw().toBuffer({ resolveWithObject: true });
  const { data: fullData, info: fullInfo } = fullRaw;
  const fW = fullInfo.width, fH = fullInfo.height;
  const fullOut = Buffer.alloc(fW * fH * 4);

  for (let y = 0; y < fH; y++) {
    for (let x = 0; x < fW; x++) {
      const idx = (y * fW + x) * 4;
      const a = fullData[idx + 3];
      if (a > 10) {
        if (y < 340) {
          // Emblem area: apply vivid ruby/rose-gold enhancement
          const r = fullData[idx], g = fullData[idx + 1], b = fullData[idx + 2];
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          fullOut[idx] = Math.min(255, Math.round(110 + Math.pow(lum, 0.65) * 145));
          fullOut[idx + 1] = Math.min(255, Math.round(28 + Math.pow(lum, 0.75) * 215));
          fullOut[idx + 2] = Math.min(255, Math.round(45 + Math.pow(lum, 0.75) * 205));
          fullOut[idx + 3] = a;
        } else {
          // Typography area: render in brilliant pure white / rose-champagne
          const r = fullData[idx], g = fullData[idx + 1], b = fullData[idx + 2];
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          fullOut[idx] = Math.min(255, Math.round(250 + lum * 5));
          fullOut[idx + 1] = Math.min(255, Math.round(235 + lum * 20));
          fullOut[idx + 2] = Math.min(255, Math.round(230 + lum * 25));
          fullOut[idx + 3] = Math.min(255, Math.round(a * 1.1));
        }
      }
    }
  }

  const vividFull = await sharp(fullOut, { raw: { width: fW, height: fH, channels: 4 } })
    .trim()
    .png()
    .toBuffer();
  fs.writeFileSync('public/rhayssa-logo-vivid.png', vividFull);
  fs.writeFileSync('public/rhayssa-lima-logo-dark-v2.png', vividFull);
  console.log('Saved public/rhayssa-logo-vivid.png and updated public/rhayssa-lima-logo-dark-v2.png');

  console.log('Assets processed successfully!');
}

main().catch(console.error);
