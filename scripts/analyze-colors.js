const sharp = require('sharp');

async function analyzeLogo() {
  const logoPath = 'C:/Users/matheus/.gemini/antigravity/brain/bb6bc9c1-58e6-4e1f-a407-43f698982d32/.user_uploaded/media_1792925315616_e502eb3d.png';
  const { data, info } = await sharp(logoPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const colors = [];
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 200) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      colors.push({ r, g, b });
    }
  }

  const toHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

  colors.sort((a,b) => (0.299*b.r + 0.587*b.g + 0.114*b.b) - (0.299*a.r + 0.587*a.g + 0.114*a.b));
  
  if (colors.length > 0) {
    const bright = colors[Math.floor(colors.length * 0.05)];
    const primary = colors[Math.floor(colors.length * 0.35)];
    const mid = colors[Math.floor(colors.length * 0.65)];
    const deep = colors[Math.floor(colors.length * 0.90)];
    console.log('Champagne Highlight:', toHex(bright.r, bright.g, bright.b));
    console.log('Primary Champagne Gold:', toHex(primary.r, primary.g, primary.b));
    console.log('Warm Bronze Gold:', toHex(mid.r, mid.g, mid.b));
    console.log('Deep Antique Shadow:', toHex(deep.r, deep.g, deep.b));
  }
}

analyzeLogo().catch(console.error);
