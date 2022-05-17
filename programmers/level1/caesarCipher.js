// 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

// s	      n	result
// "AB"	    1	"BC"
// "z"	    1	"a"
// "a B z"	4	"e F d"

// a-z 97 122
// A-Z 65 90

function solution(s, n) {
  const answer = s.split('').map(v => {
    let vCode = v.charCodeAt();
    // 공백
    if (vCode === 32) {
      return v;
    }

    // 소문자 범위
    if (vCode >= 97 && vCode <= 122) {
      vCode += n;
      vCode = vCode > 122 ? vCode - 26 : vCode;
    }

    if (vCode >= 65 && vCode <= 90) {
      vCode += n;
      vCode = vCode > 90 ? vCode - 26 : vCode;
    }
    return String.fromCharCode(vCode);
  });

  return answer.join('');
}

console.log(solution('a B z', 4));
