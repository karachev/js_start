// #1. Математические расчеты и функции
// Создайте две функции, add и multiply; пусть каждая принимает
// по два аргумента. Функция add должна складывать аргументы
// и возвращать результат, а функция multiply — перемножать
// аргументы.
// С помощью только этих двух функций вычислите следующее
// несложное выражение:
// 36325 * 9824 + 777

function add(argument1, argument2) {
  return argument1 + argument2;
}

function multiply(argument1, argument2) {
  return argument1 * argument2;
}

var result = multiply(36325, 9824);
result = add(result, 777);

console.log(result);