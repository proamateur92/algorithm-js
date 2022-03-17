const input = require('fs').readFileSync(0).toString().trim().split('\n');
const scores = input[1].split(' ').map(n => parseInt(n, 10));
const max = findMax(scores);
let result = 0;

for (let i in scores) {
  scores[i] = (scores[i] / max) * 100;
  result += scores[i];
}

console.log(result / scores.length);

function findMax(scores) {
  let max = 0;
  for (let n of scores) {
    max = max > n ? max : n;
    if (max === 100) return 100;
  }
  return max;
}
