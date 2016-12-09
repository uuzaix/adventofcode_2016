const { readInput } = require('./helper_funcions.js')

function format(line) {
  return line.split(/\[|\]/);
}

function hasRepetition(line) {
  const rep = line.match(/(.)(.)\2\1/);
  if (rep !== null && rep[1] !== rep[2]) {
    return true;
  } else {
    return false;
  }
}

function checkData(data) {
  let result = 0;
  data.forEach(array => {
    let countAbba = 0, countAnti = 0;
    array.forEach((str, i) => {
      if (i % 2 === 0 || i === 0) {
        if (hasRepetition(str)) {
          countAbba += 1;
        }
      }
      if (i % 2 !== 0) {
        if (hasRepetition(str)) {
          countAnti += 1;
        }
      }
    })
    if (countAbba > 0 && countAnti === 0) {
      result += 1;
    }
  })
  console.log(result);
};

readInput(format, checkData);