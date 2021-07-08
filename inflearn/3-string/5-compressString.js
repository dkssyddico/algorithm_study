function solution(str) {
  let answer = '';
  let count = 1;
  str = str + ' ';
  for (let i = 0; i < str.length - 1; i++) {
    console.log(i, i + 1); // 0, 1 1, 2 2, 3 이렇게 나옴
    if (str[i] === str[i + 1]) count++;
    else {
      answer += str[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSEE';

console.log(solution(str));
