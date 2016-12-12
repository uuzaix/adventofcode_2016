const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.split(/\[|\]/);
}

function filterByIndex(array, f) {
  return array.filter((str, i) => f(i))
}

const extractOdd = array => filterByIndex(array, i => i % 2 !== 0)
const extractEven = array => filterByIndex(array, i => i % 2 === 0)

function hasAbba(line) {
  const rep = line.match(/(.)(.)\2\1/);
  if (rep !== null && rep[1] !== rep[2]) {
    return true;
  } else {
    return false;
  }
}

function supportsTLS(array) {
  return _.some(extractEven(array).map(hasAbba)) && !_.some(extractOdd(array).map(hasAbba))     
}

function findAbaInStr(line) {
  let abas = [];
  for (var i = 0; i < line.length - 2; i++) {
    let part = line.slice(i, i + 3);
    if (part[0] === part[2] && part[0] !== part[1]) {
      abas.push(part);
    }
  }
  return abas;
}

function getAbas(array) {
  return array.map(findAbaInStr).reduce((a, b) => {
    return a.concat(b)
  });
}

function supportsSSL(array) {
  const abas = getAbas(extractOdd(array));
  const babs = getAbas(extractEven(array));
  for (a of abas) {
    if (babs.includes(a[1] + a[0] + a[1])) {
      return true;
    }
  }
  return false;
}

function checkData1(data) {
  console.log('Part1: ' + data.filter(supportsTLS).length);
};

function checkData2(data) {
  console.log('Part2: ' + data.filter(supportsSSL).length);
};

readInput(format, broadcast(checkData1, checkData2));