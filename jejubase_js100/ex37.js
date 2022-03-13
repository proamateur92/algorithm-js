// # 문제37 : 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면
// 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

// 나의 답안
// -> 정답은 맞췄으나 배열의 for문 돌리는 것을 몰라 forEach 함수를 사용했고
// reduce함수를 이용할 생각을 못했다.

const str = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
const test = new Object();
let maxNum = 0;
let result = '';

str.forEach(name => {
  let count = test[name];
  test[name] = count === undefined ? 1 : ++count;
});

for (let i in test) {
  if (maxNum < test[i]) {
    maxNum = test[i];
    result = i;
  }
}

console.log(`${result}(이)가 총 ${maxNum}표로 반장이되었습니다.`);

// 해설 답안
// const array = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
// let result = {};
// let winner = '';

// for (let i in array) {
//   let index = array[i];
//   result[index] = result[index] === undefined ? 1 : ++result[index];
// }

// winner = Object.keys(result).reduce(function (a, b) {
//   return result[a] > result[b] ? a : b;
// });

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이되었습니다.`);
