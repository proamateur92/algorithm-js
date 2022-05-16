// 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930

// s	                return
// "try hello world"	"TrY HeLlO WoRlD"

function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(value =>
      value
        .split('')
        .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v))
        .join('')
    )
    .join(' ');
}

console.log(solution('try hello world'));
