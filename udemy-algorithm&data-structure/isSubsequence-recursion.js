// 문제: 두개의 문자열을 받고 첫번째 문자열의 문자들이 순서대로
// 두번째 문자열에 포함되어 있는지 판별하라.

// recursion function
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));

  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence('abc', 'abracadabra'));
