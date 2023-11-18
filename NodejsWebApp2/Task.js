const fs = require('fs');

const questions = [
    "1. The basics of Node.js:\nWhat is Node.js and its architecture.\nInstalling Node.js and npm (Node Package Manager).\nBasics of working with REPL (Read-Eval-Print Loop).",
    "2. Modules and Packages:\nImport and export modules to Node.js.\nUsing third-party packages using npm.\nUnderstanding the difference between global and local packages.",
    "3. File System and Streams:\nWorking with files and directories in Node.js.\nUsing threads to process data.",
    "4. Asynchronous programming:\nOverview of callbacks and Promises.\nUsing async/await to manage asynchronous code.",
    "5. Express.js and web development:\nIntroduction to Express.js and creating a web server.\nWorking with routes and processing requests.\nMiddleware in Express.",
    "6. WebSocket and real time:\nIntroduction to WebSocket and the Library Socket.io.\nCreating a chat application with WebSocket.",
    "7. Databases:\nConnecting and working with databases such as MongoDB or MySQL.\nCreating data models and executing queries.",
    "8. Authentication and security:\nImplementation of authentication and authorization in Node.js application.\nProtecting the application from attacks such as injection and CSRF (cross-site request forgery).",
    "9. Testing:\nUsing testing frameworks such as Mocha and Chai.\nWriting unit tests and integration tests.",
    "10. Deployment and server management:\nNode deployment.js applications on hosting platforms.\nUsing process management, such as PM2."
];

const writeableStream = fs.createWriteStream('questions.txt');

questions.forEach(question => {
    writeableStream.write(question + '\n\n');
});

writeableStream.end();

console.log('Questions have been written to the file questions.txt');
