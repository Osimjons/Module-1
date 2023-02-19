"use strict";

// let discount = 0;
// const price = 1000;
// const clientStatus = "Введите сумму дохода ";
// switch (clientStatus) {
//   case "friend":
//     discount = price * 0.1;
//     break;
//   case "bestFriend":
//     discount = price * 0.15;
//     break;
//   case "theBestFriend":
//     discount = price * 0.2;
//     break;
//   default:
//     break;
// }
// const totalPrice = price - discount;
// console.log("totalPrice: ", totalPrice);

let zp = 5000;
let tax = 0;
if (zp <= 15000) {
  tax = zp * 0.13;
  console.log("13%: ", tax);
} else if (zp >= 15000 && zp <= 50000) {
  tax = zp * 0.2;
  console.log("20%: ", tax);
} else {
  tax = zp * 0.3;
  console.log("30%: ", tax);
}
let claerZp = zp - tax;
console.log("claerZp: ", claerZp);
