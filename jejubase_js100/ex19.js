// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const str = '2 3';

const n = str.split(' ');
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

// 나의 답안
// const number = [];
// str.split(' ').forEach(e => {
//   number.push(e);
// });
// console.log(Math.pow(number[0], number[1]));
