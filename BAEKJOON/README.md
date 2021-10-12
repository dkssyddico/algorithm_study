# 백준

백준은 좀 특이한 방식으로 입력값을 받아와야 한다.

## 한 개의 숫자 or 문자열일때

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
```

문자열이면 굳이 Number 처리 안해줘도 된다.

## 두 개의 숫자 or 문자일 때

```js
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
```

아니면,

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  let input = line.split(' ');

  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
}).on('close', function () {
  process.exit();
});
```

## 입력값이 2개이상일 때 예시

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// input[0]가 테스트 케이스 수.
for (let i = 1; i <= input[0]; i++) {
  // input[1]부터가 진짜 수들
  let numbers = input[i].split(' ');

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
```

or

```js
// 여러 줄로 되있는거
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0].split(' ')[0]);
const X = Number(input[0].split(' ')[1]);

const A = input[1].split(' ');
```

입력값을 직접 보여주는 것도 아니고 콘솔로 찍어서 화면에 나오는 것도 아니라서 되게 불편하다.  
우선 로직을 짜서 입력값 추출해오는 방법을 보고 있긴 함.
