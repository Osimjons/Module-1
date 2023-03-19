'use strict';
/* Задача №1*/
const guessNumber = () => {
  const numberToGuess = Math.floor(Math.random() * 100) + 1;

  const guess = () => {
    const userGuess = prompt('Угадай число от 1 до 100');

    if (userGuess === null) {
      return alert('Игра окончена');
    }

    const parsedUserGuess = parseInt(userGuess);

    if (isNaN(parsedUserGuess)) {
      alert('Введи число!');
      return guess();
    }

    if (parsedUserGuess > numberToGuess) {
      alert('Меньше!');
      return guess();
    } else if (parsedUserGuess < numberToGuess) {
      alert('Больше!');
      return guess();
    } else {
      return alert('Правильно!');
    }
  };

  guess();
};

guessNumber();

/* Задача №2*/
const generateArray = (arr) => {
  arr.push(Math.floor(Math.random() * 11));
  if (arr.reduce((acc, cur) => acc + cur, 0) < 50) {
    return generateArray(arr);
  } else {
    return arr;
  }
};

const myArray = [];
const resultArray = generateArray(myArray);
console.log(resultArray);
/* Задания на this */
/* Задача №1*/
const rectangle = {
  _width: 5,
  _height: 5,
  set width(value) {
    if (typeof value === 'number') {
      this._width = value;
    }
  },
  set height(value) {
    if (typeof value === 'number') {
      this._height = value;
    }
  },
  get perimeter() {
    return `${2 * (this._width + this._height)}см`;
  },
  get area() {
    return `${this._width * this._height}см`;
  },
};

rectangle.width = 7;
rectangle.height = 10;

console.log(rectangle.perimeter); // "34см"
console.log(rectangle.area); // "70см"

/* Задача №2*/
const cart = {
  items: [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
  ],
  discount: 0,
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  calculateItemPrice(item) {
    const discount = 1 - this.discount / 100;
    return `${item.price * discount}руб`;
  },
};

cart.setDiscount = 'NEWYEAR';

console.log(cart.calculateItemPrice(cart.items[0])); // "79руб"
console.log(cart.calculateItemPrice(cart.items[1])); // "158руб"
console.log(cart.calculateItemPrice(cart.items[2])); // "237руб"
