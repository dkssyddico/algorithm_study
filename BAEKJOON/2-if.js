{
  // 1330 두 수 비교하기
  var fs = require('fs');
  var input = fs.readFileSync('/dev/stdin').toString().split(' ');
  var a = parseInt(input[0]);
  var b = parseInt(input[1]);

  if (a > b) {
    console.log('>');
  } else if (a === b) {
    console.log('==');
  } else {
    console.log('<');
  }
}

{
  // 9498번
  // 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
  if (input >= 90 && input <= 100) {
    console.log('A');
  } else if (input >= 80 && input <= 89) {
    console.log('B');
  } else if (input >= 70 && input <= 79) {
    console.log('C');
  } else if (input >= 60 && input <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}

{
  // 2753번 윤년
  // 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
  // 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
  // 예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let num = Number(input);

  if (num >= 90 && num <= 100) {
    console.log('A');
  } else if (num >= 80 && num <= 89) {
    console.log('B');
  } else if (num >= 70 && num <= 79) {
    console.log('C');
  } else if (num >= 60 && num <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}

{
  // 14861 사분면 고르기
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input.push(line);
  }).on('close', function () {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > 0 && num2 > 0) {
      console.log(1);
    } else if (num1 < 0 && num2 > 0) {
      console.log(2);
    } else if (num1 < 0 && num2 < 0) {
      console.log(3);
    } else {
      console.log(4);
    }

    process.exit();
  });
}

{
  // 2884 알람 시계
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

    if (num2 - 45 < 0) {
      num2 = num2 - 45 + 60;
      num1--;
      if (num1 < 0) {
        num1 = num1 + 24;
      }
    } else {
      num2 -= 45;
    }

    console.log(num1 + ' ' + num2);
  }).on('close', function () {
    process.exit();
  });
}
