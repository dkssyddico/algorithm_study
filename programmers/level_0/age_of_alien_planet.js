/**
 * 외계행성의 나이
 * 나는 무의식적으로든 의식적으로든 for문을 너무 자주 쓰는 것 같다
 * 배열로 만들어서 해결하는 방법이 잇다는 걸 계속 remind하장.
 *
 * 문제의 포인트는 0~9까지의 알파벳만 이용한다는 것.
 *
 * 숫자를 문자열로 만드는 법
 * String.fromCharCode(아스키코드)
 */

{
  function solution(age) {
    let char = 'abcdefghij';
    return Array.from(age.toString())
      .map((t) => char[+t])
      .join('');
  }
}

{
  function solution(age) {
    return age
      .toString()
      .split('')
      .map((v) => 'abcdefghij'[v])
      .join('');
  }
}

{
  // 내 풀이
  function solution(age) {
    let answer = '';
    let arr = String(age).split('');
    for (let i = 0; i < arr.length; i++) {
      answer += String.fromCharCode(+arr[i] + 97);
    }
    return answer;
  }
}
