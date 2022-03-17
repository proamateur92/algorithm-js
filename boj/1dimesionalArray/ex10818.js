const input = require('fs').readFileSync(0).toString().trim().split('\n');
const arrNum = input[1].split(' ').map(num => {
  return parseInt(num, 10);
});

const result = quickSort(arrNum);
console.log(`${result[0]} ${result[result.length - 1]}`);

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  let left = new Array();
  let right = new Array();

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
