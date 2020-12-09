'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-9', 'utf-8').split('\n').map(e => +e);

const preLen = 25;

main: for (let i = preLen; i < input.length; i++) {
  const element = input[i];
  const preArray = input.slice(i - preLen, i);
  let valid = false;
  for (let j = 0; j < preLen; j++) {
    const diff = element - preArray[j];
    if (diff < 1) {
      continue;
    } else if (preArray.includes(diff) && preArray.indexOf(diff) !== j) {
      valid = true;
      break;
    }
  }
  if (!valid) {
    console.log(element);
    break main;
  }
}

