const a = require('fs').readFileSync(0).toString().trim();

function pibo(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return pibo(num - 1) + pibo(num - 2);
}

const result = pibo(parseInt(a));
console.log(result);
