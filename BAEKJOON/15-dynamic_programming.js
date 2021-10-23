/**
 * 1003번 피보나치 함수
 * 0, 1이 몇번 나왔는지 세는 함수
 * 찾아보니 N의 0의 개수는 N-1의 1의 호출 개수와 같다
 * 1이 나와야 0도 나올 수 있어서 그런 듯
 */

let nums = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let cases = nums.shift();

for (let i = 0; i < cases; i++) {
  let num = nums[i];
  // 0일때 f(0)은 1번, f(1)은 0번, 1일 때, .. 2일 때.. 합쳐주기. 그럼 새로 계산안해도됨
  let fibonacci = [
    [1, 0],
    [0, 1],
  ];
  for (let j = 2; j <= num; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }
  console.log(fibonacci[num].join(' '));
}
