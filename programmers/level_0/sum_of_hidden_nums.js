function solution(my_string) {
  let answer = [];
  let arr = my_string.split('');
  let num = '';
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      num += arr[i];
    } else {
      answer.push(num);
      num = '';
    }
  }
  if (num) answer.push(num);
  return answer.map(Number).reduce((a, b) => a + b, 0);
}

// 다른 분 풀이
// 정규식으로 소문자를 다 공백으로 만들어줌

function solution1(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, ' ')
    .split(' ')
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}
console.log(solution1('zzz111'));
