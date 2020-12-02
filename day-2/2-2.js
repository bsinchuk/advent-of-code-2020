'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-2', 'utf-8').split('\n');

let result = 0;

for (const line of input) {
  const lineArr = line.split(' ');
  const [from, to] = lineArr[0].split('-');
  const symbol = lineArr[1][0];
  let occurrences = 0;
  if (lineArr[2][from - 1] === symbol) occurrences++;
  if (lineArr[2][to - 1] === symbol) occurrences++;
  if (occurrences === 1) result++;
}

console.log(result);
