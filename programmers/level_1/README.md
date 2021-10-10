# 프로그래머스 레벨 1 문제

## 1. 하샤드 수

각 자릿수의 합을 구해서 원래 숫자가 나눠지는지 판별하는 문제.
각 자릿수의 합을 어떻게 구하는지 상기할 수 있었던 좋은 문제였다.

---

<br>

## 2. 자릿수의 합

나는 while문을 이용해 풀었는데, 다른 사람 풀이보니 array화해서 푸는 방법을 쓴다.

```js
function solution(n) {
  return (n + '').split('').reduce((acc, cur) => acc + parseInt(cur), 0);
}
```

---

<br>

## 3. 같은 숫자는 싫어

연속된 숫자가 나오면 continue해주고, 아니라면 새 배열에 담아주는 방법으로 풀었다.

다른 사람 풀이보니 array.filter 이용

```js
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
```

---

<br>

## 4. 문자열 내 맘대로 정렬하기

기본적으로 문자열을 sort하고 n번째 인덱스로 또 소팅해주는게 편했다.

---

<br>

## 5. 문자열 다루기 기본

지수가 걸리는 경우가 생길 수 있어서 array로 만든 후 every로 isNaN을 다 통과하는지 검토해야한다.

---

<br>
