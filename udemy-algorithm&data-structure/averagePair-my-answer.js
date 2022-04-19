// 숫자형 배열, 평균을 나타내는 숫자를 파라미터로 받고,
// 배열의 요소가 쌍을 이룰 때 그 평균과 입력 받은 평균이 일치하는지 판별하라.
// plus. 평균을 이루는 모든 쌍과 그 갯수를 출력하라.

// 나의 답안
function averagePair(arr, averageTarget) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === averageTarget) {
      return true;
    } else if (average < averageTarget) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

const result = averagePair([], 4);
console.log(result);
