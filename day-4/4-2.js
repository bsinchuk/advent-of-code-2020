'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-4', 'utf-8')
  .split('\n\n')
  .map(str => str.replaceAll('\n', ' '));
let result = input.length;
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', ];

const checkBYR = (str, index) => {
  const year = str.slice(index + 4, index + 8);
  return year >= 1920 && year <= 2002;
};

const checkIYR = (str, index) => {
  const year = +str.slice(index + 4, index + 8);
  return year >= 2010 && year <= 2020;
};

const checkEYR = (str, index) => {
  const year = +str.slice(index + 4, index + 8);
  return year >= 2020 && year <= 2030;
};

const checkHGT = (str, index) => {
  const system = str.slice(index + 4, index + 10);
  const number = parseInt(system.slice(0, 3));
  if (/^\d{2,3}in/.test(system)) {
    return number >= 59 && number <= 76;
  } if (/^\d{2,3}cm/.test(system)) {
    return number >= 150 && number <= 193;
  }
  return false;
};

const checkHCL = (str, index) => {
  const substr = str.slice(index + 4, index + 13);
  return /^#[0-9a-f]{6}/.test(substr);
};

const checkECL = (str, index) => {
  const clr = str.slice(index + 4, index + 12);
  return /^(amb|blu|brn|gry|grn|hzl|oth)/.test(clr);
};

const checkPID = (str, index) => {
  const number = str.slice(index + 4, index + 15);
  return /^[0-9]{9}(\D|$)/.test(number);
};



for (const passport of input) {
  for (const field of fields) {
    const index = passport.indexOf(field);
    if (index === -1) {
      result--;
      break;
    }
    let valid = true;
    switch (field) {
    case 'byr':
      valid = checkBYR(passport, index);
      break;
    case 'hgt':
      valid = checkHGT(passport, index);
      break;
    case 'hcl':
      valid = checkHCL(passport, index);
      break;
    case 'ecl':
      valid = checkECL(passport, index);
      break;
    case 'pid':
      valid = checkPID(passport, index);
      break;
    case 'iyr':
      valid = checkIYR(passport, index);
      break;
    case 'eyr':
      valid = checkEYR(passport, index);
    }
    if (!valid)  {
      result--;
      break;
    }
  }
}

console.log(result);
