// 2번. 신대륙 발견

function solution(month, day) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  day += 98;

  while (day > days[month - 1]) {
    day -= days[month - 1];
    month++;
    if (month > 12) month -= 12;
  }

  console.log(`${month}월 ${day}일`);
}

solution(11, 27);
solution(6, 22);
solution(1, 18);

// 11 27 “3월 5일”
// 6 22  “9월 28일”
// 1 18  ‘4월 26일’
