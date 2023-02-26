'use srtict';
const generateRandomArrayInRangeFiltered = (arrayLength, n, m, filter) => {
  const randomArray = [];
  const minValue = Math.min(n, m);
  const maxValue = Math.max(n, m);
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    if (filter === 'even' && randomNumber % 2 === 0) {
      randomArray.push(randomNumber);
    } else if (filter === 'odd' && randomNumber % 2 !== 0) {
      randomArray.push(randomNumber);
    }
  }
  return randomArray;
};

const randomEvenArray = generateRandomArrayInRangeFiltered(10, -5, 15, 'even');
console.log(randomEvenArray); // выводит массив случайных четных чисел 

const randomOddArray = generateRandomArrayInRangeFiltered(10, -5, 15, 'odd');
console.log(randomOddArray); // выводит массив случайных нечетных чисел 
