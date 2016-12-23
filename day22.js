const { readInput } = require('./helper_funcions.js');

function format(line) {
  const [, x, y, size, used, aval] = line.match(/-x([0-9]+)-y([0-9]+)\s+([0-9]+)T\s+([0-9]+)T\s+([0-9]+)/)
  return ({ x: parseInt(x), y: parseInt(y), size: parseInt(size), used: parseInt(used), aval: parseInt(aval) });
}

function day22(data) {
  let counter = 0;
  data.forEach((line, index) => {
    data.forEach((l, ind) => {
      if (index !== ind && line.used !== 0 && line.used <= l.aval) {
          counter += 1;
      }
    });
  });
  console.log(counter);
}

readInput(format, day22);