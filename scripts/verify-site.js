const http = require('http');

http.get('http://localhost:3009/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const titleMatch = data.match(/<title>([^<]+)<\/title>/);
    console.log('1. Page Title:', titleMatch ? titleMatch[1] : 'Not Found');

    const iconMatches = data.match(/<link[^>]+(?:rel="icon"|rel="apple-touch-icon")[^>]*>/gi);
    console.log('2. Favicon & Icon tags:', iconMatches);

    console.log('3. Dra. Rhayssa Lima brand found:', data.includes('Rhayssa Lima de Souza Oliveira'));
    console.log('4. OAB/MG 247.321 found:', data.includes('247.321'));
    console.log('5. WhatsApp (33) 99806-7570 found:', data.includes('99806-7570') && data.includes('5533998067570'));
    console.log('6. Address Raul Soares found:', data.includes('Raul Soares'));
    console.log('7. Google 5,0 stars found:', data.includes('5,0'));
    console.log('8. Zero previous client traces:', !data.includes('Maira') && !data.includes('Espera Feliz') && !data.includes('166.714'));
  });
});
