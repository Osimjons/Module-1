"use stirict";
{
  const answer = prompt("Введите ваше число: ", "Введите число: 0-9 ");
  if (isNaN(answer)) {
    alert("Вы ввели некорректные данные, попробуйте снова!");
  } else {
    alert("Принято!");
  }
}
