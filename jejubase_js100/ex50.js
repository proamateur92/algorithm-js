// 문제50 : 버블정렬 구현하기
// 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let tmp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = tmp;
      }
    }
  }
  return result;
}

const items = '98 10 24 56 79 45 99'.split(' ').map(n => {
  return parseInt(n, 10);
});

console.log(bubble(items));
