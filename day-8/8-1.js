'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-8', 'utf-8').split('\n');

const parseOperation = line => {
  const [command, number] = line.split(' ');
  return [command, +number];
};

const acc = (op, acc) => {
  const value = acc += op;
  return [value, 0];
};

const jmp = (op, acc) => [acc, op - 1];

const executeMainLoop = source => {
  let accumulator = 0;
  const visitedLines = {};
  console.log('len:', source.length);

  main: for (let index = 0; index < source.length; index++) {
    console.log(index);
    if (visitedLines[index]) {
      break main;
    } else {
      visitedLines[index] = true;
    }
    let value = accumulator;
    let offset = 0;
    const [operator, operand] = parseOperation(source[index]);
    console.log(operator, operand);

    switch (operator) {
    case 'acc':
      [value, offset] = acc(operand, accumulator);
      break;
    case 'jmp':
      [value, offset] = jmp(operand, accumulator);
      break;
    }
    accumulator = value;
    console.log('acc:', accumulator);
    index += offset;
  }
  return accumulator;
};

console.log(executeMainLoop(input));
