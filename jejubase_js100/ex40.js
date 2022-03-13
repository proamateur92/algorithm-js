// # 문제40 : 놀이동산에 가자

// **원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

// 나의 답안
// -> 해설과 같은 답안이었다.
const limit = 50;
const member = '20 20 20 20 20'.split(' ').map(num => {
  return parseInt(num, 10);
});

let count = 0;
let sum = 0;

for (let i of member) {
  sum += i;
  if (sum <= limit) {
    count++;
  }
}

// 해설 답안
// let total = 0;
// let count = 0;
// const limit = prompt('제한 무게를 입력하세요.');
// const n = prompt('인원수를 입력하세요.');

// for (let i=1; i<=n; i++){
//   total += parseInt(prompt('무게를 입력해주세요.'), 10);
//   if (total <= limit){
// 		count = i;
//   }
// }

// console.log(count);
// console.log(count);
