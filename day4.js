const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  const [, letters, sector, checkSum] = line.match(/([a-z-]+)-([0-9]+)\[([a-z]+)\]/)
  return [letters.replace(/-/g, '').split('').sort(), +sector, checkSum]
}

function sortByAlph(array) {
  let joined = []
  while (array.length > 0) {
    const part = array.splice(0, array.lastIndexOf(array[0]) + 1);
    joined.push(part.join(''));
  }
  return joined;
}

function sortDesc(a, b) {
  if (b.length === a.length) {
    if (b[0] > a[0]) {
      return -1
    } else {
      return 1
    }
  } else {
    return b.length - a.length
  }
}

function countReal(array, sortFunc) {
  let sum = 0;
  array.forEach(a => {
    const fiveCommon = sortByAlph(a[0]).sort(sortFunc).slice(0, 5).map(letters => letters[0]);
    if (a[2] === fiveCommon.join('')) {
      sum += a[1];
    }
  }
  )
  return sum;
}

function day4(array) {
  console.log('Part 1: ', countReal(array, sortDesc));
}

readInput(format, day4);