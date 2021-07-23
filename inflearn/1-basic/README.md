# 인프런 자바스크립트 알고리즘 풀이

## 1. 세 수 중 최솟값

### 21. 06. 07

### ✏️ Note

변수를 let answer; 만든다.  
두 수를 먼저 비교해 더 작은 값을 answer에 담는다.  
answer 자체를 남은 한 가지 값과 비교해 최종 answer을 얻어낸다.  
나는 일일이 하나하나 비교를 했는데 이 방법이 더 효율적인 것 같다 !!  
변수 활용을 잘해야 하는 듯!

---

</br>

## 2. 삼각형 판별하기

### 21. 06. 07

### ✏️ Note

삼각형을 만들기 위해서는 가장 긴 변을 제외한 나머지 2개의 변의 합이 가장 긴 변보다 길어야 한다.  
1번 문제를 응용해서 가장 긴 변의 길이를 구한다.

---

</br>

## 3. 연필 나눠주기

### 21. 06. 08

### ✏️ Note

Math 함수 쓰기

---

</br>

## 4. 1부터 N까지의 합

### 21. 06. 09

### ✏️ Note

for 문 돌려서 총합 구하기

---

</br>

## 5. 최솟값 구하기

### 21. 06. 11

### ✏️ Note

array 내 item 숫자들을 sort 해서 가장 적은 값이 맨 앞으로 오도록 함.  
선생님 풀이는 나랑 다름. 맨 첫번째 풀이랑 비슷. 가장 큰 값 정하고 for 문으로 비교

- spread operator를 통해서도 풀 수 있다.
- Math.min.apply(null, array)로도 가능(전개 연산자 쓰는 것이 더 낫다)

---

</br>

## 6. 홀수

### 21. 06. 12

### ✏️ Note

배열 내장 함수가 익숙해서 그런지 나는 문제를 풀 때 배열 내장 함수를 이용해서 푸는 편이다.  
선생님은 `for .. of ... ` 구문을 이용해서 푸셨고, 최솟값과 총합을 구하는 방식은 이전 풀이들과 비슷했다.  
답이 2개이고 배열에 넣는 걸 원하는 경우 빈 배열을 만들고 push 함수를 이용하는 걸 기억해두자 !

---

</br>

## 7. 10부제

### 21. 06. 13

### ✏️ Note

일일이 스트링을 만들어서 배열을 만들고 그 배열 안에서 해당하는 숫자를 찾기. 너무 비효율적. 그대로 숫자를 쓰는 게 편함  
% 를 잘 이용하는 게 중요한 거 같다. 되게 영리한 방식임.. 꼭 기억해두자

---

</br>

## 8. 일곱난쟁이

### 21. 06. 14

### ✏️ Note

2중 for 문 돌리는 것.  
코드를 어떻게 하면 더 간단하게 돌릴 수 있을지 항상 고민해보쟈.  
다 합해서 2개를 빼주는 것.. 수학적 사고를 조금 길러야된다는 생각.

---

</br>

## 9. A를 #으로

### 21. 06. 15

### ✏️ Note

array 함수를 안까먹는 거 같아서 좋지만  
다른 함수들도 좀 익혀보자.

```
String.prototype.replace()
```

---

</br>

## 10. 문자 찾기

### 21. 06. 16

### ✏️ Note

문자열을 해당하는 글자로 찾아서 나누고 -1 해주는게 신박한 방법이라고 생각.

---

</br>

## 11. 대문자 찾기

### 21. 06. 18

### ✏️ Note

내 방법: 정규식 이용해서 풀기  
선생님 방법: String.toUpperCase(), ASCII CODE로 풀기(alphabet.charCodeAt())

---

</br>

## 12. 대문자로 통일

### 21. 06. 19

### ✏️ Note

array 이용해서 풀 수 있었음

---

</br>

## 13. 대소문자 변환

### 21. 06. 20

### ✏️ Note

모두 대문자로 바꾸는건 String.toUpperCase()로 할 수 있다고 설명해주심

---

</br>

## 14. 가장 긴 문자열 찾기

### 21. 06. 20

### ✏️ Note

for 문 돌려서 각 문자열의 length 비교해주기.  
가장 작은 숫자를 Number.MIN_SAFE_INTEGER 으로 설정하셨는데 난 굳이? 란 생각이 든다.  
0으로 설정하면 안되는건가.. 흠

---

</br>

## 15. 가운데 문자 출력

### 21. 06. 21

### ✏️ Note

`substring`이랑 `substr`의 차이  
substring은 시작 인덱스로부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환함  
substr은 문자열의 시작 인덱스에서 시작해 특정 문자 수만큼의 문자열을 반환

```js
let str = 'dkssyddico';
console.log(str.substring(1, 2)); // k
console.log(str.substr(1, 2)); // ks
```

---

</br>

## 16. 중복문자제거 (indexOf)

### 21. 06. 21

### ✏️ Note

`indexOf`

```js
let str = 'dkssyddico';
str.indexOf('d', 1);
// 인덱스 1번 이후로 'd'를 찾아라
// 찾는 문자가 없으면 -1 을 리턴
```

---

</br>

## 17. 중복단어제거 (indexOf)

### 21. 06. 22

### ✏️ Note

`indexOf`와 `filter` 같이 쓰기

---

</br>