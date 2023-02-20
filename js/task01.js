"use strickt";
/*Первая задача:*/
const convertor = (eur) => {
  usd = eur * 1.2;
  console.log("usd: ", usd);
  rub = usd * 64;
  console.log("rub: ", rub);
  if (Number.isNaN(eur)) {
    alert("Вы ввели не число");
    convertor;
  } else {
    alert(`${eur} Евро ${rub}p. в рублях а в долларах ${usd}$`);
  }
};

convertor(+prompt("вводите Сумму в евро"));
