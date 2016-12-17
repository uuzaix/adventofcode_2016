const { readInput } = require('./helper_funcions.js')

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

function rect(board, x, y) {
  for (let row = 0; row < y; row++) {
    for (let col = 0; col < x; col++) {
      const newVal = board[row][col] === 0 ? 1 : 0
      board[row][col] = newVal;
    }
  }
  return board;
}

function shiftRowInArr(board, rowInd, val) {
  const temp = shiftRow(board[rowInd], val)
  board[rowInd] = temp;
  return board;
}

function shiftRow(row, val) {
  const len = row.length;
  let temp = row;
  if (val > len) {
    val = val % len
  }
  return temp.slice(len - val, len).concat(temp.slice(0, len - val))
}

function shiftCol(board, col, val) {
  let temp = [];
  board.forEach(row => temp.push(row[col]))
  temp = shiftRow(temp, val);
  board.forEach((row, i) => {
    board[i][col] = temp[i]
  })
  return board;
}

function calculate(board) {
  let count = 0;
  board.forEach(row => {
    row.forEach(col => {
      count += col;
    })
  })
  return count;
}

function display(board) {
  board.forEach(line => {
    let temp = [];
    line.forEach(char => {
    if (char === 0){
      temp.push('.')
    } else {
      temp.push('#');
    }
    })
    console.log(temp.join(''))
  })
}

function day8(input) {
  let board = createBoard(50, 6);
  input.forEach(instr => {
    if (instr.length === 2) {
      board = rect(board, instr[0], instr[1]);
    } else if (instr[0] === 'row') {
      board = shiftRowInArr(board, instr[1], instr[2])
    } else {
      board = shiftCol(board, instr[1], instr[2])
    }
  })
  console.log(calculate(board));
  display(board);
}

readInput(format, day8);