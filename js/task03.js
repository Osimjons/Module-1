"use strict";
let str = prompt("Введите сообщение");
const anyWords = (string) => {
  return string.split("").reverse("").join("");
};
const res = anyWords(str);
console.log("res: ", res);
console.log("anyWords: ", anyWords("привет "));
