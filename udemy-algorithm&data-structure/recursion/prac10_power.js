// 문제: 주어진 숫자의 ^count을 구합니다.

function power(num, count) {
  if (count < 1) {
    return 1;
  }
  console.log(count);
  return num * power(num, count - 1);
}

console.log(power(2, 1));
