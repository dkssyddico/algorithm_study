/**
 * 겹치는 선분의 길이
 * 다시 봐야함!
 */

function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y); i < Math.max(x, y); i++) a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  return Object.values(visited).filter((v) => v > 1).length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
