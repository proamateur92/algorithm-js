// # 문제49 : 최댓값 구하기

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

// 나의 답안
// reduce 함수를 사용해보았다.
const numArr = '10 9 8 7 6 5 4 3 2 1'
  .split(' ')
  .map(num => {
    return parseInt(num, 10);
  })
  .reduce((a, b) => {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  });

console.log(numArr);
