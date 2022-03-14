// # 문제41 : 소수판별

// 숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// 나의 답안
// -> 해설 답안과 맥락은 같다.
const num = 13;
let result = 'YES';

if (num <= 1) {
  result = 'NO';
} else {
  for (let i = 2; i < num; i++) {
    if (num == 2) {
      break;
    }

    if (num % i == 0) {
      result = 'NO';
      break;
    }
  }
}
console.log(result);

// 해설 답안
// const num = 29;

// function check_prime(num) {
//   if (num === 1) {
//     console.log('NO');
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     let result = num % i;
//     if (result === 0) {
//       console.log('NO');
//       return false;
//     }
//   }

//   console.log('YES');
//   return;
// }

// check_prime(num);
