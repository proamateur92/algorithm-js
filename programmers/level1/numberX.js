// x만큼 간격이 있는 n개의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.

// x	  n	  answer
// 2	  5	  [2,4,6,8,10]
// 4	  3	  [4,8,12]
// -4	  2	  [-4, -8]

const x = 2;
const n = 5;

console.log(
  Array(n)
    .fill(x)
    .map((v, i) => v * (i + 1))
);
