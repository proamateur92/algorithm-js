// 주어진 배열의 요소 중 중복이 있는지 판별하라.

// One Liner Solution
function areThereDuplicates(...arr) {
  if (arr.length <= 1) {
    return false;
  }

  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
