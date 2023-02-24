'use strict';
/*Задача №3*/ 
const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];
const prefix = "Mr";

const addPrefix = (names, prefix) => {
  const prefixName = [];
  for (let i = 0; i < names.length; i++) {
    prefixName.push(`${prefix}.${names[i]}`);
  }
  return prefixName;
};
const res = addPrefix(names, prefix);
console.log("res: ", res);


