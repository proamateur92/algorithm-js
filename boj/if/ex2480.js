// 1. 객체를 이용한 풀이

const eyes = require(0)
  .readFileSync('C:\\Users\\kkasu\\projects\\algorithmWithJS\\boj\\example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(num => {
    return parseInt(num);
  });

const dice = {};
let price = 0;
let max = 0;
for (let i in eyes) {
  dice[eyes[i]] = dice[eyes[i]] === undefined ? 1 : ++dice[eyes[i]];
}

for (let i in dice) {
  if (max < i) {
    max = i;
  }
  if (dice[i] == 3) {
    price += 10000 + i * 1000;
  }
  if (dice[i] == 2) {
    price += 1000 + i * 100;
  }
}

if (price === 0) price += max * 100;

console.log(price);

// 2. 정렬을 이용한 풀이
// const [a, b, c] = require('fs')
//   .readFileSync(0)
//   .toString()
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => {
//     return b - a;
//   });

// if (a === b && b === c) {
//   console.log(10000 + a * 1000);
// } else if (a == b || b == c) {
//   console.log(1000 + b * 100);
// } else if (a == c) {
//   console.log(1000 + a * 100);
// } else {
//   console.log(a * 100);
// }
