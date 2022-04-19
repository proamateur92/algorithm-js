// 문제: 두개의 문자열을 받고 첫번째 문자열의 문자들의 순서대로
// 두번째 문자열에 포함되어 있는지 판별하라.

// 나의 답안
function isSubsequence(str1, str2) {
  let target = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[target] === str2[i]) {
      target++;
    }

    if (target === str1.length) {
      return true;
    }
  }

  if (target !== str1.length) {
    return false;
  }

  return true;
}

console.log(isSubsequence('abc', 'abracadabra'));
