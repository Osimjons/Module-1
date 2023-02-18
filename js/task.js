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
    alert(`У вас ${res} баллов `);
  }
}
{
  let x = +prompt("Введите сумму кратную 100");
  if (isNaN(x)) {
    alert("Вы ввели не цифру!");
  } else {
    x = Math.round(x / 100) * 100;
    alert(`Возможно вы хотели ввести ${x}`);
  }
}
