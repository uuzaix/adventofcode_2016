const _ = require('lodash');
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

  const data_modified = _.flatten(data[0].map((col, i) => {
    return _.chunk(data.map(row => {
      return row[i]
    }), 3)
  }));

  checkTriangles(data_modified, "Part 2: ");
}

readInput(format, broadcast(part1, part2));
