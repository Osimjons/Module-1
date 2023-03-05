'use srtict';
const cart = {
  items: [], // пустой массив - это товары
  totalPrice: 0, // общая стоимость корзины
  count: 0, // количество товаров
  getTotalPrice() {
    // метод получения общей стоимости товаров
    return cart.totalPrice;
  },
  calculateItemPrice() {
    // метод пересчета стоимости всей корзины
    let totalPrice = 0;
    for (let i = 0; i < cart.items.length; i++) {
      totalPrice += cart.items[i].price * cart.items[i].count;
    }
    cart.totalPrice = totalPrice;
  },
  increaseCount(num) {
    // метод увеличения количества товаров
    cart.count += num;
  },
  add(name, price, count = 1) {
    // метод добавления товара
    const item = { name, price, count };
    cart.items.push(item);
    cart.increaseCount(count);
    cart.calculateItemPrice();
  },
  clear() {
    // метод очистки корзины
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
  },
  print() {
    // метод вывода информации о корзине в консоль
    console.log(JSON.stringify(cart.items));
    console.log(`Total price: ${cart.totalPrice}`);
  },
};

// добавление товаров в корзину
cart.add("Product 1", 10, 2);
cart.add("Product 2", 40, 1);
cart.add("Product 3", 30, 2);

// вывод информации о корзине в консоль
cart.print();

