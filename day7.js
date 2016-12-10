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

function supportsTLS(array) {
  let countAbba = 0, countAnti = 0;
  array.forEach((str, i) => {
    if (i % 2 === 0 || i === 0) {
      if (hasAbba(str)) {
        countAbba += 1;
      }
    }
    if (i % 2 !== 0) {
      if (hasAbba(str)) {
        countAnti += 1;
      }
    }
  })
  if (countAbba > 0 && countAnti === 0) {
    return true
  }
}


function checkData1(data) {
  console.log(data.filter(value => supportsTLS(value)).length);
};

readInput(format, checkData1);
