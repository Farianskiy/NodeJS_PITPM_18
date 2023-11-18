'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

// получаем модуль Express
const express = require('express');
// создаем приложение
const app = express();

let name = process.argv[2];
let age = process.argv[3];

console.log('name: ' + name);
console.log('age: ' + age);


app.get('/', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello from Express!\n');
});


app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
