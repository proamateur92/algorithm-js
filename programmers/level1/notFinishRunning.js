// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];

// key, value를 값으로 가진다.
const map = new Map();

// for ...in 에서 배열은 index값을 가져온다.
for (let idx in participant) {
  // 'marina', 'josipa', 'nikola', 'vinko', 'filipa'
  const a = participant[idx];

  // 'josipa', 'filipa', 'marina', 'nikola'
  const b = completion[idx];

  // map.set(key, value) -> key, value값을 저장한다.
  // map.get(key) -> map에 존재하는 key의 value값을 가져온다.
  // 논리연산자 ||
  // undefined || 0 -> 0 출력

  map.set(a, (map.get(a) || 0) + 1);
  map.set(b, (map.get(b) || 0) - 1);
}

let result = '';

// map의 사이즈만큼 값을 순회한다.
for (let [k, v] of map) {
  // value값이 0보다 크면 해당 value를 가진 key를 result에 할당한다.
  if (v > 0) result = k;
}

// map 내부 구조 확인 코드
// for (let ele of map) {
//   console.log(ele);
// }

console.log(result);
