const http = require('http');
const { getCurrentTime } = require('./utils');

function createServer() {
  return http.createServer((req, res) => {
    const currentTime = getCurrentTime();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, World! The current time is: ${currentTime}`);
  });
}

module.exports = {
  createServer
};