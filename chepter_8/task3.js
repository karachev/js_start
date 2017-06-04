// #3. «Виселица» и функции
// Давайте вернемся к игре «Виселица» из седьмой главы и перепи-
// шем ее с помощью функций.
// Я уже переписал основной код игры. Некоторые его части
// заменены вызовами функций. Вам осталось лишь запрограмми-
// ровать эти функции!

var pickWord = function() {
    // Возвращает случайно выбранное слово
    var words = [
      "программа",
      "макака",
      "прекрасный",
      "оладушек",
      "телевизор",
      "монитор",
      "ручка",
      "тапочек",
      "карандаш",
      "плита"
    ];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
};
var setupAnswerArray = function(word) {
  // Возвращает итоговый массив для заданного слова word
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
};
var showPlayerProgress = function(answerArray) {
  // С помощью alert отображает текущее состояние игры
  alert(answerArray.join(" "));
};
var getGuess = function() {
  // Запрашивает ответ игрока с помощью prompt
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};
var updateGameState = function(guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
      else if (word[j] != guess) {
        life--;
      }
    }
  }
};
var showAnswerAndCongratulatePlayer = function(answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  if (life > 0) {
    alert(answerArray.join(" "));
    alert("Отлично! Было загадано слово " + word);
  } else {
    alert("К сожалению ты проиграл :(");
  }
};

// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word,
      answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);