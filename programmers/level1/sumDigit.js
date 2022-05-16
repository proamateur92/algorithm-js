// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

// N	answer
// 123	6
// 987	24

function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, val) => acc + parseInt(val, 10), 0);
}

console.log(solution(987));
