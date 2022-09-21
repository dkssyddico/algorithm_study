/**
 * 좌표 압축: https://www.acmicpc.net/problem/18870
 */

{
  /**
   * 오름차순으로 sort를 함
   * set으로 중복을 제거해주고 map을 통해 해당 숫자가 몇번째로 큰지 저장해줌
   * 마지막으로 원래 숫자들을 돌면서 map에 저장된 순번을 정답 문자열에 더해줌.
   */
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  const N = +input.shift();

  const setArr = input[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const set = new Set(setArr);
  const map = new Map();

  [...set].forEach((item, index) => {
    map.set(item, index);
  });

  let answer = '';
  input[0].split(' ').forEach((item, index) => {
    answer += map.get(+item) + ' ';
  });

  console.log(answer);
}

{
  // 시간 초과 당연히 시간 초과 날 수 밖에 ..
  const fs = require('fs');

  let [N, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  input = input.split(' ').map(Number);

  let result = Array(input.length).fill(0);

  for (let i = 0; i < input.length; i++) {
    let x = input[i];
    for (let j = 0; j < input.length; j++) {
      if (x > input[j]) result[i]++;
    }
  }

  console.log(result.join(' '));
}
