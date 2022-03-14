const input = parseInt(require('fs').readFileSync(0).toString().trim());

let cnt = 0;
let result = input;
let check = true;

while (check) {
  let x = Math.floor(result / 10);
  let y = result % 10;

  result = x + y;
  cnt++;

  if (result < 10) {
    result = parseInt(`${y}${result}`, 10);
  } else {
    result = parseInt(`${y}${result % 10}`, 10);
  }

  if (result === input) {
    check = false;
  }
}

console.log(cnt);
