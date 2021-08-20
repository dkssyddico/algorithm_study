# 그래프와 탐색(DFS, BFS:넓이우선탐색)

## 1. 그래프와 인접행렬

## 21.08.19

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

그래프에 대한 이론 공부

![이론](img/1.jpeg)

---

<br>

## 2. 경로탐색(DFS-인접행렬 : 노드개수가 적을 때)

## 21.08.20

### My solution 👩🏻‍💻

이것도 선생님 풀이대로 그림을 그려보면 쉽게 이해가 된다.
1은 1, 2, 3, 4, 5까지 뻗을 수 있고, 5까지도 모든 숫자로 뻗을 수 있다.
옆에 배열을 놓고 갈 수 있는 경로인지 비교하고 하나씩 쭉 갔다가 되돌아오는 경우를 ch 배열을 적어가면서하면 이해가 잘된다!

### Teacher's solution 👨‍🏫

graph 배열 만드는 방법

```js
// 행, 열 만들기
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
```

graph 방향에 따라서 갈 수 있는 경로를 넣는 방법

```js
for (let [a, b] of arr) {
  // 방향 그래프 만들기
  graph[a][b] = 1;
}
```

check 배열을 만들어 Node(or 정점)을 방문했는지 check한다.

이제 갈 수 있는 경로의 수 구하기!

```js
function DFS(v) {
  if (v === n) {
    answer++;
    console.log(path);
  } else {
    for (let i = 1; i <= n; i++) {
      // v에서 i로 갈 수 있으냐!
      // i를 방문했는지
      if (graph[v][i] === 1 && ch[i] === 0) {
        ch[i] = 1; // 방문했다고 체크
        path.push(i);
        DFS(i);
        ch[i] = 0; // 되돌아갈때 방문한 곳 체크 풀어줌
        path.pop();
      }
    }
  }
}
ch[1] = 1;
DFS(1);
```

처음 시작하는(방문하는) 노드에 대해 방문 check 처리를 해줘야 다시 처음 Node로 가는 것을 방지할 수 있다.
for문을 돌리는데, 만약 1이라면 5까지 갈 수 있는 경우를 다 돌린다.
v는 시작하는 Node를, i는 가고자하는 Node를 뜻한다.
방문할 곳이 0인 것까지 확인해야 그쪽으로 갈 수 있다는 것을 의미한다.
방문하면 방문한 노드에 해당하는 check 배열에 1을 넣어준다.
그러면 다시 그 노드에 재방문하는 것을 막을 수 있다.

---

<br>

## 3. 경로탐색(DFS-인접리스트 : 노드개수가 많을 때 적용)

## 21.08.21

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

---

<br>

## 4. 미로탐색

## 21.08.22

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

---

<br>

## 5. 이진트리 넓이우선탐색(BFS)

## 21.08.23

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

---

<br>

## 6. 송아지 찾기(BFS)

## 21.08.24

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

---

<br>

## 7. 섬나라 아일랜드(DFS)

## 21.08.25

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

---

<br>

## 8. 섬나라 아일랜드(BFS : 넓이우선탐색)

## 21.08.26

### My solution 👩🏻‍💻

### Teacher's solution 👨‍🏫

---

<br>
