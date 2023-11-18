const fs = require('fs');

// Создание файла
fs.writeFileSync('hello.txt', 'Привет, мир!', 'utf8');
console.log('File hello.txt has been created.');

// Асинхронное добавление данных
fs.appendFile('hello.txt', 'Hello MFA!', function (error) {
    if (error) throw error; // Если возникла ошибка при добавлении
    console.log('Asynchronous data addition is completed. File Contents:');

    // Повторно считываем данные после добавления
    let newData = fs.readFileSync('hello.txt', 'utf8');
    console.log(newData);

    // Удаление файла
    fs.unlink('hello.txt', (err) => {
        if (err) console.log(err); // Если возникла ошибка при удалении
        else console.log('hello.txt was deleted');
    });
});

// Синхронное добавление данных
fs.appendFileSync('hello.txt', 'Привет ми ми ми!');

// Асинхронное чтение
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('Asynchronous file reading');
    if (error) throw error; // Если возникла ошибка
    console.log(data); // Выводим считанные данные
});

// Синхронное чтение
console.log('Synchronous file reading');
try {
    let fileContent = fs.readFileSync('hello.txt', 'utf8');
    console.log(fileContent);
} catch (error) {
    console.error(error); // Обрабатываем ошибку, если возникла
}
