// 문제: 숫자로 이루어진 배열과 배열의 요소의 개수를 나타내는 숫자를 입력 받는다.
// num의 개수만큼 배열의 요소를 더했을 때 가장 큰 합을 출력하라.
// time complexity - O(N)
// space complexity - O(1)

function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let sum = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  max = sum;

  for (let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    max = Math.max(max, sum);
  }

  return max;
}

const result = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
console.log(result);
