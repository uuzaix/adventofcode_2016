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

function sortAsc(a,b) {
  return a.length - b.length
}
function sortDesc(a,b) {
  return b.length - a.length
}

function composeWord(array, sortFunc) {
   return transpose(array).map(a => sortByAlph(a).sort(sortFunc)[0][0]).join('');
}

function day6(array) {
   console.log('Part 1: ', composeWord(array, sortDesc));
   console.log('Part 2: ', composeWord(array, sortAsc));
}

readInput(format, day6);