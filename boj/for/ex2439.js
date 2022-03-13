const input = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = '';
const star = '*';
const blank = ' ';

let length = parseInt(input[0]);

for (let i = 0; i < length; i++) {
  for (let j = length - i; j > 1; j--) {
    answer += blank;
  }
  for (let j = length; j >= length - i; j--) {
    answer += star;
  }
  if (i !== length - 1) {
    answer += '\n';
  }
}
console.log(answer);
