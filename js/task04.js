"use stict";

const calculate = (totalPrice, numItems, promoCode) => {
  if (numItems > 10) {
    totalPrice *= 0.97;
  }
  if (totalPrice > 30000) {
    totalPrice -= 0.15 * (totalPrice - 30000);
  }
  if (promoCode === "METHED") {
    totalPrice *= 0.9;
  } else if (promoCode === "G3H2Z1" && totalPrice > 2000) {
    totalPrice -= 500;
  }
  return totalPrice;
};
console.log(calculate(40000, 12, "METHED"));
