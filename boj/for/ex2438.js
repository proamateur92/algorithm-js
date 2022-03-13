const input = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = '';
const star = '*';
let length = parseInt(input);
for (let i = 0; i < length; i++) {
  for (let j = length; j >= length - i; j--) {
    answer += star;
  }
  answer += '\n';
}
console.log(answer);
