// # 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
//  두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

// 해설 답안
// -> 객체의 초기화를 해주지 않아 Object에 값을 넣는데 에러가 발생했다.
// -> 점수를 정수로 변환하지 않고 문자열 그대로 집어 넣었다.

let input = 'Yujin Hyewon';
const name = input.split(' ');

input = '70 100';
const score = input.split(' ');

const student = new Object();

for (let i = 0; i < score.length; i++) {
  student[name[i]] = parseInt(score[i], 10);
}
console.log(student);
