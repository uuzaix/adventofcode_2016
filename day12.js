const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.split(' ')
}

function assembunny(data, reg) {
  for (let i = 0; i < data.length; i++) {
    const arr = data[i];
    switch (arr[0]) {
      case 'inc':
        reg[arr[1]] = reg[arr[1]] + 1;
        break;
      case 'dec':
        reg[arr[1]] = reg[arr[1]] - 1;
        break;
      case 'jnz':
        if (reg[arr[1]] !== 0 && parseInt(arr[1]) !== 0) {
          i = i + parseInt(arr[2]) - 1;
        }
        break;
      case 'cpy':
        if (Number.isNaN(parseInt(arr[1]))) {
          reg[arr[2]] = reg[arr[1]];
        } else {
          reg[arr[2]] = parseInt(arr[1]);
        }
        break;
    }
  }
  return reg.a;
}

function day12(data) {
  let reg = { a: 0, b: 0, c: 0, d: 0 };
  console.log('Part 1, c = 0: ', assembunny(data, reg));
  reg.c = 1;
  console.log('Part 2, c = 1: ', assembunny(data, reg))
}
readInput(format, day12);