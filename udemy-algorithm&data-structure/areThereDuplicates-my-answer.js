// 주어진 배열의 요소 중 중복이 있는지 판별하라.

// 나의 답안
// 2. use frequency counter
function areThereDuplicates(...arr) {
  if (arr.length <= 1) {
    return false;
  }

  const frequencyCount = {};

  for (let elm of arr) {
    frequencyCount[elm] = (frequencyCount[elm] || 0) + 1;
    if (frequencyCount[elm] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
