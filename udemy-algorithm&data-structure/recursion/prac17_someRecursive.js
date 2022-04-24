// 문제: 정수 배열과 콜백함수를 받는다.
// 콜백함수는 배열의 요소 중 홀수인지 아닌지 판별한다.
// 홀수가 존재하면 true 없으면 false를 반환하라.

let result = false;

function isOdd(val) {
  if (val % 2 !== 0) return true;
  return false;
}
function someRecursive(numArr, judgeOdd) {
  if (numArr.length === 0) return result;
  if (result === true) return result;

  result = judgeOdd(numArr[0]);

  return someRecursive(numArr.slice(1), judgeOdd);
}

const answer = someRecursive([4, 6, 8], isOdd);
console.log(answer);
