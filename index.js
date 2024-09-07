const http = require('http');
const { createServer } = require('./server');
const { PORT } = require('./config');

const server = createServer();

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
