// 문제: 주어진 숫자의 팩토리얼을 구합니다.

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(7));
