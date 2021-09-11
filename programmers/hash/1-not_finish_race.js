// 완주하지 못한 선수

function solution(participant, completion) {
  let answer = '';
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return (answer = participant[i]);
    }
  }
  return answer;
}

let p = ['leo', 'kiki', 'eden'];
let c = ['eden', 'kiki'];

console.log(solution(p, c));
//
let p1 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
let c1 = ['josipa', 'filipa', 'marina', 'nikola'];

console.log(solution(p1, c1));
//
let p2 = ['mislav', 'stanko', 'mislav', 'ana'];
let c2 = ['stanko', 'ana', 'mislav'];

console.log(solution(p2, c2));

function solution2(p, c) {
  let answer = '';
  const map = new Map();
  for (let i = 0; i < p.length; i++) {
    let a = p[i];
    let b = c[i];
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
  for (let [key, value] of map) {
    if (value > 0) return (answer = key);
  }
  return answer;
}

console.log(solution2(p, c));
console.log(solution2(p1, c1));
console.log(solution2(p2, c2));
