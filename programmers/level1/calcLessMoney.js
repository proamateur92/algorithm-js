// 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript
// 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// price	money	count	result
// 3	    20	    4	    10

let price = 3,
  money = 20,
  count = 4;

let answer = 0;

while (count) {
  answer += price * count;
  count--;
}

// 소지금이 충분하면 0을 return
// 소지금이 충분하지 않으면 모자란 금액 return
money > answer ? console.log(0) : console.log(answer - money);
