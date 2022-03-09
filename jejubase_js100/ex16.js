// # 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const str = '거꾸로';
const result = str.split('').reverse().join('');

console.log(result);
//나의 답안
// let result = '';
// for (let i = str.length; i > 0; i--) {
//   result += str.charAt(i - 1);
// }

// console.log(result);
