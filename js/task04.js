"use stict";

const calculate = (totalPrice, numItems, promoCode) => {
  let price = totalPrice;
  let items = numItems;
  if (items > 10) {
    price *= 0.97;
  }
  if (price > 30000) {
    price -= 0.15 * (price - 30000);
  }
  if (promoCode === "METHED") {
    price *= 0.9;
  } else if (promoCode === "G3H2Z1" && price > 2000) {
    price -= 500;
  }
  return price;
};
console.log(calculate(40000, 12, "METHED"));
console.log(price);