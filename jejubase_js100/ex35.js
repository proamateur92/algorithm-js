// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를
// 만들려고 합니다.

// <pass>에 코드를 작성하여 two함수를 완성하세요.

// 나의 답안
// -> 문제 이해를 제대로 하지 못해 풀지 못했다.

// 해설 답안
function one(n) {
  function two(value) {
    sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
