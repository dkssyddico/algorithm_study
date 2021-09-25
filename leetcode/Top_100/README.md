# LeetCode Problems

## Problems

- [LeetCode Problems](#leetcode-problems)
  - [Problems](#problems)
    - [Two Sum](#two-sum)
    - [Add Two Numbers](#add-two-numbers)
    - [longest substring without repeating characters](#longest-substring-without-repeating-characters)

<hr>
<br>

### Two Sum

(21.09.19)

가장 익숙하게 이중 for문 돌려서 풀기.
풀고나서 더 빠른 방법으로는 Map을 이용해 푸는 방법이 있었다.
target 숫자와 현재 num를 빼서 나머지 숫자를 찾는 방법이다.
Map에 아이템을 넣을 때는 순차적으로 들어간다.
for문을 통해 차례로 더 큰 수를 찾게되면 Map에는 작은 수가 들어가기 때문에 작은 수가 배열의 index에 맞춰서 Map에도 들어가게 된다.

---

<br>

### Add Two Numbers

(21.09.22)

---

<br>

### longest substring without repeating characters

(21.09.24)

생각보다 복잡하게 푼 문제.. 문자열 활용법에 대해 다시 생각해보는 계기가 되었다.
통과는 했지만 런타임 시간이 너무 길었음.
빈 배열에 일일이 넣어줬다가 배열을 초기화.. 잘 모르지만 메모리도 꽤 썼을 거 같다.
다른 사람 풀이를 보니 슬라이딩 윈도우로 푼 경우가 많았다.
슬라이딩 윈도우는 인프런 강의에서도 잠깐 봤는데 한 문제?여서 그렇게 기억을 못했나보다.
슬라이딩 윈도우는 창문이 움직이듯 배열에서 고정된 창문이 옆으로 슥슥 움직이는 듯한 개념이다.
가져온 풀이를 뜯어보면 카운터, 레프트, 라이트와 문자를 담을 수 있는 객체를 만든다.
right는 배열의 숫자를 탐색하려고 나아가는 창문이다.
그래서 배열의 length에 다다르면 갈 곳이 없어 멈춰야한다.
그리고 이제 right를 가지고 문자열의 글자를 차례로 빼고, 그 글자가 객체에 있는지 확인한다.
없으면 글자를 key로 하고, 1을 value로 넣어준다.
그리고 만약 right의 수를 가지고 빼낸 글자가 있을 경우 left를 움직여서 객체에 있는 가장 앞에 있는 key와 value를 없애준다. 왜냐하면 중복된 글자가 있을 경우 그 첫글자로 계속 움직이는 것은 의미가 없기 때문이다. 그리고 left도 탐색을 완료했기 때문에 1을 증가시켜준다.

최대값을 구하는데 `Math.max`는 정말 빠지지 않는구나.

---

<br>
