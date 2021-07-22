function solution(n, str) {
  let answer = 'YES';
  let queueStr = Array.from(str);
  let queueN = Array.from(n);

  while (queueStr.length) {
    let x = queueStr.shift();
    for (let i = 0; i < n.length; i++) {
      if (x === n[i] && x === queueN[0]) {
        queueN.shift();
        break;
      }
    }
  }
  if (queueN.length !== 0) return 'NO';

  return answer;
}

let n = 'CBA';
let str = 'CBDGE'; //CBDAGE

console.log(solution(n, str));

function tSolution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    if (queue.includes(x)) {
      // 맨 앞 순서에 있는 것과 다르면 잘 못 설계한 것이다.
      if (x !== queue.shift()) return 'NO';
    }
  }
  // 과목이 아예 없었을 경우 파악
  if (queue.length > 0) return 'NO';
  return answer;
}

console.log(tSolution(n, str));
