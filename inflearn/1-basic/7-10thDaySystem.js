let arr = [25, 23, 11, 47, 53, 17, 33];

function solution(day, arr) {
  let answer;
  const newArr = arr.filter((item) => String(item).split('').includes(String(day)));
  answer = newArr.length;
  return answer;
}

console.log(solution(3, arr));

function TSolution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}

console.log(TSolution(3, arr));
