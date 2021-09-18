# Leet Code - Array

## 1. Max Consecutive Ones (21.09.18)

내 풀이로는 Runtime: 76 ms, Memory Usage: 41.6 MB으로 나왔다.
다른 사람 풀이 구글링해보니까 **Math.max**를 많이 씀.
인프런에서 배울 때도 저걸 활용해야겠단 생각을 많이했는데..
헉 근데 Math.max를 쓰니까 되려 런타임이 늘어났다.
Runtime: 131 ms
Memory Usage: 40.9 MB

---

<br>

## 2. Find Numbers with Even Number of Digits (21.09.18)

조건에 보면 100000이하 숫자까지 쓸 수 있어서 그걸 응용했다. 런타임 122ms
문자열로 바꿔서 할 수도 있음. 문자열로 바꾸면 런타임이 83ms

---

<br>

## 3. Squares of a Sorted Array (21.09.18)

array 내장 함수 map과 제곱근을 만드는 Math 함수 pow이용
