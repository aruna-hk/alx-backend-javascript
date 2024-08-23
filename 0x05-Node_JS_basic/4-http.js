const http = require('http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'plain/text' });
  res.end('Hello Holberton School!')
});
server.listen(1245)
