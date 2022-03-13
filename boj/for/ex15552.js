const input = require('fs').readFileSync(0).toString().trim().split('\n');
let answer = '';
for (let i = 1; i < input.length; i++) {
  let tmp = input[i].split(' ');
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + '\n';
}
console.log(answer);
