const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.replace('\s', '');
}

function decompress(input, part2) {
  const re = /[(](\d+)x(\d+)[)]/;
  let result = 0;
  while (input.length > 0) {
    const match = re.exec(input);
    if (match) {
      if (part2) {
        result += match.index;
        result += decompress(input.slice(match.index + match[0].length, match.index + match[0].length + parseInt(match[1])), true) * parseInt(match[2])
      } else {
        result += match.index + match[1] * match[2];
      }
      input = input.slice(match.index + match[0].length + parseInt(match[1]), input.length);
    } else {
      result += input.length;
      input = '';
    }
  }
  return result;
}

function day9(data) {
  let input = data[0];
  console.log('Part1: ', decompress(input, false));
  console.log('Part2: ', decompress(input, true));
}
readInput(format, day9);