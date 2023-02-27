'use strict';
const game = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  let guess;
  const checkInput = (input) => {
    if (input === null) {
      return null;
    }
    if (isNaN(input) || input.trim() === "") {
      alert("Введи число!");
      return false;
    }
    return true;
  };

  const play = () => {
    guess = prompt("Угадай число от 1 до 100");
    console.log("guess: ", guess);
    if (!checkInput(guess)) {
      play();
      return;
    }
    guess = parseInt(guess);
    if (guess > number) {
      alert("Меньше!");
      play();
    } else if (guess < number) {
      alert("Больше!");
      play();
    } else {
      alert("Правильно!");
    }
  };

  play();
};

game();
