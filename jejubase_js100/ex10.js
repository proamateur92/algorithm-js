// 문제10 : 별 찍기

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// 사용자 입력 값
const n = 5;
var result = '';
for (var i = 1; i <= n; i++) {
  for (let j = n - i; j > 0; j--) {
    result += ' ';
  }
  for (var j = 1; j < i * 2; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
