const input = require('fs').readFileSync(0).toString().trim().split('\n');
let arrNum = new Array();

for (let i = 1; i < input.length; i++) {
  let result = 0;
  let sum = 0;
  arrNum.length = 0;

  arrNum = input[i].split(' ').map(n => {
    return parseInt(n, 10);
  });

  arrNum.shift();

  for (let j = 0; j < arrNum.length; j++) {
    sum += arrNum[j];
  }

  let average = sum / arrNum.length;
  sum = 0;

  for (let n in arrNum) {
    if (arrNum[n] > average) sum++;
  }
  result = (sum / arrNum.length) * 100;
  console.log(`${result.toFixed(3)}%`);
}
