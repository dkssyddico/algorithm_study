/**
 * 특정 문자 제거하기
 *
 * 좋은 풀이들 저장용
 */

{
  // 보면 아~ 하는 데 실제로 쓰려면 떠오르지 않는 그런 느낌ㅎㅎ
  function solution(my_string, letter) {
    const answer = my_string.split(letter).join('');
    return answer;
  }
}

{
  function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
  }
}

{
  // 필터해주기
  function solution(my_string, letter) {
    return my_string
      .split('')
      .filter((v) => v !== letter)
      .join('');
  }
}
