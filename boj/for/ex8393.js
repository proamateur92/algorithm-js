const num = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(n => {
    return parseInt(n, 10);
  });

let result = 0;

for (let i = 1; i <= num; i++) {
  result += i;
}

console.log(result);
