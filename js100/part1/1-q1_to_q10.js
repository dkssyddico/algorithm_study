/**
 * 문제 1: 배열의 삭제
 * 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
 */

var nums = [100, 200, 300, 400, 500];

nums.splice(-2);

/**
 * 문제 2: 배열의 내장함수
 * <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
 */

// 입력
var arr = [200, 100, 300];
//pass
arr.splice(2, 0, 10000);
console.log(arr);

// 출력
// [200, 100, 10000, 300];

/**
  * 문제 3: 변수의 타입
  * 다음 출력 값으로 올바른 것은? 4
 
 var arr = [100, 200, 300];
 console.log(typeof(arr));
 
 1)  undefined
 2)  string
 3)  number
 4)  object
  */

/**
  * 문제 4: 변수의 타입 2 
  * 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은? 2
 
 1)  입력 : a = 1,   출력 : number
 
 2)  입력 : a = 2.22,   출력 : boolean
 
 3)  입력 : a = 'p',   출력 : string
 
 4)  입력 : a = [1, 2, 3],   출력 : object
  */

/**
  * 문제 5: for 문 계산
  * 다음 코드 출력값으로 알맞은 것은? 4번 16
 
 var a = 10;
 var b = 2;
 
 for(var i=1; i<5; i+=2){
     a += i;
 }
 
 console.log(a+b);
 
  */

/**
  * 문제 6: False
  * 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요. 2번 1
 
 1)  NaN
 2)  1
 3)  ""
 4)  0
 5)  undefined
  */

/**
  * 문제 7: 변수명
 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오. 3, 4번
 
 1)  age
 2)  Age
 3)  let
 4)  _age
 5)  1age
  */

/**
  * 문제 8: 객체의 키 이름 중복
 자바스크립트 객체를 다음과 같이 만들었다. 
 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. ) 84
 
 var d = {
     'height':180,
     'weight':78,
     'weight':84,
     'temperature':36,
     'eyesight':1
 };
 
 console.log(d['weight']);
  */

/**
 * 문제 9: concat을 활용한 출력방법
 * 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
 */

//  데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

//  출력
//  2019/04/26 11:34:27

/**
 * 문제 10: 별트리 만들기
 */

const n = 5;
let tree = '';

for (let i = 1; i <= n; i++) {
  let star = '';
  for (let j = 1; j <= n - i; j++) {
    star += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);
