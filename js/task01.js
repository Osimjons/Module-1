'use strict';
/*Залдача №1*/

const allstudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failStudents = ["Сидоров", "Смирнов", "Попов"];

const filter = (a, b) => {
  return a.filter(a => !b.includes(a));
};
filter(allstudents, failStudents);
const res = filter(allstudents, failStudents);
console.log("res: ", res);
