// 최소직사각형
// https://programmers.co.kr/learn/courses/30/lessons/86491

// sizes	                                        result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	        4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133

function solution(sizes) {
  let width = Number.MIN_SAFE_INTEGER;
  let height = Number.MIN_SAFE_INTEGER;

  sizes
    .map(v => v.sort((a, b) => b - a))
    .forEach(v => {
      width = Math.max(v[0], width);
      height = Math.max(v[1], height);
    });

  return width * height;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
