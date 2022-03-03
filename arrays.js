/**
 * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
 */
//  length: number;

let arr1 = [1, 2, 3, 4, 5];
let length = arr1.length;
console.log(`[before] arr1.length: ${arr1.length}`);

//  기존의 배열 길이를 줄이면 길이를 초과한 인덱스는 삭제된다.
arr1.length = 3;
console.log(`[after] arr1.length: ${arr1.length}`);

/**
 * Returns a string representation of an array.
 */
//  toString(): string;
arr1 = [1, 2, 3, 4, 5];

console.log(`arr1.toString: ${arr1.toString()}`);

/**
 * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
 */
//  toLocaleString(): string;
const arr2 = arr1.toLocaleString();
//  대상 배열의 값들을 스트링 값으로 바꿔준다.
console.log(`type of arr2's element: ${typeof arr2[0]}`);

/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
//  pop(): T | undefined;
//  null은 의도적으로 명시한 존재하지 않는 값을 의미
//  undefined은 값이 존재하지 않음을 JavaScript engine이 처리한 값을 의미
//  배열이 비었을 때 pop()하면 undefined 출력

arr1 = [0, 1];
arr1.pop();
console.log(arr1.toString());
arr1.pop();
console.log(arr1.toString());
arr1.pop();
console.log(typeof arr1[1]);

console.log(pop3);
