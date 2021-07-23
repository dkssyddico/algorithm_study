b# 인프런 자바스크립트 알고리즘 풀이

> 완전 탐색(brute force)

## 1. 자리수의 합

### 21. 07. 03

### ✏️ Note

1. 첫번째 풀이
   max 라는 변수에 가장 작은 값을 담아둔다.
   원래 숫자가 변형되면 안되므로 tmp라는 변수에 숫자를 넣어 원본 숫자를 보호한다.  
   자리수의 합은 `while`문을 통해 %10으로 나누어 하나씩 더해준다.
   이렇게 구한 합(sum)이 max보다 크면 max는 sum으로, 답은 원본 x가 된다.
   하지만 뒤에 합은 같으나 자리수가 더 많거나 숫자 자체가 더 큰 숫자가 있을 수 있기 때문에 합이 max와 같은 경우에서 뒤의 x가 answer보다 크면 다시 answer를 x로 바꿔준다.

2. 두번째 풀이
   내가 원했던 풀이는 2번째 풀이에 가깝다.  
   x를 배열로 만들고 `Number`와 `reduce`를 통해 자리수의 합을 구한다.
   그 다음 answer을 구하는 과정은 첫번째 풀이와 같다.  
   **sum**, **max** 변수를 만들어주는 것을 계속 기억할 것.

## ✅ **sum**, **max** 변수를 만들어주는 것을 계속 기억할 것.

---

</br>

## 2. 뒤집은 소수

### 21. 07. 04

### ✏️ Note

소수 구하는 공식을 잘 모르겠어서 실패.
그래도 배열 내 숫자를 뒤집어 새로운 배열을 만드는 것은 성공

- 1은 소수가 아니다.
- 소수는 1과 자기 자신으로만 나눠지는 수이다.

<선생님 풀이>
소수인지 판별하는 함수(isPrime)를 하나 더 만든다.
2부터 시작해서 주어진 숫자의 절반까지 나눠진다면(몫이 0이 된다면) 그 수는 소수가 아니다.
true/false를 통해 answer 배열에 숫자를 push할지 판별한다.

**에라토스테네스의 체**
소수의 개수 구하는 식

![에라토스테네스의 체 구하는 방법](https://junkim.netlify.app/Sieve_of_Eratosthenes_animation-6420e3488e509dce176a1e957ea07ff5.gif)

이거는 소수를 각 숫자에 곱하기로 구하는 것인데 선생님이 알려준 거처럼 더하기로 해도 되긴 한다.

---

</br>
****
## 3. 멘토링

### 21. 07. 05

### ✏️ Note

모든 경우의 수를 다 탐색해보겠다: 완전탐색(브루투포스)
**문제푸는 순서**

1. 멘토와 멘티가 될 수 있는 모든 경우의 수 구하는 for문 만들기
2. 그 안에서 몇번째 시험인지 for 문 만들기
3. 몇번째 시험에서 멘토와 멘티가 몇등인지 구하기
4. 멘토가 멘티보다 등수가 낮은지 확인하고 카운트에 1씩 더하기.
5. 시험의 숫자만큼 카운트 됐는지 확인하고 answer에 1씩 더하기.

---

</br>

## 4. 졸업선물

### 21. 07. 06

### ✏️ Note

#### 내 풀이

- 배열 내 숫자 중 상품 가격을 오름차순으로 정렬.
- 가장 비싼 상품 가격은 50% 줄여준다.
- 다시 배열을 상품 가격으로 오름차순 정렬한다.
- 상품과 가격이 합해진 숫자만 가진 배열을 만든다.
- for문으로 배열을 돌면서 예산을 초과하지 않는 경우를 판별하고 학생 수이므로 +1을 해준다.

#### 선생님 풀이

- 총 비용 오름차순으로 정렬
- 할인받을 건 어떤 아이템?: 기준이 없다. 그래서 다 해봐야함
- 모든 아이템이 할인받는 경우를 기준으로 잡고, 그 상품 가격 + 배송비를 예산에서 빼준뒤 나머지 상품을 샀는지를 판별한다.

---

</br>

## K번째 큰 수

### 21. 07. 07

### ✏️ Note

중복을 제거하는 자료구조 중 `set` 이라는 것이 있다.
[set]('https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set')
for 문을 돌려 set을 할당한 변수에 `add` method로 배열의 요소를 넣어주면 중복이 제거된다. 리턴값은 오브젝트.
내 풀이가 한참 더 길다. 선생님 코드를 보고 더 간결하게 할 수 있다고 생각했음.

---

</br>