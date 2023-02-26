'use strict';

const getLeapYearsInRange = (n, m) => {
  const leapYears = [];
  const minValue = Math.min(n, m);
  const maxValue = Math.max(n, m);
  for (let year = minValue; year <= maxValue; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
};

const leapYears = getLeapYearsInRange(1950, 2030);
console.log(leapYears); 