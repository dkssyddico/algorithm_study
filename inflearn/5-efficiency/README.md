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

### 21. 07. 10

### ✏️ Note

#### 👩🏻‍💻 My solution

고민은 했으나 풀지 못함. 투포인터 응용하는게 왜케 어렵지? ㅜㅜ

#### 👨‍🏫 Teacher's solution

left와 right 변수를 만든다.
차례로 배열의 아이템을 더해주고, 타겟 넘버보다 크거나 값이 같으면 left를 이용해 sum 값에서 sum이 targetNum보다 작아질 수 있도록 배열의 왼쪽 아이템부터 빼준다.
right가 sum을 합할 수 있도록 하는 변수라면 left는 천천히 움직이면서 sum의 값을 조정해주는 역할.
right는 for문을 통해 차례로 증가하지만 left는 sum에서 값을 뺄 때 한차례씩 증가한다.
타겟 넘버와 sum이 일치하면 count는 증가한다.

---

<br>

## 4. 연속부분수열2(Two Pointers Algorithm)

### 21. 07. 11

### ✏️ Note

#### 👩🏻‍💻 My solution

연습장에 풀어보니까 투포인터 개념이 이해됨.
여기서 난 left가 기준이 되고 right가 옆으로 하나씩 움직이는 애로 설정했음.
첫번째 아이템부터 5 이하인지 확인해준뒤 5이하라면 오른쪽으로 아이템을 하나 하나 더해서 판별한다.
아니라면 break를 걸어서 다시 두번째 index(1)부터 판별을 시작한다.
for문이랑 while문을 섞어서 쓰는게 헷갈린다.
디버깅 툴을 이용하면 쉬울 거 같은데 아직은 콘솔로그가 편하다는게 함정 ㅜㅜ
++ 디버깅 툴을 이용해봤는데 watch에 내가 파악해야하는 변수명을 넣어놓고 한 스텝씩 올리면 되게 편하다!

#### 👨‍🏫 Teacher's solution

선생님은 나랑 반대식으로 풀음.
sum을 구해서 lt를 왼쪽부터 하나씩 빼주는거구.
그 sum이 5이하라면 나올 수 있는 카운트는 index 기준으로 `rt - lt + 1`이다.

---

<br>

## 5. 최대 매출(Sliding Window)

### 21. 07. 12

### ✏️ Note

#### 👩🏻‍💻 My solution

투포인터처럼 기준잡고 풀었음

#### 👨‍🏫 Teacher's solution

**Sliding Window**
창문을 미는 것처럼 옆으로 슥슥.
12, 15, 11, 20, 25 이렇게 있다고 하면,
12 + 15 + 11의 합을 먼저 구한 뒤, 38에서 12를 빼고 20을 더한다. 그걸 반복

---

<br>

## 6. 학급 회장(Hash Map)

### 21. 07. 12

### ✏️ Note

#### 👩🏻‍💻 My solution

`Map` (주의: Array method인 map과는 다르다.)

[Map(mdn)]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

MDN에는 Map 만드는 방법이 있어서 이중 for문을 이용했고,
Map에 모든 key, value가 들어갔을 때,
다시 for문을 돌려서 제일 많은 표와 회장을 찾았다.

#### 👨‍🏫 Teacher's solution

`Map`을 새로 만들고 학생 문자가 있는지 확인한다. ➡️ `has`
없으면 `set`을 이용해 key를 학생으로 하고 값은 `get`으로 가져와 + 1 해준다.
제일 큰 값을 찾는건 내가 한 방법과 비슷 !

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
