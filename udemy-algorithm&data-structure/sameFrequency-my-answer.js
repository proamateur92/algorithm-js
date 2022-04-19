// 두 숫자의 모든 자릿수에 사용된 숫자의 갯수가 같은지 판별하라.

// 나의 답안
function sameFrequency(num1, num2) {
  num1 = num1 + '';
  num2 = num2 + '';

  if (num1.length !== num2.length) {
    return false;
  }

  const frequencyCount1 = {};
  const frequencyCount2 = {};

  for (let char of num1) {
    frequencyCount1[char] = (frequencyCount1[char] || 0) + 1;
  }

  for (let char of num2) {
    frequencyCount2[char] = (frequencyCount2[char] || 0) + 1;
  }

  for (let key in frequencyCount1) {
    if (!(key in frequencyCount2)) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(21, 23));
