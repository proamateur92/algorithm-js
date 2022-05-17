// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

// answers	    return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer = [];
  const answerObj = { 1: 0, 2: 0, 3: 0 };

  answers.forEach((val, idx) => {
    if (val === person1[idx % person1.length]) answerObj[1] = answerObj[1] + 1;
    if (val === person2[idx % person2.length]) answerObj[2] = answerObj[2] + 1;
    if (val === person3[idx % person3.length]) answerObj[3] = answerObj[3] + 1;
  });

  const max = Math.max(answerObj['1'] || 0, answerObj['2'] || 0, answerObj['3'] || 0);

  for (let key in answerObj) {
    if (answerObj[key] === max) answer.push(parseInt(key));
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution([1, 3, 2, 4, 2]));

// 다른 풀이 (상위 호환)
// function solution(answers) {
//   const person1 = [1, 2, 3, 4, 5];
//   const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   const answer = [];

//   const p1a = answers.filter((v, idx) => v === person1[idx % person1.length]).length;
//   const p2a = answers.filter((v, idx) => v === person2[idx % person2.length]).length;
//   const p3a = answers.filter((v, idx) => v === person3[idx % person3.length]).length;

//   const max = Math.max(p1a, p2a, p3a);

//   if (max === p1a) answer.push(1);
//   if (max === p2a) answer.push(2);
//   if (max === p3a) answer.push(3);

//   return answer;
// }
