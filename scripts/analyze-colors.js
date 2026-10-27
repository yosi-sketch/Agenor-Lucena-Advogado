const sharp = require('sharp');

async function analyzeLogo() {
  const logoPath = 'public/logo.png';
  const { data, info } = await sharp(logoPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const colors = [];
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 180) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      colors.push({ r, g, b });
    }
  }

  const toHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

  colors.sort((a,b) => (0.299*b.r + 0.587*b.g + 0.114*b.b) - (0.299*a.r + 0.587*a.g + 0.114*a.b));
  
  if (colors.length > 0) {
    const highlight = colors[Math.floor(colors.length * 0.05)];
    const champagne = colors[Math.floor(colors.length * 0.20)];
    const primary = colors[Math.floor(colors.length * 0.40)];
    const mid = colors[Math.floor(colors.length * 0.65)];
    const deep = colors[Math.floor(colors.length * 0.90)];
    console.log('Highlight Ivory/Champagne:', toHex(highlight.r, highlight.g, highlight.b));
    console.log('Champagne Luminous:', toHex(champagne.r, champagne.g, champagne.b));
    console.log('Primary Warm Gold:', toHex(primary.r, primary.g, primary.b));
    console.log('Mid Metallic Bronze:', toHex(mid.r, mid.g, mid.b));
    console.log('Deep Shadow Bronze:', toHex(deep.r, deep.g, deep.b));
  }
}

analyzeLogo().catch(console.error);
