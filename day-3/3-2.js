'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-3', 'utf-8').split('\n');

const slopeList = [ { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 },
  { x: 7, y: 1 }, { x: 1, y: 2 }, ];
const resultList = [];
const lineLength = input[0].length;

for (const slope of slopeList) {
  let result = 0;
  for (let i = 0, j = 0; i < input.length; i += slope.y, j++) {
    const offset = (slope.x * j) % lineLength;
    if (input[i][offset] === '#') result++;
  }
  resultList.push(result);
}

const totalResult = resultList.reduce((prev, next) => prev * next);
console.log(totalResult);

