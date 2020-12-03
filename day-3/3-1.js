'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-3', 'utf-8').split('\n');

let result = 0;
const [slopeX, slopeY] = [3, 1];
const lineLength = input[0].length;

for (let i = 0, j = 0; i < input.length; i += slopeY, j++) {
  const offset = (slopeX * j) % lineLength;
  if (input[i][offset] === '#') result++;
}

console.log(result);
