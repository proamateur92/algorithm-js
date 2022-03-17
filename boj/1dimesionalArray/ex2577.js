const input = require('fs').readFileSync(0).toString().trim().split('\n');

const num1 = parseInt(input[0], 10);
const num2 = parseInt(input[1], 10);
const num3 = parseInt(input[2], 10);
const arrNum = String(num1 * num2 * num3);
const result = new Array(10);
result.fill(0);

for (let n of arrNum) {
  n = parseInt(n, 10);
  result[n]++;
}

result.forEach(num => {
  console.log(`${num}`);
});
