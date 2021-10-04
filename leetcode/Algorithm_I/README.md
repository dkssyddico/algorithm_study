# LeetCode Algorithm I

## Day 1

### 704. Binary Search

이진 검색이란 데이터가 오름차순으로 정렬된 상태에서 특정 값을 찾는 알고리즘이다.
중간 값을 선택하여 찾는 값과 비교 후, 값이 작거나 크면 중간 값 이상 혹은 이하의 값은 모두 제외하고 또 새롭게 중간 값을 선택한다.  
처음에는 무조건 주어진 배열을 잘라야 한다고 생각했는데 splice나 slice해서 배열을 자르는 건 시간을 늘리는 일이었다.  
주어지는 배열에서 가장 왼쪽과 오른쪽 index를 지정해서 mid index를 만들고, mid 인덱스로 계속 값을 확인해나가면 되는 문제였다.

---

### 278. First Bad Version

역시 이진검색을 활용해서 푸는 문제.  
false가 나오면 bad version이 아니다. 그래서 범위를 더 높여줘야하기 때문에 mid + 1 이다.
true가 나오면 bad version인데, bad version에서 최소값을 찾아야 한다.  
그래서 right 값을 mid에서 -1 한 값으로 바꾸는 것이다.
따로 API 가 주어져서 LeetCode 에서 풀어야했음 ㅎ
이진 검색에선 계속 left, right, mid 변수를 만드는 것만 유의하면 될 것 같다!

---
