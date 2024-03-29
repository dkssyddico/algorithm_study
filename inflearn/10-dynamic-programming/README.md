# Dynamic programming(동적계획법)

## 1. 계단오르기

## 21.08.27

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

**동적 계획법**은 한 번에 풀기는 어려운 문제를 작은 단위의 문제로 쪼개서 푸는 방식이다.
직관적으로, 바로 봐도 답이 나올 수 있는 정도로 작은 단위로 쪼갠다.
이 문제는 dy(dynamic)이라는 배열을 만들어 문제를 푼다.
**점화식**을 이해하면 좋다.
배열로 예를 들면 다음과 같다.

```js
dy[n] = dy[n - 1] + 3;
```

n번쨰의 답이 n-1번째에서 3을 더하면 답이 되듯이,
기준이 되는 인덱스(n)에서 근처에 있는 인덱스들(n-1)과 관계가 있는 것이 배열에서 점화식이다.
이 문제를 점화식으로 풀이해보자면 !
7번째 계단까지 오르는 방법을 한 번에 구하는 것은 어렵다.
그런데 1번째와 2번째 계단을 오르는 경우의 가짓수를 구하는 방법은 어렵지 않다.
1번째 계단을 오르는 경우의 수는 1, 2번째 계단을 오르는 경우의 수는 2.
각각 dy 배열에 n번째를 n번 인덱스로 바꿔 값을 할당해준다.

```js
dy[1] = 1;
dy[2] = 2;
```

그리고 3번째 계단을 오르는 경우를 생각해보자.
3번째 계단을 오르는 경우의 수는 1번째 계단에서 가는 경우와 2번째 계단에서 가는 경우를 합한 값이다.
1번째 계단에서 3번째 계단을 가는 방법은 1번째 계단을 오르는 경우에서 2번 계단을 건너뛰고 바로 2 걸음으로 3으로 도착하는 경우로, 1번째 계단을 오른 경우의 수와 값이 동일하다.
왜 바로 1번째에서 바로 3번째로 가냐하면 2번째 계단을 밟으면 그건 2번째 계단을 가는 경우와 겹치기 때문이다.
그리고 2번째에서 3번째에서 가는 경우도 한 걸음만 더 가면 되므로, 기존 2번째 계단을 오른 경우의 수와 같다.

```js
dy[3] = dy[1] + dy[2];
```

즉, 3번째 계단의 경우의 수를 구한 것처럼 이 문제의 풀이는 n번째 가는 경우의 수는 n-1번째와 n-2번째 경우를 합해주는 것이다.

1번째와 2번째 경우는 이미 초기화를 해줬으므로, for문을 통해 해결하면 된다.
dy 배열은 구하려는 답에서 +1을 해야 1, 2, 3, 4번째 계단을 배열의 index와 같은 값으로 사용할 수 있다.

```js
function solution(stairs) {
  let answer = 0;
  let dy = Array.from({ length: stairs + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  // 2까지는 초기화 해준다.
  for (let i = 3; i <= stairs; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  answer = dy[stairs];
  return answer;
}

console.log(solution(7));
```

---

<br/>

## 2. 돌다리 건너기

## 21.08.28

### My solution 👩🏻‍💻

위 문제와 크게 다르지 않음.
다른 점은 목적지가 다르다는 것!
1번 문제보다 한 번 더 가야된다는 것에 주의!!

### Teacher's solution 👨‍🏫

---

<br/>

## 3. 최대부분증가수열(LIS)

## 21.08.29

### My solution 👩🏻‍💻

내가 구현한 부분은 처음과 2번째 인덱스까지 초기화를 시켜준다.
그 다음으로 arr에서 기준이 될 숫자를 뽑고, 그 다음으로 이중 for문을 돌려서 arr 인덱스 보다 낮은 숫자들을 뽑았다.
헷갈리는 부분은 어떻게 아래 숫자들간 대소를 비교하느냐..
그리고 그 값을 dy 배열에 어떻게 저장할 것인가 이다!

#### LIS(최대부분증가수열, 최장증가부분수열)

- 원소가 n개인 배열의 일부 원소를 골라내서 만든 부분 수열 중, 각 원소가 이전 원소보다 크다는 조건을 만족하고, 그 길이가 최대인 부분 수열을 최장 증가 부분 수열이라고 합니다.

  - 예를 들어, { 6, 2, 5, 1, 7, 4, 8, 3} 이라는 배열이 있을 경우, LIS는 { 2, 5, 7, 8 } 이 됩니다.
  - { 2, 5 }, { 2, 7 } 등 증가하는 부분 수열은 많지만 그 중에서 가장 긴 것이 { 2, 5, 7, 8 } 입니다.

#### 출처

[LIS 개념]('https://chanhuiseok.github.io/posts/algo-49/')

### Teacher's solution 👨‍🏫

우선 arr의 i번째 숫자가 부분 수열에서 마지막 숫자일 때,([a,b,c,d,8]) 이 마지막 숫자를 정해놓고 만들 수 있는 부분 수열의 최대 길이 값이 들어갈 수 있는 dy 배열을 하나 만든다.
예를 들어서 arr[3]이 8이면 증가 수열의 마지막 숫자가 8이라는 것이 되고,
이때 부분 수열의 최대 길이값이 dy[3]에 들어가게 되는 것이다.
이중 for문을 이용하는데 첫번째 for문의 변수 i가 1이면 두번째 for문의 변수 j는 i-1가 된다.
그 전의 숫자들과 비교해줘야 하기 때문이다.
이때 최대값을 구하는 변수 max는 첫번째 for문에 넣고,
두번째 for문에서 max 값 판별 조건은 다음과 같다.

```js
for (let j = i - 1; j >= 0; j--) {
  if (arr[j] < arr[i] && dy[j] > max) {
    max = dy[j];
  }
}
```

판별하려는 수(arr[i])가 arr[i] 이전 값보다는 커야하고,
이전 값의 부분수열의 최장 길이값이 담긴 dy[j]가 max 값보다 커야 그 이전 값에 대한 최대 길이를 dy[i]가 포함할 수 있다.
만약에 앞의 조건을 통과하지 못하면 현재 숫자가 이전 숫자보다 작다는 것을 의미한다.

---

<br/>

## 4. 동전교환(냅색 알고리즘)

## 21.08.30

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

dy배열은 거스름돈 만큼의 길이를 갖도록 만든다.
즉, 가지고 있는 동전으로 거슬러줄 수 있는 경우를 1원일 때부터 구하고 15원까지 경우를 점화식으로 해결한다.
0원일 때 거슬러줄 수 있는 경우는 없으므로 dy[0]은 0으로 초기화 한다.
dy[i]의 값은 i는 거슬러주는 금액이고, i 금액을 거슬러주는데 사용되는 최소 동전의 갯수가 할당된다.
중첩 for문을 만드는 데 첫번째 for문은 가지고 있는 동전의 갯수만큼 도는 for문이다.
두번째 for문은 코인값으로 시작해서 15까지의 모든 경우를 구할 수 있도록 돌리는 것이다.
코인값으로 시작한다는 것은 그 코인을 사용해서 나오는 경우의 수를 구한다는 것이다.
dy[j - coin[i]] + 1의 의미는 j는 현재 구하고자하는 거스름돈의 값을 의미하고 여기서 coin[i]를 뺀다는 것은 사용할 코인을 하나 썼다는 의미가 된다.
그래서 +1을 해줘서 한 코인을 썼다는 것을 계산한다.
그리고 같은 거스름돈이더라도 동전의 종류에 따라 경우의 수가 더 작게 나올 수 있기 때문에,

```js
dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
```

이렇게 최소 경우의 수를 계산해준다.

---

<br/>

## 5. 최대점수 구하기(냅색을 이용한 조합)

## 21.08.31

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

위의 문제와 풀이법 비슷. 이중 for문 사용.
i는 문제의 갯수.
dy[j]는 j라는 시간 동안 얻을 수 있는 최대 점수.
동전교환처럼 숫자가 하나씩 증가하는 식으로 하면 똑같은 문제를 한 번 더 푸는 중복이 될 수 있다.
중복을 피하기 위해, j를 m(20)부터 0까지 실행해야 한다.
dy는 0으로 초기화한다.
20분일 때 5를 빼면 20부터 5까지 10점.(문제를 풀었단 의미)
20분일 때 12를 빼면 8분이 남음. 8분으로 얻을 수 있는 최대 점수는 10점.
거기다 25점 더해줌.
19일 때 12 빼면 7. 10점에다 25 더해줌.
16에서 12빼면 4가 0. 0점에다 25점 더해줌. 16 값은 25점.
기존 값보다 크면 바꾼다.

---

<br/>
