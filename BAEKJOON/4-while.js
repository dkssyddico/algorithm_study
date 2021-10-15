{
  // 10952번 A + B - 5
  const fs = require('fs');
  // 여러 줄로 되있는거
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let i = 0;
  while (i <= input.length) {
    let sum = Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]);
    if (sum === 0) {
      break;
    } else {
      console.log(sum);
    }
    i++;
  }
}

{
  // 10951번 A + B - 4
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let i = 0;
  while (i < input.length - 1) {
    let sum = Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]);
    console.log(sum);
    i++;
  }
}

{
  // 1110번 더하기 사이클
  // % 를 활용하는 방법 익히기
  let input = Number(require('fs').readFileSync('/dev/stdin').toString());
  let target = input;
  let count = 0;
  let isNotSame = true;
  let sum = 0;
  while (isNotSame) {
    sum = Math.floor(input / 10) + (input % 10);
    input = (input % 10) * 10 + (sum % 10);
    count++;
    if (target === input) {
      console.log(count);
      isNotSame = false;
    }
  }
}
