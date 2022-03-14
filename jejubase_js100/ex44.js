// # 문제44 : 각 자리수의 합

// **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

// **예를들어**
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// 나의 답안
//  substr 함수로 문제를 풀었다.

// let num = '3849';
// let result = 0;
// for (let i = num.length - 1; i >= 0; i--) {
//   result += parseInt(num.substr(i, 1));
// }
// console.log(result);

let num = 3849;
let result = 0;

while (num !== 0) {
  result += num % 10;
  num = Math.floor(num / 10);
}

console.log(result);
