let input = require('fs').readFileSync(0).toString().trim();
const find = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let result = 0;

function findWord(str) {
  for (let i in find) {
    const newStr = str.slice(0, find[i].length);
    if (newStr === find[i]) {
      result++;
      return str.slice(find[i].length);
    }
  }
  result++;
  return str.slice(1);
}

while (input) {
  input = findWord(input);
}

console.log(result);
