const _ = require('lodash');
const { readInput } = require('./helper_funcions.js');

function format(line) {
  return line.trim().split('-').map(val => parseInt(val))
}

function findMin(data) {
  data.sort((a, b) => a[0] - b[0]);
  const allowed = data.reduce((acc, curr) => {
    if (curr[0] <= acc[1]) {
      const max = Math.max(acc[1], curr[1]+1);
      return [max, max];
    } else {
      return acc
    }
  }, [0, 0]);
  console.log(allowed[0]);
}

readInput(format, findMin);
