/**
 * 중복된 문자 제거
 */

function solution(my_string) {
  let arr = my_string.split('');
  let answer = [];
  arr.forEach((i) => !answer.includes(i) && answer.push(i));
  return answer.join('');
}

console.log(solution('We are the world'));

{
  // Set 쓰는 방법..
  function solution(my_string) {
    return [...new Set(my_string)].join('');
  }
}
