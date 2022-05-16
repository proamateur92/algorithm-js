// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// numbers	    result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	  [2,5,7,9,12]

function solution(numbers) {
  const result = {};

  // 첫번째 요소부터 마지막 요소 - 1까지 순회
  for (let i = 0; i < numbers.length - 1; i++) {
    // i + 1 요소부터 마지막 요소까지 순회
    for (let j = i + 1; j < numbers.length; j++) {
      // 각 요소의 합을 계산한다.
      let sum = numbers[i] + numbers[j];
      // 객체에 각 요소의 합을 넣어준다.
      result[sum] = (result[sum] || 0) + 1;
    }
  }
  const answer = [];

  // 객체를 순회하며 answer에 push해준다.
  for (let i in result) {
    answer.push(Number(i));
  }
  return answer;
}

// 지금보니 왜 정렬되어 나오는지 모르겠음
console.log(solution([2, 1, 3, 4, 1]));

// 다른 풀이
// temp.push(numbers[i] + numbers[j]);
// const answer = [...new Set(temp.sort((a, b) => a - b))]
