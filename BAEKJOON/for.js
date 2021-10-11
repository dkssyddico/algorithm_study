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
