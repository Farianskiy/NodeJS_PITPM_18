
const http = require('http');

const message = 'Hello World!';

const server = http.createServer((request, response) => {
    console.log(message);
    response.end(message);
});

const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`The server has started listening for requests for http://${HOST}:${PORT}`);
});

server.on('error', (error) => {
    console.error('Server error:', error.message);
});
