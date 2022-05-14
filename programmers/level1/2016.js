// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// a	b	result
// 5	24	"TUE"
function solution(a, b) {
  const speicifiedDay = new Date(`2016-${a}-${b}`);

  return speicifiedDay.toString().slice(0, 3).toUpperCase();
}

console.log(solution(5, 24));
