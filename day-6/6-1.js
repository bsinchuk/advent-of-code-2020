'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-6', 'utf-8')
  .split('\n\n')
  .map(str => str.replaceAll('\n', ''));

let result = 0;

for (const line of input) {
  result += new Set(line).size;
}

console.log(result);
