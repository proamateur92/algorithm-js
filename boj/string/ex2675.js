const input = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  let [num, str] = input[i].trim().split(' ');
  num = parseInt(num, 10);
  let result = '';

  for (let c of str) {
    let cnt = num;
    while (cnt--) {
      result += c;
    }
  }

  console.log(result);
}
