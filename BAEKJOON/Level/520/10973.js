/**
 * 이전 순열
 * 오름차순: 뒤로 갈 수록 숫자가 커지는 경우
 * 내림차순: 뒤로 갈 수록 숫자가 작아지는 경우
 */

// let N = 5;
// let arr = [5, 4, 3, 2, 1];

const [N, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);
let brute = function (N, arr) {
  let tmp = [];
  let broke = -1;
  let min = 10001;
  // 뒤에서부터 내림차순이 끊기는 시점을 찾음
  for (let i = N - 1; i >= 0; i--) {
    if (min < arr[i]) {
      broke = i; // 내림차순이 끊기는 시점 찾기
      break;
    }
    tmp.push(arr[i]); // 끊기기 전 숫자 넣기
    min = arr[i]; // 내림차순 찾기 위해 숫자 계속 변경
  }
  if (broke == -1) return -1; // 숫자가 다 내림차순이면 -1 을 반환
  for (let i = 0; i < tmp.length; i++) {
    if (arr[broke] > tmp[i]) {
      let change = tmp.splice(i, 1, arr[broke]); // 저장한 수 중에서 끊긴 수보다 한 단계 작은 숫자 찾기
      arr[broke] = change.join(''); // 끊긴 시점의 수를 해당 수로 교체
      break;
    }
  }
  return arr.slice(0, broke + 1).join(' ') + ' ' + tmp.join(' ');
};

console.log(brute(N, arr));
