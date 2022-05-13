// 평균 구하기
// https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
const arr = [7, 5, 3, 1];
const result =
  // 값이 계산되어 할당될 변수
  // 배열을 순회하는 요소
  // index 값
  arr.reduce(function (init, ele, index) {
    console.log('========================');
    console.log('init: ', init);
    console.log('ele: ', ele);
    console.log('index: ', index);
    return init + ele;
  }, 0) / arr.length;
console.log(result);
