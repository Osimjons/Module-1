"use stirict";

const product = prompt(`Введите наименование товара `);
const category = prompt(`Название категории `);
const count = +prompt("Введите количество товара: ", "Введите число: 0-9 ");
const price = +prompt(`Введите цену товара `);

if (isNaN(count) || isNaN(price)) {
  alert("Вы ввели некорректные данные, попробуйте снова!");
} else {
  alert("Принято!");
}
console.log(
  `На складе у нас ${count} шт ${product} что входит в категорию ${category} на сумму ${
    price * count
  } ₽ `
);
