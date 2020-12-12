'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-12', 'utf-8').split('\n');

const position = [10, 1];
const shipPosition = [0, 0];


for (const line of input) {
  const command = line[0];
  const value = +line.slice(1, line.length);
  if (command === 'F') {
    shipPosition[0] += value * position[0];
    shipPosition[1] += value * position[1];
  } else if (command === 'N') {
    position[1] += value;
  } else if (command === 'S') {
    position[1] -= value;
  } else if (command === 'E') {
    position[0] += value;
  } else if (command === 'W') {
    position[0] -= value;
  } else if (command === 'R' || command === 'L') {
    if (value === 180) {
      position[0] *= -1;
      position[1] *= -1;
    } else if (line === 'R90' || line === 'L270') {
      const temp = position[0];
      position[0] = position[1];
      position[1] = temp * -1;
    } else {
      const temp = position[0];
      position[0] = -1 * position[1];
      position[1] = temp;
    }
  }
}

console.log(Math.abs(shipPosition[0]) + Math.abs(shipPosition[1]));
