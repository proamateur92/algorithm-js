// # 문제53 : 괄호 문자열
// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

//  나의 답안
const brackets = ['(', ')', '{', '}', '[', ']'];
const input = '[[[]]][]';
const check = new Array();
let result = false;

function solution(bracket) {
  let index = bracket;

  if (index === 0 || index === 1) index = 0;
  if (index === 2 || index === 3) index = 2;
  if (index === 4 || index === 5) index = 4;

  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === brackets[index]) {
      check.push(brackets[index]);
    } else {
      let pop = check.pop();
      if (pop === brackets[index + 1] || pop === undefined) {
        result = true;
        break;
      }
    }
  }
}

let num = 0;

for (let i in brackets) {
  if (brackets[i] === input.charAt(0)) {
    num = i;
  }
}

solution(num);

if (check.length !== 0) {
  result = true;
}

if (result) {
  console.log('NO');
} else {
  console.log('YES');
}
