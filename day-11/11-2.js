'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-11', 'utf-8').split('\n');

const calculateVisibleOccupied = (i, j, arr) => {
  let amount = 0;

  let topleft = 0;
  let counter = 1;
  for (let m = i - 1; m >= 0; m--) {
    const n = j - counter;
    counter++;
    if (n >= 0) {
      const symbol = arr[m][n];
      if (symbol === '.') continue;
      if (symbol === 'L') break;
      if (symbol === '#') {
        topleft = 1;
        break;
      }
    }
  }
  amount += topleft;

  let topmiddle = 0;
  for (let m = i - 1; m >= 0; m--) {
    const symbol = arr[m][j];
    if (symbol === '.') continue;
    if (symbol === 'L') break;
    if (symbol === '#') {
      topmiddle = 1;
      break;
    }
  }
  amount += topmiddle;

  let topright = 0;
  counter = 1;
  for (let m = i - 1; m >= 0; m--) {
    const n = j + counter;
    counter++;
    if (n < arr[j].length) {
      const symbol = arr[m][n];
      if (symbol === '.') continue;
      if (symbol === 'L') break;
      if (symbol === '#') {
        topright = 1;
        break;
      }
    }
  }
  amount += topright;

  let bottomleft = 0;
  counter = 1;
  for (let m = i + 1; m < arr.length; m++) {
    const n = j - counter;
    counter++;
    if (n >= 0) {
      const symbol = arr[m][n];
      if (symbol === '.') continue;
      if (symbol === 'L') break;
      if (symbol === '#') {
        bottomleft = 1;
        break;
      }
    }
  }
  amount += bottomleft;

  let bottommiddle = 0;

  for (let m = i + 1; m < arr.length; m++) {
    const symbol = arr[m][j];
    if (symbol === '.') continue;
    if (symbol === 'L') break;
    if (symbol === '#') {
      bottommiddle = 1;
      break;
    }
  }
  amount += bottommiddle;

  let bottomright = 0;
  counter = 1;
  for (let m = i + 1; m < arr.length; m++) {
    const n = j + counter;
    counter++;
    if (n < arr[j].length) {
      const symbol = arr[m][n];
      if (symbol === '.') continue;
      if (symbol === 'L') break;
      if (symbol === '#') {
        bottomright = 1;
        break;
      }
    }
  }
  amount += bottomright;

  let midleft = 0;
  for (let m = j - 1; m >= 0; m--) {
    const symbol = arr[i][m];
    if (symbol === '.') continue;
    if (symbol === 'L') break;
    if (symbol === '#') {
      midleft = 1;
      break;
    }
  }
  amount += midleft;

  let midright = 0;
  for (let m = j + 1; m < input[j].length; m++) {
    const symbol = arr[i][m];
    if (symbol === '.') continue;
    if (symbol === 'L') break;
    if (symbol === '#') {
      midright = 1;
      break;
    }
  }
  amount += midright;

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
        const amount = calculateVisibleOccupied(i, j, base);
        if (amount === 0 && base[i][j] !== '#') {
          line.push('#');
          chaotic = true;
        } else if (amount >= 5 && base[i][j] !== 'L') {
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
