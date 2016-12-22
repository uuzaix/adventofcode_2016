const { readInput } = require('./helper_funcions.js');

function format(line) {
  return line.trim().split('-').map(val => parseInt(val))
}

function findMin(data) {
  data.sort((a, b) => a[0] - b[0]);
  const allowed = data.reduce((acc, curr) => {
    if (curr[0] <= acc) {
      return Math.max(acc, curr[1]+1);
    } else {
      return acc
    }
  }, 0);
  console.log(allowed);
}

readInput(format, findMin);
