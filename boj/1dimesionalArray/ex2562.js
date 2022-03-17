const input = require('fs').readFileSync(0).toString().trim().split('\n');
let max = 0;
let index = 1;
let result = '';

for (let i of input) {
  if (max < i) {
    max = i;
    result = `${max}\n${index}`;
  }
  index++;
}

console.log(result);
