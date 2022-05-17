// 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

// arr	            answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	    [4,3]
function solution(arr) {
  let checker = 10;
  const answer = [];

  arr.forEach(v => {
    if (checker !== v) answer.push(v);
    checker = v;
  });
  return answer;
}

console.log(solution([4, 4, 4, 3, 3]));

// 다른 풀이
// return arr.filter((v, idx) => v !== arr[idx + 1]);
