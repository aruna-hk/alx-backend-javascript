const http = require('http');
const PORT = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.end(responseText);
});
app.listen(PORT);

module.exports = app;
