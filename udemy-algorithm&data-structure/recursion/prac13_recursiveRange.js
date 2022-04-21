// 문제: 0 부터 num까지의 수를 더하라

function recursiveRange(num) {
  if (num < 1) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
