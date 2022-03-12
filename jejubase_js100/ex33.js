// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면,
// 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// 나의 답안
// 이전에 풀었던 문제의 풀이가 떠올라 응용했다.
const str = '2 4 6 7 8';
const reverseStr = str.split(' ').reverse().join(' ');
console.log(reverseStr);

// 해설 답안
// const data = prompt('숫자를 입력하세요.').split(' ').reverse();
// const result = '';

// for (let i = 0; i < data.length; i++) {
//   result += data[i];
// }

// console.log(result);
