# 프로그래머스 DFS, BFS 문제

## 1. 타겟넘버 (21.09.30)

DFS를 이용해서 풀면 된다는 거까지 밝힌 것 좋았는데, 구현을 하면서 조금 헤맸다 ㅜㅜ
지난 DFS 풀이들 보면서 for문을 써야된다 생각했는데,
DFS 함수 내부에서 x가 일정 숫자가 되면 잡아주면 되니까 굳이 for문을 쓸 필요가 없었다.
그래도 DFS에 index, sum 이라는 parameters를 만든 점,
그리고 반복해야할게 +, - 두 가지 경우이므로, DFS(x+1, sum + arr[x]), DFS(x+1, sum - arr[x]) 요런거까지 도출해낸 것은 칭찬!!

### 참고 블로그

- [참고](https://kyoung-jnn.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8JavaScript-%ED%83%80%EC%BC%93-%EB%84%98%EB%B2%84-DFS)

---

<br>
