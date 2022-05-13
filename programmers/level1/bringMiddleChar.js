// 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// "abcde"	-> "c"
// "qwer"	-> "we"

// const s = 'abcde';
const s = 'qwer';
// 글자 길이의 평균값을 구한다.
const mid = Math.floor(s.length / 2);

// 글자의 길이가 짝수라면 가운데 두 글자 반환
// 글자의 길이가 홀수라면 가운데 한 글자 반환
const answer = s.length % 2 == 0 ? s[mid - 1] + s[mid] : s[mid];
console.log(answer);
