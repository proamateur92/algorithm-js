// # 문제39 : 오타 수정하기

// **문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// 나의 답안
// -> split과 join함수를 응용할 생각을 하지 못했다.

const str = 'hqllo my namq is hyqwon';
let result = '';

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) === 'q') {
    result += 'e';
  } else {
    result += str.charAt(i);
  }
}

console.log(result);

// 해설 답안

// 1. 함수 사용
// function replaceAll(sentence, searchStr, changeStr) {
//   return sentence.split(searchStr).join(changeStr);
// }

// console.log(replaceAll(str, 'q', 'e'));

// 2. 정규식 사용
// console.log(str.replace(/q/gi, 'e'));
