const { readInput } = require('./helper_funcions.js')

function format(line) {
  return line.split(/\[|\]/);
}

function hasRepetition(line) {
  const re = line.search(/(.)(.)\2\1/);
  if (re !== - 1) {
    return true;
  } else {
    return false;
  }
}

function checkData(data) {
  let result = 0;
  data.forEach(array => {
    let countAbba = 0, countAnti = 0;
    for (var i = 0; i < array.length; i++) {
      if (i % 2 !== 0 || i === 0) {
        if (hasRepetition) {
          countAbba += 1;
        }
      }
      if (i % 2 === 0) {
        if (hasRepetition) {
          countAnti += 1;
        }
      }
    }
    if (countAbba > 0, countAnti === 0) {
      result += 1;
    }
  })
  console.log(result);
};

// console.log(hasRepetition("abaasdffg"))

readInput(format, checkData);