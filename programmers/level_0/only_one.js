/**
 * 한 번만 등장한 문자
 */

function solution(s) {
  let arr = s.split('');
  let answer = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }
  for (let i of map.keys()) {
    if (map.get(i) === 1) answer.push(i);
  }
  return answer.sort().join('');
}

console.log(solution('hello'));

{
  // 다른 분 풀이: 인덱스 이용

  function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
  }
}
