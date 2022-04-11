// # 문제54 : 연속되는 수

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

// 입력1
// 1 2 3 4 5

// 출력1
// YES

// 입력2
// 1 4 2 6 3

// 출력2
// NO

const input = '8 6 8'.trim();
const arr = input.split(' ').map(item => parseInt(item, 10));

let result = 'YES';
//
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] - arr[i] !== 1) {
    result = 'NO';
    break;
  }
}

console.log(result);
