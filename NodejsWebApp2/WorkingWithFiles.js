const fs = require('fs');

// �������� �����
fs.writeFileSync('hello.txt', '������, ���!', 'utf8');
console.log('File hello.txt has been created.');

// ����������� ���������� ������
fs.appendFile('hello.txt', 'Hello MFA!', function (error) {
    if (error) throw error; // ���� �������� ������ ��� ����������
    console.log('Asynchronous data addition is completed. File Contents:');

    // �������� ��������� ������ ����� ����������
    let newData = fs.readFileSync('hello.txt', 'utf8');
    console.log(newData);

    // �������� �����
    fs.unlink('hello.txt', (err) => {
        if (err) console.log(err); // ���� �������� ������ ��� ��������
        else console.log('hello.txt was deleted');
    });
});

// ���������� ���������� ������
fs.appendFileSync('hello.txt', '������ �� �� ��!');

// ����������� ������
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('Asynchronous file reading');
    if (error) throw error; // ���� �������� ������
    console.log(data); // ������� ��������� ������
});

// ���������� ������
console.log('Synchronous file reading');
try {
    let fileContent = fs.readFileSync('hello.txt', 'utf8');
    console.log(fileContent);
} catch (error) {
    console.error(error); // ������������ ������, ���� ��������
}
