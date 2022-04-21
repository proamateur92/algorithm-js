# Section 7: 재귀 함수(Recursion Function)

<br>

### 재귀함수란?

재귀는 자기자신을 호출하는 함수이다.

<br>

### 어디에서 재귀가 사용되는가?

- JSON.parse / JSON.stringify
- documnet.getElementById and DOM traversal algorithms
- Object traversal
- more complex data structures
- alternative to iteration

<br>

### Call Stack

- JavaScript에서 함수를 호출하면 Call stack 꼭대기에 쌓인다.
- JavaScript가 return을 확인하거나, 함수 안에 더 이상 실행할 코드가 없으면 complier가 stack의 제일 위에 있는 항목을 제거한다.

<br>

##### 주안점

- 재귀 함수는 계속해서 새로운 함수를 호출 스택에 추가한다.
- 자기자신을 계속해서 호출하기 때문에 호출의 종료 시점에 대해 주의해야 한다.

<br>

### 재귀함수의 기본 요소

1. 중단점
2. 다른 입력 값

<br>

##### 첫번째 재귀함수

```
function countDown(num) {
    if(num <= 0) {  // 중단 시점
        console.log('발사!!');
        return;
    }
    console.log(num);
    num--;  // 다른 입력 값
    countDown(num);
}
countDown(5);
```

<br>

##### 두번째 재귀함수

```
function sumRange(num) {
    if(num === 1) return 1; // 중단 시점
    return num + sumRange(num-1); // 다른 입력 값
}

sumRange(5);
```

<br>

##### 팩토리얼

```
function factorial(num) {
    if(num === 1) return 1; // 중단 시점
    return num * factorial(num-1);  // 다른 입력 값
}

factorial(4);
```

<br>

### 재귀함수의 위험성

- 중료 조건의 부재
- 리턴 값의 부재 및 잘못된 리턴 값
- Stack overflow -> 재귀가 멈추지 않았음을 의미

<br>

### Helper method recursion

- 일반 함수에서 재귀적인 내부 함수를 호출하는 패턴
- 일종의 결과를 컴파일할 때 사용된다.
- 보통 배열이나 배열과 비슷한 형태의 데이터 구조

<br>

##### 예시

```
function outer(input) {

  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

<br>

##### helper method recursion 예제

```
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        console.log(helperInput);
        if(helperInput.length === 0) return;

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        return helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
```

<br>

### Pure recursion

<br>

##### 순수 재귀함수로 홀수 구분하기

```
function collectOddValues(arr) {
    let result = [];

    if(arr.length === 0) {
        return result;
    }

    if(arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    result = result.concat(collectOddValues(arr.slice(1)));

    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
```

<br>

##### tip

- 배열 값을 변경하지 않고 배열을 복사하는 slice, spread 연산자, concat같은 메서드를 사용할 수 있다.
- 문자열은 변경이 불가하다. 따라서 slice나 substring 메서드를 사용하여 문자열을 복사한다.
- 객체의 경우 Object.assign이나 spread 연산자를 사용하여 객체를 복사한다.
