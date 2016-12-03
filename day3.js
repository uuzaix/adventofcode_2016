const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter = 0;

rl.on('line', (line) => {
  const [a, b, c ] = line.replace(/([\s]+)/g, ' ').split(' ').slice(1);
  if ((+a) + (+b) > +c) {
    if ((+a) + (+c) > +b) {
      if ((+b) + (+c) > +a) {
        counter += 1
      }
    }
  }
  console.log(counter);
});
