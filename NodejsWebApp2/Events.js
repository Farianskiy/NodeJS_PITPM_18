const { EventEmitter } = require('events');

let eventName = 'greet';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let emitter = new EventEmitter();
emitter.on(eventName, function () {
    console.log('Hello all!');
});

emitter.on(eventName, function () {
    console.log('Hello!');
});

emitter.on(eventName, function (data) {
    console.log(data);
});

let user = new User();
user.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName);
emitter.emit(eventName, 'Hello feast!');
user.sayHi('I need your clothes...');
