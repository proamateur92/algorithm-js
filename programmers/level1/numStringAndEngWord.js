// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

// s	                result
// "one4seveneight"	    1478
// "23four5six7"	    234567
// "2three45sixseven"	234567
// "123"	            123

function solution(s) {
  const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const wordArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = '';

  let word = '';

  s.split('').forEach(v => {
    word += v;
    if (wordArr.includes(word)) {
      answer += numArr[wordArr.indexOf(word)];
      word = '';
    }

    if (!isNaN(v)) {
      answer += v;
      word = '';
    }
  });

  return parseInt(answer);
}

console.log(solution('23four5six7'));
