// # 문제42 : 2020년

// 2020년 1월 1일은 수요일입니다.
// 2020년 a월 b일은 무슨 요일일까요?

// 두 수 a, b를 입력받아 2020년 a월 b일이
// 무슨 요일인지 리턴하는 함수 solution을 완성하세요.

// 요일의 이름은 일요일부터 토요일까지
// 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

// 나의 답안
// -> 2차원 배열을 사용하려다가 에러가 발생하여 문제를 풀지 못했다.
// Date 객체와 getDay()메소드에 대해 알게 되었다.

// const dateArr = new Array(13);

// for (let i = 1; i < dateArr.length; i++) {
//   switch (i) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       dateArr[i] = new Array(32);
//       break;
//     case 2:
//       dateArr[i] = new Array(30);
//       break;
//     default:
//       dateArr[i] = new Array(31);
//       break;
//   }
// }

// const yoil = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// for (let i = 1; i < dateArr.length; i++) {
//   let y = 0;
//   for (let j = 1; i < dateArr[i].length; j++) {
//     dateArr[i][j] = yoil[y % 7];
//     y++;
//   }
// }

// 해설 답안
const month = '5';
const day = '5';

const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const date = new Date(`2020-${month}-${day}`);
console.log(dayArr[date.getDay()]);
