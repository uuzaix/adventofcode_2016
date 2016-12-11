const _ = require('underscore');
const { readInput } = require('./helper_funcions.js')

function format(line) {
  return line.split(/\[|\]/);
}

function hasAbba(line) {
  const rep = line.match(/(.)(.)\2\1/);
  if (rep !== null && rep[1] !== rep[2]) {
    return true;
  } else {
    return false;
  }
}

function extractEven(array) {
  return array.filter((str, i) => {
    return i % 2 === 0
  });
}

function extractOdd(array) {
  return array.filter((str, i) => {
    return i % 2 !== 0
  });
}

function supportsTLS(array) {
  if (_.any(extractEven(array).map(hasAbba)) && !_.any(extractOdd(array).map(hasAbba))) {
    return true
  }
}


function checkData1(data) {
  console.log(data.filter(supportsTLS).length);
};

readInput(format, checkData1);
