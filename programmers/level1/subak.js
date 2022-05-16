// 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

// n	return
// 3	"수박수"
// 4	"수박수박"

function solution(n) {
  return n % 2 === 0 ? '수박'.repeat(n / 2) : '수박'.repeat(Math.floor(n / 2)) + '수';
}

console.log(solution(3));
