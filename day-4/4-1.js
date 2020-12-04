'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-4', 'utf-8')
  .split('\n\n')
  .map(str => str.replaceAll('\n', ' '));
let result = input.length;
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', ];

for (const passport of input) {
  for (const field of fields) {
    if (passport.indexOf(field) === -1) {
      result--;
      break;
    }
  }
}

console.log(result);





