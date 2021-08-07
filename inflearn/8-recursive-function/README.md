# 재귀함수와 완전탐색(DFS:깊이우선탐색)

## 1. 재귀함수와 스택프레임(중요)

## 21.08.04

### 👩🏻‍💻 My solution

우선 풀어본다고 나는 for문 이용해서 풀었음 ㅋㅋ

### 👨‍🏫 Teacher's solution

재귀함수는 기본적으로 스택을 이용한다.

```js
function tSolution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}
```

D(3) -> D(2)가 호출되는데 아래의 console.log(L) 은 실행되지 못하고 콜스택에 쌓임
그다음으로 D(1)이 호출.
이제 더 호출될 것이 없고 실행할 것은 아까 실행되지 못하고 스택에 쌓였던
console.log(1) -> console.log(2) -> console.log(3) 가 차례로 실행됨

---

<br>

## 2. 이진수 출력(재귀)

## 21.08.05

### 👩🏻‍💻 My solution

1번 문제를 참고해 재귀함수를 스스로 만들어보았다!
나는 이진수 만들 때 십진수를 2로 계속 나누다보면, 이진수의 몫이 1이 될 때 이진수 계산이 멈춘다는 걸 이용해서 만들었다.
선생님 방법이 코드가 한 줄 줄어들기 때문에 더 깔끔한 거 같다.
내 방식은 몫이 1일 때 답에 더해주는 코드가 있는데, 선생님 방법은 else에서 더해주는 것으로 다 끝난다.

### 👨‍🏫 Teacher's solution

선생님은 입력한 숫자가 0이 될 때까지 재귀함수를 반복하는 것으로 하셨다.
역시나 재귀함수에 들어가는 숫자 parameter는 2로 나눈 몫이 들어가는 것으로 한다.

---

<br>

## 3. 이진트리순회(DFS: 깊이우선탐색)

## 21.08.06

### 👩🏻‍💻 My solution

직접 연필로 함수가 호출되고 출력되는 거 해볼 것!
이진트리 했던 구조는 맨 위에 부모가 있고,
부모 밑에 왼쪽 자식은 (부모 \* 2), 오른쪽 자식은 (부모 \* 2 + 1) 이었다.
규칙이 있는듯?

### 👨‍🏫 Teacher's solution

---

<br>

## 4. 부분집합 구하기(이진트리 DFS)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

이것도 역시 이진트리 방식으로 푼다.
다만 방식은 이러하다.
1이 주어지면 그 다음 수인 2가 각각 두 갈래이다.
즉, 앞으로 1이 포함되냐 안되느냐로 나뉘는 것.
그리고 그 2에서 3으로 갈 때도 두 갈래인데 이건 2가 포함되느냐 여부를 결정하는 것이다.
그래서 그걸 체크해줄 수 있는 배열을 만들어 포함되면 해당하는 번호에 1과 0을 할당해 포함 여부를 파악한다.
만약 배열에 1이 있다면 해당 인덱스의 숫자가 포함되었다는 뜻이므로 그 숫자를 쉽게 출력할 수 있다.
0이면 출력되지 않아 공집합의 경우를 제거할 수 있다.

---

<br>

## 5. 합이 같은 부분집합(이진트리 DFS)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 6. 바둑이 승차(이진트리 DFS)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 7. 최대점수 구하기(이진트리 DFS)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 8. 중복순열(다중 for문과 재귀의 차이점)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 9. 동전교환(DFS-Cut Edge Tech)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 10. 순열 구하기

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 11. 팩토리얼

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 12. 조합수(메모이제이션)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 13. 수열 추측하기(순열, 이항계수 응용)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 14. 조합 구하기(중요)

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>

## 15. 수들의 조합

## 21.08.0

### 👩🏻‍💻 My solution

### 👨‍🏫 Teacher's solution

---

<br>
