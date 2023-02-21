'use stict';
const isPrime = (n) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Это не простое число ";
    }
  }
  return true;
};
isPrime();
console.log('isPrime: ', isPrime(5));






































// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// isPrime();
// console.log("isPrime: ", isPrime(153));

