# Section 5: 문제 해결 패턴

<br>

### 본 강의에서는 문제 해결 패턴을 다음과 같이 구분하고 있다.

1. Frequency Conter
2. Multiple Pointers
3. Sliding Window
4. Divide and Conquer
5. Dynamic Programming
6. Greedy Algorithms
7. Backtracking
8. Many more...

<br>

### 1. Frequency Conter

<br>

##### 문제: 숫자로 이루어진 첫번째 배열이 주어지고 두번째 배열이 첫번째 배열의 요소들을 제곱한 요소들을 가진 배열인지 판별하기.

<br>

```
function same(arr1, arr2) {
    // 두 배열의 길이가 같지 않음
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++) {
        // arr2에 arr1^2 한 요소를 찾는다
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // 찾지 못하면 return false
        if(correctIndex === -1) return false;
        // 찾았으면 arr2의 해당 요소를 삭제
        else arr2.splice(correctIndex, 1);
    }
    return true;
}

let result = same([1,2,3], [9,3,4]);
console.log(result);

// O(N^2)
```

```
// 위 코드의 리팩토링
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;

        }
    }
    return true;
}

result = same([1,2,4], [16,1,2]);
console.log(result);

// Time Complexity O(N)
```

-> 두 배열의 요소를 비교할 때는 강의에서의 Frequency Counter 패턴을 이용하는 것이 성능면에서 월등하다.

<br>

##### 문제: 애너그램 - 주어진 두 문자열의 요소들이 서로 동일한지 판별하기.

```
function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const lookup = {};

    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

// Time Complexity O(N)
```

<br>

### 2. Multiple Pointers

<br>

##### 문제: 숫자로 이루어진 배열의 요소들 중 두 요소의 합이 0인 요소 구하기

<br>

```
function sumZero(arr) {
    arr.sort();
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]];
        } else if(arr[left] + arr[right] < 0) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

// Time Complexity O(N)
// Space Complexity O(1)
```

```
// 위 코드의 리팩토링

function sumZero(arr) {
    arr.sort();
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]];
        } else if(arr[left] + arr[right] < 0) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

// Time Complexity O(N)
// Space Complexity O(1)
```
