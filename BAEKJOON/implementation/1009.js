/**
 * 1009 분산처리: https://www.acmicpc.net/problem/1009
 * 숫자 범위가 너무 커지는 것에 대해 주의!
 */

let input = ['9 635'];

{
  // 풀이 참고 https://gurtn.tistory.com/97
  // b를 모두 돌아서 시간이 오래 걸림
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  input.shift();
  const result = input.map((v) => {
    const [a, b] = v.split(' ');

    let pow = 1;

    for (let j = 0; j < b; j++) {
      pow = (pow * a) % 10;
    }

    return pow === 0 ? 10 : pow;
  });

  console.log(result.join('\n'));
}

{
  // https://codingsalon.tistory.com/33
  // 시간이 상대적으로 정말 빠름
  // 제곱했을 때 패턴이 4개까지 반복되는 것을 이용한 것
  // 수를 줄이는 게 시간 절약에 굉장한 도움이 됨
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const testCase = parseInt(input.shift());
  for (let i = 0; i < testCase; i++) {
    let [a, b] = input[i].split(' ').map((x) => parseInt(x));
    res = a % 10 === 0 ? 10 : a % 10;
    b = b % 4 === 0 ? 4 : b % 4;
    for (let i = 2; i <= b; i++) {
      res = (res * a) % 10;
      res = res === 0 ? 10 : res;
    }
    console.log(res);
  }
}
