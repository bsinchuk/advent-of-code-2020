'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input-12', 'utf-8').split('\n');

const directions = {
  'east': {
    'index': 0,
    'sign': '1'
  },
  'south': {
    'index': 1,
    'sign': -1
  },
  'west': {
    'index': 0,
    'sign': -1,
  },
  'north': {
    'index': 1,
    'sign': 1
  }
};

const position = [0, 0];

let direction = 'east';

for (const line of input) {
  const command = line[0];
  const value = +line.slice(1, line.length);
  if (command === 'F') {
    position[directions[direction].index] +=
    value * directions[direction].sign;
  } else if (command === 'N') {
    position[1] += value;
  } else if (command === 'S') {
    position[1] -= value;
  } else if (command === 'E') {
    position[0] += value;
  } else if (command === 'W') {
    position[0] -= value;
  } else if (command === 'R' || command === 'L') {
    const directionsArr = Object.keys(directions);
    const offset = value / 90;
    const currentDirIndex = directionsArr.indexOf(direction);
    let newDirIndex = 0;
    if (command === 'R') {
      newDirIndex = (currentDirIndex + offset) % 4;
    } else if (command === 'L') {
      newDirIndex = (currentDirIndex - offset);
      if (newDirIndex < 0) newDirIndex += 4;
    }
    direction = directionsArr[newDirIndex];
  }
}

console.log(Math.abs(position[0]) + Math.abs(position[1]));
