function solution(number, k) {
  let answer = '';
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    let el = number[i];
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);
  }
  stack.splice(stack.length - k, k);
  answer = stack.join('');
  return answer;
}

console.log(solution('1924', 2));

// // 맨 앞자리 수에서 제일 큰 수 찾기
// let firstMax = Math.max(...number.split('').slice(0, -(k - 1)));
// for (let i = number.indexOf(firstMax) + 1; i < number.length; i++) {
//   console.log(number[i]);
// }
