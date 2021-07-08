function solution(str) {
  let answer = 'YES';
  // 알파벳만 남기기: a-z가 아닌 것들은 ''으로 바꿔라.
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  let reversedStr = str.split('').reverse().join('');
  console.log(reversedStr);
  if (str.split('').reverse().join('') !== str) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution(str));
