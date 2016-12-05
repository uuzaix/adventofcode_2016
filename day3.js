const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.trim().split(/\s+/).map(val => parseInt(val))
}

function checkTriangles(data, taskName) {
  const triangles = data.filter(([a, b, c]) => {
    return a + b > c && a + c > b && b + c > a
  });
  console.log(taskName + triangles.length);
}

function part1(data) {
  checkTriangles(data, 'Part 1: ')
}

function part2(data) {
  let counter = 0;
  let data_modified = [];
  for (let i = 0; i < data.length - 2; i += 3) {
    for (let j = 0; j < 3; j++) {
      data_modified.push([data[i][j], data[i + 1][j], data[i + 2][j]])
    }
  }
  checkTriangles(data_modified, "Part 2: ");
}

readInput(format, broadcast(part1, part2));
