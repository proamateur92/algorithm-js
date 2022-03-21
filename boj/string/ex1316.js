let input = require('fs').readFileSync(0).toString().trim().split('\n');
let result = 0;

for (let i = 1; i < input.length; i++) {
  const obj = {};
  let check = false;

  const str = input[i];
  for (let index in str) {
    let c = str.charAt(index);

    if (Object.keys(obj).includes(c)) {
      if (index - obj[c] > 1) {
        check = true;
        break;
      }
    }

    obj[c] = index;
  }
  if (!check) result++;
}

console.log(result);
