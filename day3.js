const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter = 0;

rl.on('line', (line) => {
  const triangle = line.replace(/([\s]+)/g, ' ').split(' ').slice(1);
  if (parseInt(triangle[0]) + parseInt(triangle[1]) > parseInt(triangle[2])) {
    if (parseInt(triangle[0]) + parseInt(triangle[2]) > parseInt(triangle[1])) {
      if (parseInt(triangle[1]) + parseInt(triangle[2]) > parseInt(triangle[0])) {
        counter += 1
      }
    }
  }
  console.log(counter);
});