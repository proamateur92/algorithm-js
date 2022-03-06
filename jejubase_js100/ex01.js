// # 문제1 : 배열의 삭제

// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
// pop shift filter, splice for iterator

var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

var answer = nums.filter(num => {
  if (num / 100 !== 4 && num / 100 !== 5) {
    return num;
  }
});

console.log(`nums: ${nums}`);
console.log(`answer: ${answer}`);
