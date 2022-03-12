// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
// 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

// 나의 답안
//  sort() 함수 사용법에 대해 알게 되었다.
let maxNum = 0;
let check = true;
const str = '176 156 155 165 166 169'.split(' ').map(num => {
  if (check && maxNum > parseInt(num)) {
    check = false;
  }
  maxNum = parseInt(num);
});

if (!check) {
  console.log('NO');
} else {
  console.log('YES');
}

// 해설 답안
const unsorted = '176 156 155 165 166 169';
const sorted = unsorted
  .split(' ')
  .sort(function (a, b) {
    return a - b;
  })
  .join(' ');

if (unsorted === sorted) {
  console.log('YES');
} else {
  console.log('NO');
}
