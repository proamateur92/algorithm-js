let input = require('fs').readFileSync(0).toString().trim().split(' ');
let result = 0;

const alphabet = {
  1: 'ABC',
  2: 'DEF',
  3: 'GHI',
  4: 'JKL',
  5: 'MNO',
  6: 'PQRS',
  7: 'TUV',
  8: 'WYXZ',
};

const length = input[0].length;
const str = input[0];

for (let i = 0; i < length; i++) {
  for (let j in alphabet) {
    if (-1 !== alphabet[j].indexOf(str.charAt(i))) {
      result += parseInt(j) + 1;
      break;
    }
  }
}
console.log(result + length);
