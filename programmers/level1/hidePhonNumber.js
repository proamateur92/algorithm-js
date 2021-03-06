// 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// phone_number	  return
// "01033334444"	"*******4444"
// "027778888"	  "*****8888"
const phone_number = '01033334444';
const hideNumber = '*'.repeat(phone_number.length - 4).concat(phone_number.slice(-4));

console.log(hideNumber);
