// # 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

// 나의 답안
// 아스키 코드를 사용했다.
const str = 'AAABBBcccddd';
const numArr = new Array();
let result = '';

for (let i = 0; i < str.length; i++) {
  let check = str.charCodeAt(i);
  if (check >= 65 && 90 >= check) {
    check += 32;
  } else if (check >= 97 && 122 >= check) {
    check -= 32;
  }
  result += String.fromCharCode(check);
}

console.log(result);

// 해설 답안
// lowerCase() upperCase()를 사용했다.
// const str = 'AAABBBcccddd';
// const temp = new Array();
// let result = '';

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLowerCase()) {
//     temp[i] = str[i].toUpperCase();
//   } else {
//     temp[i] = str[i].toLowerCase();
//   }
// }

// for (let i of temp) {
//   result += i;
// }

// console.log(result);
