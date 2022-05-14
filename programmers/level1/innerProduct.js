// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// a	        b	            result
// [1,2,3,4]	[-3,-1,0,2]	    3
// [-1,0,1]	    [1,0,-1]	    -2

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

const result = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
console.log(result);
