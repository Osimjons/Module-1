"use strict";
/*Задача №2*/
const anyWords = (str) => {
  let newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return newStr;
};
console.log("anyWords: ", anyWords("Введите свое сообщение:"));
