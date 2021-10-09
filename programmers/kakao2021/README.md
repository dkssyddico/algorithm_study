# 2021 카카오 채용연계형 인턴십

## 1. 숫자 문자열과 영단어

보자마자 정규식이 바로 떠오른 문제. 정규식 연습 안한지 진짜 오래됐다 ㅜㅜ.
정규식에서 () 이건 한 그룹을 만드는데 쓰이는 것.  
replace를 조합해서 쓰면 된다.

다른 사람 풀이 1

```js
function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}
```

숫자 단어에 해당하는 걸로 문제를 split해준다음, join으로 숫자를 연결..  
진짜 기발하다. 어떻게 이런 생각을 해냈지? 다 아는 메서드인데도 ㅜㅜ

다른 사람 풀이 2

```js
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}
```

replace를 연속해서 쓸 수 있구나. 내 코드가 길긴 길다 ㅜㅜ 코테에 문자열 문제도 심심찮게 나온다더니 긴장해야겠다!

### 참고블로그

- [참고1](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=psj9102&logNo=221003972741)
  - 정규식에서 여러 단어를 찾고, 여러 단어마다 바꿔야할 내용이 다를 때 어떻게 하면 좋은지 알아낸 블로그. 여길 참고해서 답을 썼다.

---

<br>
