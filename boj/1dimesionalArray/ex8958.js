const input = require('fs').readFileSync(0).toString().trim().split('\n');
let arrO = {};

for (let i = 1; i < input.length; i++) {
  arrO[i] = input[i].trim().split('X');

  let result = 0;

  for (let e of arrO[i]) {
    let sum = 0;
    let length = e.length;

    if (length === 0) sum = 0;

    while (length--) {
      result += ++sum;
    }
  }
  console.log(result);
}
