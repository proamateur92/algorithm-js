// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

// lottos	                win_nums	                result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	    [3, 5]
// [0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	    [1, 1]

function solution(lottos, win_nums) {
  let checker = 0;
  let zero = 0;
  const win = [6, 5, 4, 3, 2, 1];
  const answer = [];

  lottos.forEach(v => {
    if (win_nums.includes(v)) checker++;
    if (v === 0) zero++;
  });
  if (zero > checker) {
    answer.push(win[zero + checker - 1]);
    answer.push(win[checker - 1]);
  } else {
    answer.push(win[checker + zero - 1]);
    answer.push(win[checker - 1]);
  }
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
