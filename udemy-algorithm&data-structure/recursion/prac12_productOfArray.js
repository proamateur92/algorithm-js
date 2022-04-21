// 문제: 배열의 모든 요소의 곱을 반환합니다.

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10, 20, 30, 40, 50, 60]));
