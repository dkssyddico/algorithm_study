/**
 * 인덱스 바꾸기
 */

function solution(my_string, num1, num2) {
  let arr = my_string.split('');
  return arr.map((v, i) => (i === num2 ? arr[num1] : i === num1 ? arr[num2] : v)).join('');
}

console.log(solution('hello', 1, 2));

{
  // 원래 이렇게 풀고 싶었는데 ㅠㅠ 기억해놓기
  function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
  }

  console.log(solution('adidas', 1, 2));
}
