const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  const instr = line.split(' ');
  if (instr[0] === 'rect') {
    return instr[1].split('x').map(dig => parseInt(dig));
  }
  const dir = instr[1];
  const num = parseInt(instr[2].slice(2));
  const shift = parseInt(instr[4]);
  return [dir, num, shift];
}

function createBoard(width, heigth) {
  let board = [];
  for (var i = 0; i < heigth; i++) {
    let row = [];
    for (var j = 0; j < width; j++) {
      row.push(0)
    }
    board.push(row);
  }
  return board;
}

function rect(data, x, y) {
  for (let row = 0; row < x; row++) {
    for (let col = 0; col < y; y++) {
      const newVal = data[row][col] === 0 ? 1 : 0
      data[row][col] = newVal;
    }
  }
  return data;
}

function shiftRowInArr(data, rowInd, val) {
  const temp = shiftRow(data[rowInd], val)
  data[rowInd] = temp;
  return data;
}

function shiftRow(row, val) {
  const len = row.length;
  let temp = row;
  if (val > len) {
    val = val % len
  }
  return temp.slice(len - val, len).concat(temp.slice(0, len - val))
}

function shiftCol(data, col, val) {
  let temp = [];
  data.forEach(row => temp.push(row[col]))
  temp = shiftRow(temp, val);
  data.forEach((row, i) => {
    data[i][col] = temp[i]
  })
  return data;
}

function calculate(data) {
  let count = 0;
  data.forEach(row => {
    row.forEach(col => {
      count += col;
    })
  })
  return count;
}

function day8(input) {
  let board = createBoard(7, 3);
  console.log(board);
  let data = input;
  console.log(data);
  data.forEach(instr => {
    if (instr.lenght === 2) {
      board = rect(board, instr[0], instr[1]);
      console.log('rect', board)
    } else if (instr[0] === 'row') {
      board = shiftRowInArr(board, instr[1], instr[2])
      console.log('row', board)
    } else {
      board = shiftCol(board, instr[1], instr[2])
      console.log('col', board)
    }
  })
  // return board;
  console.log(calculate(board));
}

// readInput(format, day8);
// console.log(createBoard(50, 6));
// console.log(shiftRow([[0, 1, 2, 3, 4, 5],[1,2,3]], 0, 13));
console.log(rect([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 1, 1));
// console.log(shiftCol([[0, 1, 2, 3, 4, 5], [1, 2, 3]], 1, 1));