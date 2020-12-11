'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-11', 'utf-8').split('\n');

const calculateOccupied = (i, j, arr) => {
  let amount = 0;
  if (i > 0) {
    if (arr[i - 1][j] === '#') amount++;
    if (j < arr[i].length - 1) {
      if (arr[i - 1][j + 1] === '#') amount++;
    }
    if (j > 0) {
      if (arr[i - 1][j - 1] === '#') amount++;
    }
  }
  if (i < input.length - 1) {
    if (arr[i + 1][j] === '#') amount++;
    if (j < arr[i].length - 1) {
      if (arr[i + 1][j + 1] === '#') amount++;
    }
    if (j > 0) {
      if (arr[i + 1][j - 1] === '#') amount++;
    }
  }
  if (j > 0) {
    if (arr[i][j - 1] === '#') amount++;
  }

  if (j < arr[i].length - 1) {
    if (arr[i][j + 1] === '#') amount++;
  }
  return amount;
};

let chaotic = true;
let base = input.map(arr => arr.slice());

while (chaotic) {
  const arr = [];
  chaotic = false;
  for (let i = 0; i < base.length; i++) {
    const line = [];
    for (let j = 0; j < base[i].length; j++) {
      if (base[i][j] !== '.') {
        const amount = calculateOccupied(i, j, base);
        if (amount === 0 && base[i][j] !== '#') {
          line.push('#');
          chaotic = true;
        } else if (amount >= 4 && base[i][j] !== 'L') {
          line.push('L');
          chaotic = true;
        } else {
          line.push(base[i][j]);
        }
      } else {
        line.push('.');
      }
    }
    arr.push(line);
  }
  base = arr.map(el => el.slice());
}

let result = 0;
for (let i = 0; i < base.length; i++) {
  for (let j = 0; j < base[i].length; j++) {
    if (base[i][j] === '#') result++;
  }
}
console.log(result);
