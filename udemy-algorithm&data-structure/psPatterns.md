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

<br>

##### 문제: 숫자로 이루어진 배열이 주어지고 배열의 요소 중 unique한 값만 추려 갯수를 반환하라.

<br>

나의 코드

```
function countUniqueValue(arr) {
    arr.sort();
    const result = [];

    if(arr.length !== 0) {
        result.push(arr[0]);
    }

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]) {
            continue;
        } else {
            result.push(arr[i+1]);
        }

    }

    return result.length;
}

// Time Complexity O(N)
// Space Complexity O(1)
```

<br>

해설 코드

```
function countUniqueValue(arr) {
    arr.sort();
    let i = 0;

    if(arr.length !== 0) {
        return 0;
    }

    for(let j = 1; j < arr.length - 1; j++) {
        if(arr[i] !== arr[i+1]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

// Time Complexity O(N)
// Space Complexity O(1)
```

-> 나의 코드와 해설 코드가 비슷한 맥락을 가졌다.
기본 메커니즘이나 시간복잡도, 공간복잡도가 일치했기 때문이다.

<br>

##### 문제: 숫자로 이루어진 배열과 숫자를 입력 받는다. 두번째 인자의 숫자만큼 배열의 인접한 요소의 합의 최대값을 구하라.

<br>

나의 코드

```
function maxSubArraySum(arr, num) {
    if(num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for(let j = i; j < i + num; j++) {
            temp += arr[j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}
maxSubArraySum([9,1,7,3,2], 2);

// Time Complexity: O(N^2)
```

<br>

해설코드

```
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length) {
        return null;
    }

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

maxSubArraySum([3,1,1,2], 4);

// Time Complexity O(N)
```

<br>

### Divide and Conqure

<br>

##### 문제: 정렬된 숫자 배열와 숫자를 입력 받아 주어진 숫자와 일치하는 배열의 요소를 반환한다. 일치하는 요소가 없으면 -1을 리턴한다.

<br>

해설 코드

```
function search(array, val) {
    array.sort();
    let min = 0;
    let max = array.length - 1;

    while(min <= max) {
        let mid = Math.floor((max + min) / 2);
        let currentElement = array[mid];

        if(currentElement < val) {
            min++;
        } else if(currentElement > val) {
            max--;
        } else {
            return mid;
        }
    }
    return -1;
}

const result = search([1,7,4,5,2],7);

// Time Complexity Log(N) - Binary search
```

<br>

### 실전 문제 풀이

<br>

- <a href='./sameFrequency-my-answer.js'>문제3. Frequence Counter - SameFrequencey</a>
- <a href='./areThereDuplicates-my-answer.js'>문제4. Frequence Counter / Multiple Pointer - areThereDuplicates</a>
- <a href='./averagePair-my-answer.js'>문제5. Multiple Pointer - AveragePair</a>
- <a href='./isSubsequence-my-answer.js'>문제6. Multiple Pointer - isSubsequence</a>
