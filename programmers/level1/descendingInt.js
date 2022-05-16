// 정수 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12933

// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// n	    return
// 118372	873211

const num = 118372;

// split() 문자열 값을 구분자를 기준으로 배열로 만든다.
// sort() 내림차 정렬을 한다. (양수를 return하면 자리바꿈 발생)
// join() 배열의 요소를 구분자를 기준으로 문자열을 만든다.
// parseInt() 문자열을 정수형으로 만든다.
console.log(
  parseInt(
    ('' + num)
      .split('')
      .sort((a, b) => b - a)
      .join(''),
    10
  )
);
