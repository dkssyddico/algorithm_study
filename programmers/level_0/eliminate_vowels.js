/**
 * 모음 제거
 */

function solution(my_string) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let splitArr = my_string.split('');
  return splitArr.filter((i) => !vowel.includes(i)).join('');
}

console.log(solution('nice to meet you'));

{
  // 정규식 이용하기
  function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
  }
}
