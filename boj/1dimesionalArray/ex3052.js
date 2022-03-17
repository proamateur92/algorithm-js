const input = require('fs').readFileSync(0).toString().trim().split('\n');
const result = new Set();
for (let n of input) {
  n = parseInt(n, 10) % 42;
  result.add(n);
}

console.log(result.size);
