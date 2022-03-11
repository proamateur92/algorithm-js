// # 문제30 : 문자열 속 문자 찾기

// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다.
// 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// **그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4

//  해설 답안
const sentence = 'pineapple is yummy';
const word = 'apple';

console.log(sentence.indexOf(word));

//  나의 답안
//  -> indexOf로 긴 문자열 검색까지 가능한 줄 모르고 있었다.
const wordLength = word.length;
for (let i = 0; i < sentence.length; i++) {
  if (sentence.charAt(i) === word.charAt(0)) {
    if (sentence.substr(i, wordLength) === word) {
      console.log(i);
      break;
    }
  }
}
