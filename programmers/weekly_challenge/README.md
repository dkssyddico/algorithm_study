# 프로그래머스 weekly challenge

## 1주차 챌린지(21.09.25)

생각보다 문제가 쉬워서 놀랐다.
count에 따라 증가하는 price의 총합을 구하고, 그 합을 내가 가지고 있는 돈과 비교하는 문제가
다른 사람 풀이를 보니 가우스 풀이법으로 푸는 것이 제일 많은 좋아요를 받았다.

```js
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
```

가우스 방식은 count에서만 적용됨.  
양쪽 두 수를 더하고, 두 수 사이의 숫자 수 + 1을 곱하고 나누기 2 하는게 가우스 방식.  
여기서 보면 양쪽 두 수를 더함(count + 1), 왜냐면 1부터 시작하니까 카운트는 끝이라 1 + count.  
두 수 사이의 숫자수 + 1 = (4 - 1 + 1) = 4

삼항 연산자를 못떠올린게 약간 아쉬움..

### 참고 블로그

- [가우스 공식 이해를 위해 찾아보다 발견한 zerocho님 블로그](https://www.zerocho.com/category/Algorithm/post/5b79898d337215001b3a18eb)
- [[프로그래머스] 위클리 챌린지 > 1주차 - 자바스크립트](https://all-dev-kang.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9C%84%ED%81%B4%EB%A6%AC-%EC%B1%8C%EB%A6%B0%EC%A7%80-1%EC%A3%BC%EC%B0%A8-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)

---

<br/>
