const input = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = '';

for (let i = 1; i < input.length; i++) {
  let num = input[i].split(' ');
  answer += `Case #${i}: ${parseInt(num[0])} + ${parseInt(num[1])} = ${parseInt(num[0]) + parseInt(num[1])}\n`;
}

console.log(answer);
