const input = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = '';

for (let i = 1; i <= parseInt(input); i++) {
  answer += i + '\n';
}

console.log(answer);
