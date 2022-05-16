// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

// arr	        return
// [4,3,2,1]	[4,3,2]
// [10]	        [-1]

function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = Number.MAX_SAFE_INTEGER;

  arr.forEach(value => {
    if (value < min) min = value;
  });

  return arr.filter(v => v !== min);
}

console.log(solution([5, 3, 1, 2, 3]));

// 다른 풀이
// spread 연산자 사용
// splice 함수 사용
// arr.splice(arr.indexOf(Math.min(...arr)), 1);
