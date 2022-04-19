// 주어진 배열의 요소 중 중복이 있는지 판별하라.

// 1. use multiple pointer
function areThereDuplicates(...arr) {
  if (arr.length <= 1) {
    return false;
  }

  arr.sort((a, b) => a - b);
  let start = 0;
  let next = 1;

  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
