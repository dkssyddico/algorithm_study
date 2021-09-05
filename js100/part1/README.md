# 코드 페스티발 JavaScript 100제 1부

> 틀린 문제, 헷갈린 문제, 나와 다른 풀이로 새롭게 알게 된 지식 적기.

## 21.09.01(01~10)

### 문제 7번: 변수명

모던자바스크립트 deep dive에 따르면

- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어, 달러 기호를 포함할 수 있다.
- 단, 식별자는 특수문자를 제외한 문자, 언더스코어, 달러 기호로 시작해야 한다. 숫자로 시작하는 것은 허용하지 않는다.
- 예약어는 식별자로 사용할 수 없다.

### 문제 9번: concat을 활용한 출력 방법

concat은 array에만 쓰는 method인줄 알았는데 string에서도 쓸 수 있다는 것을 오늘 처음 알게 되었다.
근데 문자열에 변수를 넣어 출력할 때는 concat보단 template literals를 쓰는게 더 가독성있지 않나 생각한다. 그래도 새로운 방법을 알게됐다는 것은 좋은 것!

### 문제 10번: 별트리 만들기

디버그 해보고 이해함. 오른쪽 공백도 만들어야된다고 생각했음..
공백을 만들고 별을 붙이면 되는 거 였음
for문은 아직도 조금 헷갈리는 것 같다 ㅜㅜ 변수, 조건문 만드는 것

---

<br/>

## 21.09.02(11~20)

### 문제 13번: 행성 찾기

나는 switch문을 통해 풀었는데, 해설에서는 배열에 행성들을 넣어놓고 특정 숫자 - 1 하면 답이 될 수 있게 함

### 문제 18번: 평균 점수 찾기

문자열로 숫자가 입력되었을 때 어떻게 하는지 문제였음;
문자열을 숫자로 어떻게 변형하는지, parseInt를 할 수 있는지를 물어본 문제같다.

### 문제 19번: 제곱을 구하자

Math.pow라는 함수를 처음 알았다.
Math.pow(base, exponent) = base^exponent
Math.pow()함수는 base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다. (mdn)

전체적으로 문제가 prompt로 입력을 받아서 그걸 split으로 쪼개 배열로 만들고, parseInt해 10진수 만들어주는 작업을 거침.

---

<br/>

## 21.09.03(11~20)

### 문제 21: set는 어떻게 만드나요? 3, 5번

set 객체는 중복되지 않는 유일한 값들의 집합이다.
set 객체는 Set 생성자 함수로 생성한다.
Set 생성자 함수에 인수를 전달하지 않으면 빈 객체가 생성된다. (출처: 모던 자바스크립트 deep dive)
그래서 답은

1.  var x = new Set('javascript');
2.  var x = new Set();

var x = new Set(range(5)); 는 range가 undefined이 뜬다.

### 문제 25: 원의 넓이

어차피 반지름길이 제곱 \* 3.14이기때문에 단순히 height \* height 로만 풀기보다 전날 새로 배운 Math.pow로 풀어봤다.

### 문제 26: 행성

나는 switch문을 이용했는데 여기 해설에는 아예 객체를 만들어서 품
key 값이 행성의 한글 이름 value는 행성의 영어 이름

### 문제 27: 객체 만들기

이런식으로 객체를 만들어본 적이 없었는데 다시 object의 key값, value 값 설정에 대해 되새길 수 있었다.

### 문제 30: 문자열 속 문자 찾기

정규식으로만 풀어야겠다는 고정관념에 사로잡힘 ㅜ
더 쉽게 풀 수 있는 코드가 있었다.
그래도 정규식 어떻게 쓰는지 한 번 봤다는 것에 의의를..

```js
console.log(sentence.indexOf('apple'));
```

**String.prototype.indexOf()**
indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. (mdn)
문자열을 넣어도 된다.

---

<br/>

## 21.09.04(21~30)

### 문제 31: 자바스크립트 자료형의 복잡도

배열 내장함수의 시간 복잡도가 O(1)이 아닌 것은
arr.slice(), arr.includes(5).
push나 pop은 배열의 맨 뒤에서 한 번만 처리해주면 되는 내장함수라서 O(1)이고,
위의 내장함수는 배열의 중간을 탐색하거나 잘라줘야해서 O(N)인 것 같다.

[풀이1]('https://minhanpark.github.io/today-i-learned/javascript-big-o/')
무언가를 실행하는데 필요한 단계수를 나타내는 게 Big O

[풀이2]('https://www.inflearn.com/questions/53298')
3번 arr.slice()에서 slice()는 지정한 start 부터 end까지 복사하여 새로운 객체를 만드는 함수이며, 입력 데이터 크기와 배열의 길이에 따라 처리 시간이 달라지기 때문에 3번의 시간복잡도는 O(n)이 됩니다.

5번 arr.includes(5)에서 includes()는 배열이 특정 값을 포함하는지 확인하는 함수입니다.
배열 arr에 5가 포함되어 있는지 검사할 때 arr[0]부터 검사하고 최악의 경우는 배열의 마지막 원소까지 검사해야 합니다. 따라서 5번의 시간복잡도 역시 O(n)이 됩니다.

- O(1) : 입력 데이터에 상관없이 일정한 시간의 알고리즘. (상수 형태)

- O(n) : 입력 데이터의 크기와 배열의 길이에 비례한 시간이 걸리는 알고리즘. (선형)

### 문제 34: sort 구현하기

원래 배열과 원래 배열을 sort 시킨 배열을 비교하는 방법도 있었다.

### 문제 35: Factory 함수 활용하기

보자마자 boiler-plate 의 hoc가 생각났다. 이 문제를 푸니 저것도 이해가 되는 것 같다.
처음에 return을 왜 two로 시켜줬는지 의아했는데 이것도 하나의 실행이라고 이해하면 되는 것 같다.
결국 one(2)(10)을 실행하는 것이라고 이해하니 쉽다.

### 문제 37: 반장선거

Map을 이용해 풀었음. 실제로 인프런에서도 정말 비슷한 문제가 있어서 참고했다.
공식 답안은 아래와 같다.

```js
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = '';

for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
```

Map과 비슷하게 object를 만드는 것 같다.

### 문제 38: 호준이의 아르바이트

답은 구했는데 parseInt 중복으로 쓰는 경우가 너무 많았다 ㅠ
공식 답안처럼 미리 map으로 정수화했으면 좋았을 거 같다.

```js
let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
}
```

어떻게 딱 3개의 점수만 남겨놓는지가 가장 큰 고민이었는데 공식 답안이 좋은 거 같아서 기록.

### 문제 39: 오타수정하기

공식 답안에서는 split, join으로 푸는 방법과 정규식 사용하는 방법이 있었다.
개인적으로 정규식으로 푸는 것이 훨 코드가 간단한 거 같다!

```js
//1. 함수 사용
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, 'q', 'e'));

//2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));
```

---

<br/>