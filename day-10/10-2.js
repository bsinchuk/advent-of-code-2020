'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-10', 'utf-8')
  .split('\n')
  .map(e => +e)
  .sort((one, two) => one - two);

input.unshift(0);
input.push(Math.max(...input) + 3);

let length = 0;
let triples = 0;
let tripleCounter = 0;

for (let i = 1; i <= input.length - 1; i++) {
  if (input[i + 1] - input[i - 1] <= 3) {
    length++;
    tripleCounter++;
  } else {
    tripleCounter = 0;
  }
  if (tripleCounter === 3) {
    triples++;
    tripleCounter = 0;
  }
}

const factorial = num => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const calculateCombinations = (n, k) => (
  factorial(n) / (factorial(n - k) * factorial(k))
);

const calculateWrongSequences = (triples, length) => {
  let sum = 0;
  for (let i  = 1; i <= triples; i++) {
    let number = calculateCombinations(triples, i) * 2 ** (length - i * 3);
    if (i % 2 !== 0) number *= -1;
    sum += number;
  }
  return sum;
};

console.log(2 ** length + calculateWrongSequences(triples, length));
