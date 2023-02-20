'use strict';
const anyWords = (string) => {
  string =
    string.split("").reverse("").join("");
  console.log("string: ", string);
  alert(`Вы ввели , ${string}`);
};
anyWords(prompt('Введите сообщение'));