const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Hello world!');
writeableStream.write('Continued recording \n');
writeableStream.end('End of recording');

let readableStream = fs.createReadStream('hello.txt', 'utf8');

readableStream.on('data', function (chunk) {
    console.log(chunk);
});
