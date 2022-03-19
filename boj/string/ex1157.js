const str = require('fs').readFileSync(0).toString().trim().toUpperCase();
const strObj = {};
let max = 0;
let result = '';

for (const s of str) {
  let value = strObj[s];
  strObj[s] = value === undefined ? 0 : ++value;
  if (max < value) max = value;
}

for (const e in strObj) {
  if (max === strObj[e]) result += e;

  if (result.length > 1) {
    result = '?';
    break;
  }
}

console.log(result);
