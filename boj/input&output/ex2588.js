// 곱셈

var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

let num1 = (b % 10) * a;
let num2 = Math.floor((b % 100) / 10) * a;
let num3 = Math.floor(b / 100) * a;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num1 + Number(`${num2}0`) + Number(`${num3}00`));
