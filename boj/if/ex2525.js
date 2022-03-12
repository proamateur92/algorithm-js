let input = require('fs').readFileSync(0).toString().trim().split('\n');
const current = input[0].split(' ');

let hour = Number(current[0]);
let min = Number(current[1]);
let spend = Number(input[1]);

min += spend;

if (min > 59) {
  hour += Math.floor(min / 60);
  min %= 60;
}

if (hour > 23) hour -= 24;

console.log(`${hour} ${min}`);
