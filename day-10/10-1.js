'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-10', 'utf-8')
  .split('\n')
  .map(e => +e)
  .sort((one, two) => one - two);

let one = 1;
let three = 1;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i + 1] - input[i] === 1) {
    one++;
  } else if (input[i + 1] - input[i] === 3) {
    three++;
  }
}

console.log(one * three);
