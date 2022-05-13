// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

const [a, b] = [5, 3];
let result = 0;

// 두 수 중 최소값을 초기값 i로 할당한다.
// 두 수 중 최대값을 조건값으로 기준을 잡는다.
for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
  result += i;
}

console.log(result);
