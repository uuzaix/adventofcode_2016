const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (data) => {
  const input_list = data.split(", ");
  console.log(find_distance(input_list));
});


function find_distance(input) {
  let dir = 0;
  let x = 0;
  let y = 0;

  for (move of input) {
    const current_dir = move[0];
    const current_value = parseInt(move.slice(1));
    if (current_dir === 'R') {
      dir += 1;
    } else {
      dir -= 1;
    }
    dir = dir % 4;
    switch (dir) {
      case 0:
        y += current_value;
        break;
      case 1:
      case -3:
        x += current_value;
        break;
      case 2:
      case -2:
        y -= current_value;
        break;
      case 3:
      case -1:
        x -= current_value;
        break;
    }
  }
  return (Math.abs(x + y));
}