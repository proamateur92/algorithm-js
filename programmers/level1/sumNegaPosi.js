// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

const absolutes = [4, 7, 12];
const signs = [true, false, true];

// 계산값, 배열 요소, index
let answer = absolutes.reduce((result, num, i) => result + num * (signs[i] ? 1 : -1), 0);
console.log(answer);
