'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-1', 'utf-8').split('\n').map(e => +e);

let result = null;
const goal = 2020;

for (const number of input) {
  const diff = goal - number;
  if (input.includes(diff)) {
    result = number * diff;
    break;
  }
}

console.log(result);

