/**
 * 가까운 수
 */

function solution(array, n) {
  const minDiff = Math.min(...array.map((a) => Math.abs(a - n)));
  return array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === minDiff);
}

{
  // 틀린 내 풀이
  function solution(array, n) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (Math.abs(min) >= Math.abs(array[i] - n)) {
        min = array[i] - 20;
      }
    }
    return n + min;
  }
}
