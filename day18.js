const _ = require('lodash');
const { readInput } = require('./helper_funcions.js')

function format(line) {
  return line.split('');
}

function calculate(arr) {
  const newArr = arr.filter(el => {
    return el === '.';
  })
  return newArr.length;
}

function findNextRow(arr) {
  let nextRow = []
  arr.forEach((el, i) => {
    let section;
    if (i === 0) {
      section = ['.', el, arr[i + 1]];
    } else if (i === arr.length - 1) {
      section = [arr[i - 1], el, '.'];
    } else {
      section = [arr[i - 1], el, arr[i + 1]];
    }
    if (el === '^' && calculate(section) === 1) {
      nextRow.push('^');
    } else if (el !== '^' && calculate(section) === 2) {
      nextRow.push('^');
    } else {
      nextRow.push('.');
    }
  })
  return nextRow;
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


