"use strict";

{
  const myWeight = +prompt`Запишите  массу вашего тела`,
    speedLight = 3e8,
    energy = myWeight * Math.pow(speedLight, 2);
  console.log(`Энергия вашего тело ${energy} Дж`);
}
