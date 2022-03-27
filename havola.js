"use strict";
let a = 8,
  b = a;
console.log(b + 9);

const bmw = {
  color: `black`,
  isbuy: false,
};

const merc = bmw;
merc.color = `white`;
console.log(merc);
console.log(bmw);

function copyObj(obj) {
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

const nexiaR3 = {
  color: `black`,
  isBuy: false,
  shum: {
    a: 100,
    b: 200,
  },
};

const spark = copyObj(nexiaR3);
spark.shum.a = 300;
console.log(spark);
console.log(nexiaR3);

spark.color = `white`;

const nexia2 = {
  color: `red`,
  isBuy: true,
};
const extra = {
  shum: 100,
};

console.log(Object.assign(nexia2, extra));

const newCar = Object.assign({}, nexia2);
newCar.isBuy = false;
console.log(newCar);
console.log(nexia2);

const arr = [1, 2, 3, 4];
const newArr = arr.slice();

newArr[3] = 22;
console.log(arr);
console.log(newArr);

const cars = [`bmw`, `merc`, `mustang`],
  plane = [`german`, `yzbair`, `turkish`],
  tech = [...cars, ...plane, `matiz`];

console.log(tech);

function number(a, b, ...c) {
  console.log(a, b, c);
}

number(1, 2, 3);

function func(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const numbers = [1, 2, 3];
func(...numbers);
