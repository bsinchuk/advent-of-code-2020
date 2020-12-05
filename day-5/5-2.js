'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-5', 'utf-8').split('\n');

const seats = {};

const rowLength = 7;
const seatLength = 3;
const capacity = 2 ** (7 + 3);

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
  seats[id] = true;
}

const offset = Math.ceil((capacity - input.length) / 2);

for (let i = offset; i < capacity - offset; i++) {
  if (!seats[i]) console.log(i);
}

