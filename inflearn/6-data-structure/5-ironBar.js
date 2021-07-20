function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop();
      // 레이저 - 레이저 조각 누적
      if (s[i - 1] === '(') {
        answer += stack.length;
      } else {
        // 쇠막대기의 끝
        answer += 1;
      }
    }
  }
  return answer;
}

let s = '(((()(()()))(())()))(()())';

console.log(solution(s));
