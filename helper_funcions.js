const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readInput(format, callback) {
  let data = [];
  rl.on('line', (line) => {
    data.push(format(line));
  });

  rl.on('close', () => {
    callback(data);
  });
}



const broadcast = (...fns) => arg => fns.forEach(f =>  f(arg));

// function broadcast(...fns) {
//   return function (arg) {
//     fns.forEach(function (f) {
//       f(arg)
//     })
//   }
// }

module.exports = { readInput, broadcast }