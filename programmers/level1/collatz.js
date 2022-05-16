// 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// n	      result
// 6	      8
// 16	      4
// 626331	  -1

function solution(num) {
  let count = 0;

  if (num === 1) return 0;

  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;

    if (count > 499) {
      return -1;
    }
  }
  return count;
}

console.log(solution(1));
