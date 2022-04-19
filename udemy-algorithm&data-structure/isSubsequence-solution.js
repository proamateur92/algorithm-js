// 문제: 두개의 문자열을 받고 첫번째 문자열의 문자들이 순서대로
// 두번째 문자열에 포함되어 있는지 판별하라.

// solution
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('abc', 'abracadabra'));
