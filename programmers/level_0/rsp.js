/**
 * 가위바위보
 */

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}

// 내 풀이

function solution(rsp) {
  let cases = String(rsp).split('');
  return cases.map((v) => (v === '2' ? '0' : v === '5' ? '2' : '5')).join('');
}
