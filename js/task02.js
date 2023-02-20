"use strict";
/*Задача №2*/ 
const anyWords = (str) => {
  str = str[0].toUpperCase() + str.slice(1);
  console.log("str: ", str);
  alert(`Вы ввели , ${str}`);
};
anyWords(prompt('Введите свое сообщение:'));
