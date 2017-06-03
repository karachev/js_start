// #2. Генератор случайных строк
// Напишите генератор случайных строк. Для этого вам понадо-
// бится строка со всеми буквами алфавита:
// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// Чтобы выбирать из этой строки случайную букву, можно
// использовать примерно такой же код, как для генератора случай-
// ных дразнилок из третьей главы: Math.floor(Math.random() *
// alphabet.length). Так вы получите случайный индекс в строке.
// Затем, воспользовавшись квадратными скобками, можно полу-
// чить символ по этому индексу.
// Начните создавать случайную строку с пустой строки
// (var randomString = ""). Затем добавьте цикл while и при
// каждом его повторе добавляйте в строку новый случайный
// символ — до тех пор, пока длина строки randomString не пре-
// высит шесть символов (или любой другой длины на ваш выбор).
// Добавлять символ в конец строки можно с помощью оператора
// +=. После того как цикл закончит работу, выведите получившу-
// юся строку в консоль, чтобы полюбоваться на свое творение!

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
var n = 0;

while (n < 6) {
  i = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[i];
  n++;
};

console.log(randomString);