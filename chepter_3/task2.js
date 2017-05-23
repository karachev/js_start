var humanPart = ["ухо", "нос", "бровь", "нога", "рот", "рука", "глаз"];
var animalPart= ["лапа", "морда", "пасть", "хвост", "шерсть", "глаза", "уши"];
var animal = ["собаки", "кошки", "свиньи", "морской свинки", "коровы", "овцы", "быка", "барана"];
var adjective = ["красивые", "уродливые", "огромные", "маленькие"];

var answer =  "У тебя " + humanPart[Math.floor(Math.random() * humanPart.length)] + " еще более " + adjective[Math.floor(Math.random() * adjective.length)] + ", чем " + animalPart[Math.floor(Math.random() * animalPart.length)] + " у " + animal[Math.floor(Math.random() * animal.length)];
answer;