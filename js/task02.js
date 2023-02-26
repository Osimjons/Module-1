'use srtict';
const generateRandomArrayInRange = (arrayLength, n, m) => {
  const randomArray = [];
  const minValue = Math.min(n, m);
  const maxValue = Math.max(n, m);
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    randomArray.push(randomNumber);
  }
  return randomArray;
};

const randomArrayInRange = generateRandomArrayInRange(10, -5, 15);
console.log(randomArrayInRange); 

