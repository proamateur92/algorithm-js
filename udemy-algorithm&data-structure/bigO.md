##### 참고 Udemy - JavaScript 알고리즘 & 자료구조 마스터 클래스

# Section 1: Introduction

#### BigO notation이 필요한 이유

-> 프로그램의 실행 시간을 일일이 테스트할 수 없다.

#### 연산갯수를 세 보자.

-> 연산의 개수를 세는 것은 여간 귀찮은 일이 아니다. 단순 상수가 아닌 반복문의 경우 반복횟수에 따라 연산의 수가 달라지기 때문이다.

<br>

# Section 2: Big O notation

Big O notation: 입력의 크기에 따른 함수의 실행 시간의 관계

#### Big O 시간복잡도

- linear O(n) = n
- quadratic O(n) = n<sup>2</sup>
- constant O(n) = 1

Big O notation의 상수가 붙어 있으면 생략 가능하다.

- O(2n) (x) -> O(n)
- O(500) (x) -> O(1)

<br>

#### Big O notation의 규칙

- Big O notation에서 가장 큰 시간복잡도 외에는 생략한다.
  O(n<sup>2</sup> + 30n + 100) -> O(n<sup>2</sup>)

<br>

- n의 크기 증가에 따른 함수 실행 시간의 그래프에 따라 BigO notaion이 결정된다.

<br>

#### #### Big O 공간복잡도

- booleans, numbers, undefiend, null -> O(1)상수 공간 복잡도

<br>

- strings require O(n)

<br>

- Reference types are generally O(n), wehre n is the length(for arrays) or the numbers of key(for objects)

<br>

#### Logarithm

log<sub>2</sub> 8 = 3 -> 2<sup>3</sup> = 8

<br>

log의 시간복잡도에서 상수는 생략 가능하다.
log<sub>2</sub> -> log

<br>

log의 시간복잡도 구분

- O(log<sub>n</sub>)
- O(nlog<sub>n</sub>)

<br>

#### 시간복잡도 log에 관련되는 알고리즘

- 탐색 알고리즘, 효율적인 정렬 알고리즘

<br>

#### 공간복잡도 log에 관련되는 알고리즘

- 재귀 함수

<br>

#### 시간복잡도의 빠르기 (좌측부터 가장 빠름)

O(1) > O(log<sub>n</sub>) > O(n) > O(nlog<sub>n</sub>) > O(n<sup>2</sup>)
