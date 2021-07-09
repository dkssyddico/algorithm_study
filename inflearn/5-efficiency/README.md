# 인프런 자바스크립트 알고리즘 풀이

> 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

## 1. 두 배열 합치기(Two Pointers Algorithm)

### 21. 07. 08

### ✏️ Note

#### 👩🏻‍💻 My solution

- spread operator + sort 조합 !

#### 👨‍🏫 Teacher's solution

두개의 포인터를 잡았다해서 two pointer 알고리즘.
p1, p2라는 변수를 0으로 잡고 두 개의 공통된 배열 길이 수까지 while문을 돌려서 arr1, arr2의 각 아이템의 대소를 비교해서 answer 배열에 작은 수를 push해서 넣는다. 이때 아이템이 들어갔다면 p1이나 p2에 1씩 증가시켜준다.
이후 첫번째 while문이 끝나도 배열 길이가 더 긴 배열은 아이템이 남아있을 수 있으므로 while문을 돌려서 추가해준다.

---

<br>

## 2. 공통원소구하기(Two Pointers Algorithm)

### 21. 07. 09

### ✏️ Note

#### 👩🏻‍💻 My solution

아직 포인터를 활용할 방안을 생각해내지 못해서 그냥 for문 돌리는 것으로 풀었음.
처음에 배열 2개 다 sort 돌리는 것을 생각하긴 함 !

#### 👨‍🏫 Teacher's solution

처음에 배열 2개를 오름차순으로 sort한다.  
여기서 투포인터는 배열의 인덱스 값과 같다고 생각하면 된다.
두 배열의 숫자가 같으면 answer에 push한다. 그리고 같이 index를 증가시켜준다.
만약 기준 배열보다 비교할 배열의 아이템 숫자가 큰 경우, 기준 배열과 같지 않고 숫자가 적으니 한 숫자를 증가 시켜줘야하기 때문에 p1을 증가시킨다.
나머지 경우는 비교할 배열의 아이템이 기준 배열의 아이템 숫자 보다 값이 작은 경우이므로 비교할 배열의 인덱스를 1 증가시켜준다.

---

<br>

## 3. 연속부분수열1(Two Pointers Algorithm)

### 21. 07. 0

### ✏️ Note

#### 👩🏻‍💻 My solution

#### 👨‍🏫 Teacher's solution

---

<br>

## 4. 연속부분수열2(Two Pointers Algorithm)##

### 21. 07. 0

### ✏️ Note

#### 👩🏻‍💻 My solution

#### 👨‍🏫 Teacher's solution

---

<br>

## 5. 최대 매출(Sliding Window)

### 21. 07. 0

### ✏️ Note

#### 👩🏻‍💻 My solution

#### 👨‍🏫 Teacher's solution

---

<br>

## 6. 학급 회장(Hash Map)

### 21. 07. 0

### ✏️ Note

#### 👩🏻‍💻 My solution

#### 👨‍🏫 Teacher's solution

---

<br>

## 7. 아나그램(Hash Map)

### 21. 07. 0

### ✏️ Note

#### 👩🏻‍💻 My solution

#### 👨‍🏫 Teacher's solution

---

<br>

## 8. 모든 아나그램 찾기(Hash & Sliding Window && Two Pointers Algorithm)

### 21. 07. 0

### ✏️ Note

#### 👩🏻‍💻 My solution

#### 👨‍🏫 Teacher's solution

---

<br>
