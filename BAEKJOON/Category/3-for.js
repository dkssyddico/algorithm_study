{
  // 2739 구구단
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');
  let num = Number(input);
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

{
  // 10950 A + B - 3
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

  // input[0]가 테스트 케이스 수.
  for (let i = 1; i <= input[0]; i++) {
    // input[1]부터가 진짜 수들
    let numbers = input[i].split(' ');

    console.log(Number(numbers[0]) + Number(numbers[1]));
  }
}

{
  // 8393 합
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');
  let num = Number(input);
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}

{
  // 15552번 빠른 A + B
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let answer = '';
  rl.on('line', (line) => {
    const input = line.split(' ');

    if (input.length === 2) {
      const A = parseInt(input[0]);
      const B = parseInt(input[1]);
      answer += A + B + '\n';
    }
  }).on('close', () => {
    console.log(answer);
    process.exit();
  });
}

{
  // 2741번 N 찍기
  let input = Number(require('fs').readFileSync('/dev/stdin').toString());

  let answer = '';

  for (let i = 1; i <= input; i++) {
    answer += i + '\n';
  }

  console.log(answer);
}

{
  // 2742 기찍 N
  let input = Number(require('fs').readFileSync('/dev/stdin').toString());

  let answer = '';

  for (let i = input; i > 0; i--) {
    answer += i + '\n';
  }

  console.log(answer);
}

{
  // 11021번 A + B - 7
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

  for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');

    console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
  }
}

{
  // 11022번 A + B - 8
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

  for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');

    console.log(
      `Case #${i}: ${numbers[0]} + ${numbers[1]} = ${Number(numbers[0]) + Number(numbers[1])}`
    );
  }
}

{
  // 2438번 별 찍기
  // 내 풀이
  let input = Number(require('fs').readFileSync('/dev/stdin').toString());

  let tree = '';
  for (let i = 1; i <= input; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '*';
    }
    tree += star + '\n';
  }

  console.log(tree);
  // 다른 사람 풀이
  {
    var fs = require('fs');
    var input = fs.readFileSync('/dev/stdin').toString().split('\n');

    var N = Number(input[0]);
    var A = '';

    for (var i = 1; i <= N; i++) {
      A += '*';

      console.log(A);
    }
  }
}

{
  // 2439번 별 찍기 - 2
  let input = Number(require('fs').readFileSync('/dev/stdin').toString());

  let tree = '';
  for (let i = 1; i <= input; i++) {
    let star = '';
    // 4, 3, 2, 1 이렇게 만들어주는 방법.
    for (let j = 1; j <= input - i; j++) {
      star += ' ';
    }
    for (let k = 1; k <= i; k++) {
      star += '*';
    }
    tree += star + '\n';
  }

  console.log(tree);
}

{
  // 10871 X보다 작은 수
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let inputs = [];
  inputs = input[0].split(' ');
  // console.log(inputs);  //--> [ '10', '5' ]

  let total = Number(inputs[0]);
  let limit = Number(inputs[1]);

  let numbers = [];
  numbers = input[1].split(' ');
  // console.log(numbers);  //-->  [ '1', '10', '4', '9', '2', '3', '8', '5', '7', '6' ]

  let answer = '';

  for (let i = 0; i < total; i++) {
    if (Number(numbers[i]) < limit) {
      answer += numbers[i] + ' ';
    }
  }

  console.log(answer);
  {
    const fs = require('fs');
    // 여러 줄로 되있는거
    const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = Number(input[0].split(' ')[0]);
    const X = Number(input[0].split(' ')[1]);

    const A = input[1].split(' ');
  }
}
