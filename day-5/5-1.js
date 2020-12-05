'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-5', 'utf-8').split('\n');

let max = -1;
const rowLength = 7;
const seatLength = 3;

const decypher = (code, lower) => {
  const len = code.length;
  let value = 2 ** len - 1;
  for (let i = 0; i < len; i++) {
    if (code[i] === lower) value -= 2 ** (len - 1 - i);
  }
  return value;
};

for (const code of input) {
  const rowCode = code.slice(0, rowLength);
  const seatCode = code.slice(rowLength, rowLength + seatLength);
  const row = decypher(rowCode, 'F');
  const seat = decypher(seatCode, 'L');
  const id = row * 8 + seat;
  if (id > max) max = id;
}

console.log(max);
