# 프로그래머스 DFS, BFS 문제

## 1. 타겟넘버 (22.01.13)

DFS를 이용해서 풀면 된다는 거까지 밝힌 것 좋았는데, 구현을 하면서 조금 헤맸다 ㅜㅜ
지난 DFS 풀이들 보면서 for문을 써야된다 생각했는데,
DFS 함수 내부에서 x가 일정 숫자가 되면 잡아주면 되니까 굳이 for문을 쓸 필요가 없었다.
그래도 DFS에 index, sum 이라는 parameters를 만든 점,
그리고 반복해야할게 +, - 두 가지 경우이므로, DFS(x+1, sum + arr[x]), DFS(x+1, sum - arr[x]) 요런거까지 도출해낸 것은 칭찬!!

### 참고 블로그

- [참고](https://kyoung-jnn.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8JavaScript-%ED%83%80%EC%BC%93-%EB%84%98%EB%B2%84-DFS)

---

<br>

## 2. 네트워크 (22.01.14)

네트워크의 이어짐 여부를 어떻게 알까. 차례대로 돌아가면서 DFS를 호출하고 visited라는 배열로 방문여부를 체크해주면서 판별한다. 전에 visited가 체크되지 않았다면 방문한 적이 없으므로 그게 새 네트워크가 된다.

### 참고 블로그

- [참고](https://velog.io/@ypyp66/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)

---

<br>

## 3. 단어 변환 (22.01.15)

단어마다 다른 부분이 하나만 있는지 살펴보고, 하나만 있으면 방문한 거로 간주하고 풀면되는데..
너무 어렵게 생각했다 ㅜㅜ 이것도 다른 사람 풀이에 의존..

### 참고 블로그

- [참고](https://velog.io/@ypyp66/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)

---

<br>
