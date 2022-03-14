const input = require('fs').readFileSync(0).toString().trim().split('\n');
let cnt = input.length;
let result = '';

while (cnt > 1) {
  const [x, y] = input[input.length - cnt].split(' ');
  result += parseInt(x) + parseInt(y) + '\n';
  --cnt;
}

console.log(result);
