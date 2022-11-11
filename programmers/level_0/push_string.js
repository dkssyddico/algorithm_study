/**
 * 문자열 밀기
 */

function solution(A, B) {
  let answer = 0;
  let aArr = A.split('');
  let count = 0;
  if (A === B) return 0;
  for (let i = 0; i < aArr.length - 1; i++) {
    aArr.unshift(aArr.pop());
    count++;
    if (aArr.join('') === B) {
      answer = count;
      break;
    }
  }
  return answer ? answer : -1;
}

console.log(solution('apple', 'elppa'));

{
  // 다른 분 풀이: 어떻게 이런 생각을 할까 신기하다.
  let solution1 = (a, b) => {
    console.log(b + b);
    return (b + b).indexOf(a);
  };
  console.log(solution1('hello', 'ohell'));
}
