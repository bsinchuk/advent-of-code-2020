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

  for (let index = 0; index < source.length; index++) {
    if (visitedLines[index]) {
      return 0;
    } else {
      visitedLines[index] = true;
    }

    let value = accumulator;
    let offset = 0;
    const [operator, operand] = parseOperation(source[index]);

    switch (operator) {
    case 'acc':
      [value, offset] = acc(operand, accumulator);
      break;
    case 'jmp':
      [value, offset] = jmp(operand, accumulator);
      break;
    }
    accumulator = value;
    index += offset;
  }
  return accumulator;
};

const linesToChange = [];

for (let i = 0; i < input.length; i++) {
  const operator = input[i].slice(0, 3);
  if (operator === 'jmp' || operator === 'nop') {
    linesToChange.push({
      index: i,
      operator: operator === 'jmp' ? 'jmp' : 'nop'
    });
  }
}

for (const line of linesToChange) {
  const source = [...input];
  const replacer = line.operator === 'jmp' ? 'nop' : 'jmp';
  source[line.index] = source[line.index].replace(line.operator, replacer);
  const result = executeMainLoop(source);
  if (result === 0) {
    // console.log(`Infinite loop with ${replacer} at ${line.index}`);
  } else {
    console.log(result);
  }
}
