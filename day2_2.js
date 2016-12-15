const { readInput } = require('./helper_funcions.js');

let result = [];
let row = 2, col = 0;
const keypad = [[0, 0, 1, 0, 0], [0, 2, 3, 4, 0], [5, 6, 7, 8, 9], [0, 'A', 'B', 'C', 0], [0, 0, 'D', 0, 0]]

function format(line) {
  return line.split('');
}

function checkLim(x, y) {
  if (x >= 0 && y >= 0 && x < 5 && y < 5) {
    if (keypad[x][y] !== 0) {
      return true
    }
  }
  return false
}

function move(instr, x, y) {
  let newX = x;
  let newY = y;
  switch (instr) {
    case 'U':
      newX -= 1;
      break;
    case 'D':
      newX += 1;
      break;
    case 'L':
      newY -= 1;
      break;
    case 'R':
      newY += 1;
      break;
  }
  if (checkLim(newX, newY)) {
    return [newX, newY]
  }
  return [x, y];
}


function findDigit(line) {
  line.forEach(instr => {
    [row, col] = move(instr, row, col);
    console.log(instr, row, col);
  })
}

function part2(data) {
  data.forEach(line => {
    findDigit(line);
    result.push(keypad[row][col]);
  })
  console.log(result);
}

readInput(format, part2);
