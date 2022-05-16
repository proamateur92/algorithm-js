// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// s	    return
// "a234"	false
// "1234"	true

function solution(s) {
  let answer = false;

  if (s.includes(' ')) return answer;
  if (s.includes('e')) return answer;
  if (s.length === 4 || s.length === 6) {
    answer = isNaN(parseInt(s)) ? false : true;
  }
  return answer;
}

console.log(solution('a234'));

// 다른 코드
// return (s.length===4 || s.length===6) && /^[0-9]+$/.test(s);

// isNaN에서 소수점은 false 출력
// console.log(isNaN(1.3));
// Number는 지수표현일 때 숫자 출력
// console.log(Number('2e34'));
