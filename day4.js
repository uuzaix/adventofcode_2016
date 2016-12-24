const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  const [, letters, sector, checkSum] = line.match(/([a-z-]+)-([0-9]+)\[([a-z]+)\]/)
  return [letters, +sector, checkSum]
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

function findReal(array, sortFunc) {
  return array.filter(a => {
    const fiveCommon = sortByAlph(a[0].replace(/-/g, '').split('').sort()).sort(sortFunc).slice(0, 5).map(letters => letters[0]);
    return (a[2] === fiveCommon.join(''))
  });
}

function day4(array) {
  const real = findReal(array, sortDesc);
  console.log('Part 1: ', real.length);
  console.log('Part 2: ', rotate(real));
}

function rotate(array) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  return array.filter(arr => {
    const rotatedName = arr[0].split('').map(letter => {
      if (letter === '-') {
        return ' '
      } else {
        return alph[(alph.indexOf(letter) + arr[1]) % alph.length]
      }
    }).join('');
    return rotatedName === 'northpole object storage';
  })[0][1]
}

readInput(format, day4);