const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  const [, num, size, pos] = line.match(/#(\d+) has (\d+) .+ (\d+)/).map(val => parseInt(val));
  return { num, size, pos };
}

function day15(data) {
  let found = false, time = 0;
  while (!found) {
    if (data.filter(disc => {
      return (time + disc.num + disc.pos) % disc.size !== 0
    }).length === 0) {
      found = true;
    } else {
      time++;
    }
  }
  console.log(time)
}

readInput(format, day15);