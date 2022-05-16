// 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// n	  result
// 45	  7
// 125	229

function solution(n) {
  return n
    .toString(3)
    .split('')
    .reduce((acc, val, idx) => acc + val * Math.pow(3, idx), 0);
}
console.log(solution(45));
// 10진수를 number.toString(x): x진수로 바꿀 떄
