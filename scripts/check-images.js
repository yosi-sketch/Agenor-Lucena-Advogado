const http = require('http');

http.get('http://localhost:3009/', res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const images = body.match(/<img[^>]+src="[^"]+"[^>]*>/gi) || [];
    console.log('Total img tags rendered:', images.length);
    images.forEach((img, i) => {
      const src = img.match(/src="([^"]+)"/);
      const alt = img.match(/alt="([^"]+)"/);
      console.log(`[${i + 1}] src: ${src ? src[1] : 'none'} | alt: ${alt ? alt[1] : 'none'}`);
    });
  });
});
