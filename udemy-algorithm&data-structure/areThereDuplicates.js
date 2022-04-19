// 주어진 배열의 요소 중 중복이 있는지 판별하라.

function areThereDuplicates(...arr) {
  if (arr.length <= 1) {
    return false;
  }

  // 1. use multipointer
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

  /* 
  2. use frequencyCount

  const frequencyCount = {};

  for (let elm of arr) {
    frequencyCount[elm] = (frequencyCount[elm] || 0) + 1;
    if (frequencyCount[elm] > 1) return true;
  }
  return false;
  */

  /* 
  3. One Liner Solution
  return new Set(arguments).size !== arguments.length;
  */
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
