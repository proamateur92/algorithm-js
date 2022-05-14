// 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴

// s	        answer
// "pPoooyY"	true
// "Pyy"	    false

let s = '';
// 영문자를 소문자로 변환한다.
s = s.toLowerCase();

// p와 y의 개수를 비교하기 위한 객체 생성
const pyObj = {};

// 문자열 s를 순회한다.
for (let c of s) {
  // 문자열을 순회하며 'p' 또는 'y'인 경우에 객체 pyObj에 속성 값을 추가한다.
  // pyObj['p'] 또는 pyObj['y']의 값이 undefined일 때, 즉 값이 존재하지 않을 때 0을 넣어주고, 값이 존재한다면 +1해준 값을 넣어준다.
  if (c === 'p' || c === 'y') pyObj[c] = pyObj[c] == undefined ? 0 : ++pyObj[c];
}

// pyObj['p'] -> p의 개수와 pyObj['y'] -> y의 개수가 일치하면 true, 그렇지 않으면 false를 반환한다.
const result = pyObj['p'] === pyObj['y'] ? true : false;
console.log(result);
