const { readInput } = require('./helper_funcions.js')

function format(line) {
  const [, num, size, pos] = line.match(/#(\d+) has (\d+) .+ (\d+)/).map(val => parseInt(val));
  return { num, size, pos };
}

function findTime(data) {
  let found = false, time = 0;
  while (!found) {
    if (data.filter(disc => {
      return (time + disc.num + disc.pos) % disc.size !== 0;
    }).length === 0) {
      found = true;
    } else {
      time++;
    }
  }
  return time;
}

function day15(data) {
  console.log('Part1: ', findTime(data));
  data.push({ num: 7, size: 11, pos: 0 });
  console.log('Part2: ', findTime(data));
}

readInput(format, day15);