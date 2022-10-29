/**
 * 문자열 정렬하기(1)
 */

function solution(my_string) {
  let splitArr = my_string
    .split('')
    .filter((i) => Number(i) >= 0)
    .map(Number)
    .sort((a, b) => a - b, 0);
  return splitArr;
}

console.log(solution('hi12392'));

{
  // 다른 사람 풀이

  function solution(my_string) {
    return my_string
      .match(/\d/g)
      .sort((a, b) => a - b)
      .map((n) => Number(n));
  }
}
