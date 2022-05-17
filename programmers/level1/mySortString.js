// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

// strings	                n	  return
// ["sun", "bed", "car"]	  1	  ["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	  ["abcd", "abce", "cdx"]

function solution(strings, n) {
  // 요소의 index별로 접근해서 알파벳 순으로 sort
  // index의 알파벳이 동일하다면 거기서 또 오름차 순
  const answer = strings.sort().sort((a, b) => {
    // index 자리의 코드 값이 다르고, 양수 값을 return 하면 자리 교체
    // a 97 제일 작음
    if (a[n].charCodeAt() !== b[n].charCodeAt()) return a[n].charCodeAt() - b[n].charCodeAt();
  });
  return answer;
}

console.log(solution(['sun', 'bed', 'car'], 1));
