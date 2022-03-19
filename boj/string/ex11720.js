const input = require('fs').readFileSync(0).toString().trim().split('\n');
const num = input[1];
let result = 0;

for (let n of num) {
  result += parseInt(n, 10);
}

console.log(result);
