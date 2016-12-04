const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.trim().split(/\s+/).map(val => parseInt(val))
}

function part1(data) {
  const triangles = data.filter(([a, b, c]) => {
    return a + b > c && a + c > b && b + c > a
  });
  console.log("Part 1: " + triangles.length);
}

function part2(data) {
  let counter = 0;
  for (let i = 0; i < data.length - 2; i += 3) {
    for (let j = 0; j < 3; j++) {
      if (data[i][j] + data[i + 1][j] > data[i + 2][j]) {
        if (data[i + 1][j] + data[i + 2][j] > data[i][j]) {
          if (data[i][j] + data[i + 2][j] > data[i + 1][j]) {
            counter += 1;
          }
        }
      }
    }
  }
  console.log("Part 2: " + counter);
}

readInput(format, broadcast(part1, part2));
