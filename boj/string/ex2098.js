const input = require('fs').readFileSync(0).toString().trim().split(' ');
const result = {};
for (let i = 0; i < input.length; i++) {
  const str = input[i];
  const first = str.slice(0, 1);
  const last = str.slice(2);
  result[i] = parseInt(last.concat(str.charAt(1), first));
}

result[0] > result[1] ? console.log(result[0]) : console.log(result[1]);
