/**
 * 삼각형의 완성조건 2
 */

function solution1(sides) {
  const min = Math.min(...sides);
  const max1 = Math.max(...sides);
  const max2 = min + max1 - 1;
  return max2 - (max1 - min);
}

console.log(solution1([3, 6]));
