// 문제: 주어진 문자열의 요소들이 완전한 대칭을 이루고 있는지 판별하라.

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  return str[0] === str[str.length - 1] ? isPalindrome(str.slice(1, str.length - 1)) : false;
}

const result = isPalindrome('amanaplanacanalpanama');
console.log(result);
