// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  let answer = new_id
    .toLowerCase()
    .split('')
    .filter(v => {
      if (v.charCodeAt() >= 97 && v.charCodeAt() <= 122) return true;
      if (v >= 0 && v <= 9) return true;
      if (v === '-') return true;
      if (v === '_') return true;
      if (v === '.') return true;
      return false;
    })
    .join('');

  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  while (answer.includes('..')) {
    answer = answer.replace('..', '.');
  }

  // // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  answer = answer
    .split('')
    .filter((v, idx) => {
      if (idx === 0 && v === '.') return false;
      if (idx === answer.length - 1 && v === '.') return false;
      return true;
    })
    .join('');

  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  if (answer.trim() === '') answer += 'a';

  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  if (answer.length > 15) {
    answer = answer.substring(0, 15);
    answer = answer[answer.length - 1] === '.' ? answer.substring(0, 14) : answer;
  }
  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  if (answer.length <= 2) {
    while (answer.length !== 3) {
      answer += answer[answer.length - 1];
    }
  }
  return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));

// function solution(new_id) {
//   const answer = new_id
//       .toLowerCase() // 1
//       .replace(/[^\w-_.]/g, '') // 2
//       .replace(/\.+/g, '.') // 3
//       .replace(/^\.|\.$/g, '') // 4
//       .replace(/^$/, 'a') // 5
//       .slice(0, 15).replace(/\.$/, ''); // 6
//   const len = answer.length;
//   return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
