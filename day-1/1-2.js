'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-1', 'utf-8').split('\n').map(e => +e);

let result = null;
const goal = 2020;

for (let i = 0; i < input.length; i++) {
  const remainder = goal - input[i];
  for (let j = i + 1; j < input.length; j++) {
    const leftover = remainder - input[j];
    if (leftover > 0) {
      if (input.slice(j + 1, input.length + 1).includes(leftover)) {
        result = input[i] * input[j] * leftover;
      }
    }
  }
}

console.log(result);

