'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-6', 'utf-8')
  .split('\n\n')
  .map(str => str.split('\n'));

let result = 0;

for (const line of input) {
  const arr = line.map(str => str.split(''));
  const intersection = arr.reduce((a, b) => a.filter(e => b.includes(e)));
  result += intersection.length;
}

console.log(result);

