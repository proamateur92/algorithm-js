// arr1 [9, 9, 8, 8, 7, 8, 9]
// arr2 [21, 25, 30, 29, 22, 23, 30]
// 정답 96

// arr1 [9, 7, 8, 9, 7, 9, 8]
// arr2 [23, 22, 26, 26, 29, 27, 22]
// 정답 110

// 1번. 몇시간 했더라?
function solution(arr1, arr2) {
  let answer = arr2
    .map((v, idx) => {
      let studyHour = v - arr1[idx];
      studyHour = v >= 29 ? 21 - arr1[idx] : studyHour;
      return studyHour;
    })
    .reduce((acc, v) => acc + v, 0);

  return answer;
}

// check in
let arr1 = [9, 9, 9, 9, 7, 9, 8];
// check out
let arr2 = [23, 23, 30, 28, 30, 23, 23];
// 정답 102

console.log(solution(arr1, arr2));
