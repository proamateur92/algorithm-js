// 문제52 : quick sort를 만들어보자

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(`pivot: ${pivot} left: ${left}, right:${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = '3 5 1 2 4'.split(' ').map(n => parseInt(n, 10));
let i = 1;
console.log(quickSort(array));
