'use strict';
const game = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  let guess;

  const checkInput = (input) => {
    if (input === null) {
      return null;
    }
    if (Number.isNaN(input) || input.trim() === "") {
      console.log("Введи число!");
      return false;
    }
    return true;
  };

  const play = () => {
    guess = +prompt("Угадай число от 1 до 100");
    if (checkInput(guess) === null) {
      console.log("Игра окончена!");
      return;
    }
    guess = parseInt(guess);

    if (guess > number) {
      console.log("Меньше!");
      play();
    } else if (guess < number) {
      console.log("Больше!");
      play();
    } else {
      console.log("Правильно!");
    }
  };

  play();
};

game();

