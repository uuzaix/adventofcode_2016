const _ = require('lodash');
const { readInput } = require('./helper_funcions.js')

function format(line) {
  return line.split('');
}

function calculate(arr) {
  return arr.filter(el => el === '.').length;
}

function findNextRow(arr) {
  let nextRow = []
  return arr.map((el, i) => {
    let section;
    if (i === 0) {
      section = ['.', el, arr[i + 1]];
    } else if (i === arr.length - 1) {
      section = [arr[i - 1], el, '.'];
    } else {
      section = [arr[i - 1], el, arr[i + 1]];
    }
    if (el === '^' && calculate(section) === 1) {
      return '^';
    } else if (el !== '^' && calculate(section) === 2) {
      return '^';
    } else {
      return '.';
    }
  });
}

function day18(data) {
  let sum = calculate(data[0]);
  while (data.length < 40) {
    const nextRow = findNextRow(_.last(data));
    data.push(nextRow);
    sum += calculate(nextRow);
  }
  console.log(sum);
}

readInput(format, day18);


