'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-2', 'utf-8').split('\n');

let result = 0;

for (const line of input) {
  const lineArr = line.split(' ');
  const [from, to] = lineArr[0].split('-');
  const symbol = lineArr[1][0];
  const occurrences = lineArr[2].split(symbol).length - 1;
  if (occurrences >= from && occurrences <= to) result++;
}

console.log(result);
