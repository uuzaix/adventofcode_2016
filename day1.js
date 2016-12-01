const input = 'L5, R1, L5, L1, R5, R1, R1, L4, L1, L3, R2, R4, L4, L1, L1, R2, R4, R3, L1, R4, L4, L5, L4, R4, L5, R1, R5, L2, R1, R3, L2, L4, L4, R1, L192, R5, R1, R4, L5, L4, R5, L1, L1, R48, R5, R5, L2, R4, R4, R1, R3, L1, L4, L5, R1, L4, L2, L5, R5, L2, R74, R4, L1, R188, R5, L4, L2, R5, R2, L4, R4, R3, R3, R2, R1, L3, L2, L5, L5, L2, L1, R1, R5, R4, L3, R5, L1, L3, R4, L1, L3, L2, R1, R3, R2, R5, L3, L1, L1, R5, L4, L5, R5, R2, L5, R2, L1, L5, L3, L5, L5, L1, R1, L4, L3, L1, R2, R5, L1, L3, R4, R5, L4, L1, R5, L1, R5, R5, R5, R2, R1, R2, L5, L5, L5, R4, L5, L4, L4, R5, L2, R1, R5, L1, L5, R4, L3, R4, L2, R3, R3, R3, L2, L2, L2, L1, L4, R3, L4, L2, R2, R5, L1, R2';

const input_list = input.split(", ");

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
  return (Math.abs(x) + Math.abs(y));
}

console.log(find_distance(input_list));