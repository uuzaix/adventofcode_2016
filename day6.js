const { readInput } = require('./helper_funcions.js');

function format(line) {
  return line.split('');
}

function transpose(array) {
  return array[0].map((col, i) => {
    return array.map(row => {
      return row[i];
    }).sort()
  })
}

function sortByAlph(array) {
  let joined = []
  while (array.length > 0) {
    let part = array.splice(0, array.lastIndexOf(array[0]) + 1);
    joined.push(part.join(''));
  }
  return joined;
}

function part1(array) {
   const result = transpose(array).map(a => sortByAlph(a).sort((a, b) => {
    return b.length - a.length
  })[0][0]).join('');
  console.log('Part 1: ', result);
}

readInput(format, part1);