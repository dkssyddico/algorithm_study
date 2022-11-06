/**
 * 직사각형의 넓이
 */

function solution(dots) {
  let xs = dots.map((i) => i[0]);
  let ys = dots.map((i) => i[1]);
  let width = Math.max(...xs) - Math.min(...xs);
  let height = Math.max(...ys) - Math.min(...ys);
  return width * height;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
