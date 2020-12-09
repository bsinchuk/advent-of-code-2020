'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-9', 'utf-8').split('\n').map(e => +e);

const numberValue = 1038347917;
const numberIndex = input.indexOf(numberValue);

outer: for (let i = 0; i < numberIndex; i++) {
  const numbers = [];
  let sum = input[i];
  numbers.push(input[i]);
  for (let j = i + 1; j < numberIndex; j++) {
    sum += input[j];
    numbers.push(input[j]);
    if (sum > numberValue) break;
    if (sum === numberValue) {
      console.log(Math.min(...numbers) + Math.max(...numbers));
      break outer;
    }
  }
}
