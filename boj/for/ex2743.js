const input = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = '';

for (let i = parseInt(input); i >= 1; i--) {
  answer += i + '\n';
}

console.log(answer);
