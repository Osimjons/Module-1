"use strickt";
/*Первая задача:*/
const convertor = (eur) => {
  let convertEur = eur;
  if (Number.isNaN(eur)) {
    alert("Вы ввели не число");
    convertor();
  } else {
    let usd = convertEur * 1.2;
    let rub = usd * 64;
    alert(`${eur} Евро ${rub}p. в рублях а в долларах ${usd}$`);
  }
};
convertor(+prompt("вводите Сумму в евро"));
