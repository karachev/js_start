// #1. Прекрасные животные
// Напишите цикл for, который изменяет массив животных, делая
// их прекрасными! Например, если есть следующий массив:
// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// то ваш цикл должен сделать его таким:
// ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур -
// прекрасное животное", "Комодский варан - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для
// каждого индекса, то есть присвоить новые значения уже суще-
// ствующим элементам. Например, сделать первое животное пре-
// красным можно так:
// animals[0] = animals[0] + " - прекрасное животное";

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i] + " - прекрасное животное");
};