# 프로그래머스 정렬 문제

## 1. H-index (21.09.07)

위키백과 설명을 보면,
어떤 연구자의 h 지수는 그 사람이 쓴 모든 논문 중 n회 이상 인용된 논문이 n개 이상일 때, 이 둘을 동시에 만족하는 n의 최대값으로 한다.

배열을 내림차순으로 정렬한다. 논문 인용횟수를 한차례씩 돌면서 n회 이상 인용된 논문이 n개보다 같거나 클 때를 구해준다.

### 참고

- [위키백과](https://ko.wikipedia.org/wiki/H_%EC%A7%80%EC%88%98)

- [[JS]프로그래머스 - H 인덱스](https://taesung1993.tistory.com/39)

- [프로그래머스 Level2 - H-Index (Javascript)](https://noirstar.tistory.com/371)

- [[프로그래머스] H-Index / Javascript](https://laycoder.tistory.com/211)

---

<br>

## 2. 가장 큰 수 (21.09.10)

sort를 얼마나 응용할 수 있는지, 그리고 문자열 sort 방식에 대해서 이해해보는 문제였다.
mdn에 나온 sort 설명을 보자.
arr.sort([compareFunction])
compareFunction:
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

firstEl
The first element for comparison.

secondEl
The second element for comparison.

If compareFunction(a, b) returns a value > than 0, sort b before a.
(리턴하는 값이 0보다 크다면 b, a가 된다.)
If compareFunction(a, b) returns a value < than 0, sort a before b.
(리턴하는 값이 0보다 작다면 a, b가 된다.)

단일 숫자로 sort를 하면 10, 6, 2 순으로 된다.
문제가 요구하는 식으로 6, 2, 10을 하려면 숫자를 문자열로 만들고,

```
sort((a, b) => b + a - (a + b))
```

이런식으로 소팅한다.
예를 들어 "106" - "610"은 음수이기 때문에 그대로 ["6", "10"]이 된다.
"210" - "102"는 양수이기 때문에 "2"가 먼저 와서 ["6", "2", "10"]이 된다.
이걸 join을 통해 문자열로 다시 만들어주면 된다.

그리고 answer 배열이 0으로만 이뤄진 경우를 방지하기 위해 "0"을 리턴하는 코드도 만든다.

그리고 숫자를 문자열로 바꿀 수 있는 방법이 String이나 toString()말고도 하나 더 있었다!
숫자로 된 변수 뒤에 "", ''를 붙여주면 된다. 많이 쓰는 방법이라는 데 처음 알았당

### 참고

- [(자바스크립트 알고리즘) 가장 큰 수 - kimyang-sun](https://kimyang-sun.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%88%98-kimyang-sun)

- [mdn sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- 숫자를 문자열로 바꾸는 방법이
  - [참고1](https://hianna.tistory.com/491)
  - [참고2](https://mine-it-record.tistory.com/330)
  - [참고3](https://itmining.tistory.com/71)

---

<br>
