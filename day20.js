const _ = require('lodash');
const { readInput } = require('./helper_funcions.js');

function format(line) {
  return line.trim().split('-').map(val => parseInt(val))
}

function findMin(data) {
  data.sort(arr => arr[0]);
  let min = 0;
  data.forEach(pair => {
    if (pair[0] <= min) {
      min = Math.max(min, pair[1] + 1);
    }
  });
  console.log(min);
}

readInput(format, findMin);
