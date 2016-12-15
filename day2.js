// const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.split('');
}


function checkLim(val) {
  if (val < 0) {
    return 0
  } else if (val > 2) {
    return 2
  } else {
    return val
  }
}

function move(instr, x, y) {
  switch (instr) {
    case 'U':
      x -= 1;
      break;
    case 'D':
      x += 1;
      break;
    case 'L':
      y -= 1;
      break;
    case 'R':
      y += 1;
      break;
  }
  return [checkLim(x), checkLim(y)];
}

let result = [];
let row = 1, col = 1;
const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function findDigit(line) {
  line.forEach(instr => {
    [row, col] = move(instr, row, col)
  })
}

function part1(data) {
  data.forEach(line => {
    findDigit(line);
    result.push(keypad[row][col]);
  })
  console.log(result);
}

readInput(format, part1);
