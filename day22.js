const _ = require('lodash');
const { readInput } = require('./helper_funcions.js');

function format(line) {
  const [, x, y, size, used, aval] = line.match(/-x([0-9]+)-y([0-9]+)\s+([0-9]+)T\s+([0-9]+)T\s+([0-9]+)/).map(val => parseInt(val))
  return ({ x, y, size, used, aval });
}

function day22(data) {
  const result = data.map((line, index) => {
    return data.filter((l, ind) => {
      return  (index !== ind && line.used !== 0 && line.used <= l.aval)
    });
  });
  console.log(_.flatten(result).length);
}

readInput(format, day22);