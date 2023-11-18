function display(data, callback) {
    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err =
        randInt > 5
            ? new Error('Execution error. randInt is more than 5')
            : null;

    setTimeout(function () {
        callback(err, data);
    }, 0);
}

function displaySync(callback) {
    callback();
}

console.log('Getting started with the program');

setTimeout(function () {
    console.log('timeout 500');
}, 500);

setTimeout(function () {
    console.log('timeout 100');
}, 100);

displaySync(function () {
    console.log('without timeout');
});

display('Data processing...', function (err, data) {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    console.log(data);
});

console.log('Program shutdown');
