"use strict";
/*Задача №2*/ 
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
function getAverageValue(arr) {
  const sum = arr.reduce((acc, val) => acc + val);
  const avg = sum / arr.length;
  return Math.floor(avg);
}
const averageCheck = getAverageValue(allСashbox);
console.log(`Средний чек за день: ${averageCheck}`);
