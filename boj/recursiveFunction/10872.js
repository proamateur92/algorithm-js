const a = require('fs').readFileSync(0).toString().trim();

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

const result = factorial(parseInt(a));
console.log(result);
