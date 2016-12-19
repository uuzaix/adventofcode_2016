const testInput = '10000'.split('');
const input = '10111011111001111'.split('');

function generate(input, size) {
  while (input.length < size) {
    let start = input.slice();
    const add = start.reverse().map(digit => {
      return digit === '0' ? '1' : '0';
    });
    input = input.concat(['0'], add);
  }
  return input.slice(0, size);
}


function findCheckSum(input) {
  let checkSum = [];
  let el;
  for (var i = 0; i < input.length - 1; i += 2) {
    const pair = input.slice(i, i + 2);
    switch (pair.join('')) {
      case '00':
      case '11':
        el = '1';
        break;
      default:
        el = '0';
    }
    checkSum.push(el);
  }
  return checkSum;
}

function day16(input, length) {
  let generatedData = findCheckSum(generate(input, length));
  while (generatedData.length % 2 === 0) {
    generatedData = findCheckSum(generatedData);
  }
  return generatedData.join('');
}


console.log(day16(testInput, 20));
console.log(day16(input, 272));
console.log(day16(input, 35651584));