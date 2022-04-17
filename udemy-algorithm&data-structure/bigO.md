##### 참고 Udemy - JavaScript 알고리즘 & 자료구조 마스터 클래스

# Section 1: Introduction

#### BigO notation이 필요한 이유

-> 프로그램의 실행 시간을 일일이 테스트 할 수 없다.

<br>

#### 연산갯수를 세 보자.

-> 연산의 개수를 세는 것은 여간 귀찮은 일이 아니다. 단순 상수가 아닌 반복문의 경우 반복횟수에 따라 연산의 수가 달라지기 때문이다.

<br>

# Section 2: Big O notation

### Big O notation: 입력의 크기에 따른 함수의 실행 시간의 관계

<br>

### Big O 시간복잡도

- linear O(N) = N
- quadratic O(N) = N<sup>2</sup>
- constant O(N) = 1

<br>

### Big O notation의 상수가 붙어 있으면 생략 가능하다.

- O(2N) (x) -> O(N)
- O(500) (x) -> O(1)

<br>

### Big O notation의 규칙

- Big O notation에서 가장 큰 시간복잡도 외에는 생략한다.

  - O(N<sup>2</sup> + 30N + 100) -> O(N<sup>2</sup>)

  <br>

- n의 크기 증가에 따른 함수 실행 시간의 그래프에 따라 Big O notaion이 결정된다.

  <br>

### Big O 공간복잡도

- booleans, numbers, undefiend, null -> O(1)상수 공간 복잡도

  <br>

- strings require O(N)

  <br>

- Reference types are generally O(N), wehre n is the length(for arrays) or the numbers of key(for objects)

  <br>

### Logarithm

- log<sub>2</sub> 8 = 3 -> 2<sup>3</sup> = 8

  <br>

- log의 시간복잡도에서 상수는 생략 가능하다.
  log<sub>2</sub> -> log

  <br>

- log의 시간복잡도 구분
  - O(log<sub>N</sub>)
  - O(N log<sub>N</sub>)

<br>

### 시간복잡도 log에 관련되는 알고리즘

- 탐색 알고리즘, 효율적인 정렬 알고리즘

<br>

### 공간복잡도 log에 관련되는 알고리즘

- 재귀 함수

<br>

### 시간복잡도의 빠르기 (좌측부터 가장 빠름)

O(1) > O(log<sub>N</sub>) > O(N) > O(N log<sub>N</sub>) > O(N<sup>2</sup>)

<br>

# Section 3: 배열과 오브젝트의 성능 평가

### 객체

- Big O of Objects

  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
  - Access - O(1)

  <br>

- Big O of Object Method - Object는 n개의 key와 value를 가진다.
  - Object.keys - O(n)
  - Object.values - O(n)
  - Object.entries - O(n)
  - Object.hasOwnProperty - O(1)

<br>

### 배열 - 선형 리스트

- Big O of Arrays

  - Insertion - It depends on method
  - Removal - It depends on method
    -> 배열의 요소 추가, 삭제 할 때 pop(), push() 메소드를 사용하면 배열의 가장 끝 인덱스에 요소를 추가하거나 삭제하기때문에 O(1)이지만
    unshift(), shift() 메소드를 사용한다면 배열 가장 앞 인덱스에 새로운 요소를 추가 또는 삭제하기 때문에 O(N)의 시간복잡도를 가지게 된다.

  - Searching - O(N)
    -> 요소를 검색할 때에는 최악의 경우 N번째 요소까지 찾아봐야 하므로 시간복잡도 O(N)을 가진다.

  - Access - O(1)
    -> 요소를 접근할 때에는 특정 인덱스를 참조하므로 상수 시간복잡도를 가진다.

<br>

- Big O of Arrays Operation
  - push - O(1)
  - pop - O(1)
  - shift - O(N)
  - unshift - O(N)
  - concat - O(N)
    -> 두 배열을 합칠 때 시간복잡도 O(N + M)을 가지지만 Big O notation 시간복잡도 규칙에 의해
    상수 M을 무시해준다.
  - slice - O(N)
    -> 배열의 특정 범위까지의 요소만 자르기 때문에 O(N)을 가진다.
  - splice - O(N)
    -> slice와 다르게 배열을 잘라 요소를 추가하지만 맥락은 같다.
  - sort - O(n \* log n)
    -> 단순히 N번쩨 요소까지 훑는 것이 아니라 두 요소를 비교하고 정렬하므로 가장 늦은 시간복잡도인 (N \* log N)을 가진다.
  - forEach / map / filter / reduce / etc - O(N)

<br>

##### Section3 요약: 객체는 정렬되어 있지 않은 데이터의 나열이며 데이터의 접근, 생성, 삭제하는 속도가 빠르다. 배열의 경우에는 데이터의 접근은 빠르나 특정 경우를 제외하고(push(), pop()) 대부분의 데이터 작업 속도가 느리다.

<br>

# Section4: 문제 해결 접근법

<br>

1. 문제 이해하기 - 최대한 단서를 얻어내자
   구체적인 예시들로 예외처리 조건 찾기

<br>

2. 세분화하기 -> 방향을 정해 주석으로 단계적으로 작성해놓기

<br>

3. 문제 풀이 및 단순화 -> 어려운 조건들은 무시하고 해결책을 먼저 찾기

<br>

4. 리팩토링 -> 다른 사람의 코드를 비교하는 등 성능 향상에 대한 고민

<br>

##### section4 요약: 단계별 접근을 통해 문제를 이해하고 있으며 문제 풀이 전략의 방향 설정 능력을 어필할 수 있다.
