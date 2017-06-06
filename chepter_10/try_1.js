// ПОПРОБУЙТЕ!
// Измените предыдущий пример так, чтобы сообщение выводилось каждые
// пять секунд, а не раз в секунду

var counter = 5;
var printMessage = function () {
 console.log("Ты смотришь в консоль уже " + counter + " сек");
counter += 5;
};
var intervalId = setInterval(printMessage, 5000);
