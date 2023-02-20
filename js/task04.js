"use strict";
/*Четвертая задача:*/

// let cart = (n) => {
//   if (Number.isNaN(parseFloat(n))) {
//     n >= 10;
//     return n * 0.03;
//   }
// };
// cart();
// console.log("cart: ", cart(11));

const calculate = (cart, summ, promo) => {
  if (Number.isNaN(parseFloat(cart || summ || promo))) {
    cart >= 10;
    return summ * 0.03;
  } else if (summ >= 30000) {
    return summ * 1.5;
  } else if (promo === "METHED") {
    return summ * 0.1;
  }
};
calculate();
console.log("calculate: ", calculate(11, 31000, "METHED"));
