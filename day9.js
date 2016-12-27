const _ = require('lodash');
const { readInput, broadcast } = require('./helper_funcions.js')

function format(line) {
  return line.replace('\s', '');
}

function day9(data) {
  let input = data[0];
  const re = /[(](\d+)x(\d+)[)]/;
  let result = 0;
  while (input.length > 0) {
    const match = re.exec(input);
    if (match) {
      result += match.index + match[1] * match[2];
      input = input.slice(match.index + match[0].length + match[1], input.length);
    } else {
      result += input.length;
      input = '';
    }
  }
  console.log(result);
}
readInput(format, day9);