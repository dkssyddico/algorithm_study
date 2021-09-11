// 가장 큰 수

function solution(arr) {
  let answer = '';
  answer = arr
    .map((i) => String(i))
    .sort((a, b) => b + a - (a + b))
    .join('');
  return answer[0] === '0' ? '0' : answer;
}

let arr = [0, 0, 0];

console.log(solution(arr));
