// #문제43 : 10진수를 2진수로

//  나의 답안
//  -> 다른 메서드가 있지 않을까하여 다른 풀이방법을 떠올리지 못했다.
//  -> 해설 답안을 참고하여 다시 코드를 짜보았다.

//  해설 답안
let num = 5;
let result = new Array();

while (num) {
  result.push(num % 2);
  num = Math.floor(num / 2);
}

console.log(result.reverse().join(''));
