function solution(s) {
  let answer = 0;
  let arr = s.split(' ');
  let last = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'Z') {
      answer -= last[last.length - 1];
      last.pop();
    } else {
      last.push(Number(arr[i]));
      answer += Number(arr[i]);
    }
  }
  return answer;
}

console.log(solution('1 2 3 Z Z'));

{
  // 다른 사람 풀이
  function solution(s) {
    s = s.split(' ');
    let arr = [];
    for (let v of s) v === 'Z' ? (arr.length ? arr.pop() : '') : arr.push(v);
    return arr.reduce((a, v) => a + +v, 0);
  }
}

{
  function solution(s) {
    const stack = [];

    s.split(' ').forEach((target) => {
      if (target === 'Z') stack.pop();
      else stack.push(+target);
    });

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
  }
}
