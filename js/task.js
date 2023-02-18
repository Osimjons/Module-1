"use strict";

// Задача №2
{
  const rain = Math.round(Math.random());
  if (rain >= 1) {
    alert("Пошёл дождь. Возьмите зонт!");
    console.log("rain: ", rain);
  } else {
    alert("Дождя нет!");
    console.log(`Дождя нет!`);
  }
}
// Задача №3
{
  const mat = +prompt("Введите баллы по Математики"),
    rus = +prompt("Введите баллы по Русскому языку"),
    it = +prompt("Введите баллы по Информатике");

  if (isNaN(mat, rus, it)) {
    alert("Вы ввели непривилье значение, повторите еще раз");
  } else {
    const res = mat + rus + it;
    if (res >= 265) {
      alert(`Поздравляю! Вы поступили на бюджет!`);
    } else {
      alert(`Увы, немножко не хватило :( `);
    }
  }
}
{
  let x = +prompt("Введите сумму кратную 100");
  if (x % 100 === 0) {
    alert("Вот ваши деньги!");
  } else {
    alert(`Минимальная сумма 100р`);
  }
}
