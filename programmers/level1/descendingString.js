// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// s	        return
// "Zbcdefg"	"gfedcbZ"

// charCodeAt -> 문자의 아스키 코드로 변환
// fromCharCode -> 아스크 코드를 문자로 변환
function solution(s) {
  const answer = s
    .split('')
    .map(v => v.charCodeAt())
    .sort((a, b) => b - a)
    .map(v => String.fromCharCode(v))
    .join('');
  return answer;
}

console.log(solution('Zbcdefg'));

// 다른 풀이
// s.split('').sort().reverse().join('')
