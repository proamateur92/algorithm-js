// 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// n	return
// 121	144
// 3	-1
function solution(n) {
  const x = Math.sqrt(n);
  const answer = x === Math.ceil(x) ? Math.pow(x + 1, 2) : -1;
  return answer;
}

console.log(solution(3));
