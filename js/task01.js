'use srtict';
const generateRandomArray = (arrayLength) => {
  const randomArray = [];
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  return randomArray;
};

const randomArray = generateRandomArray(10);
console.log(randomArray); 


