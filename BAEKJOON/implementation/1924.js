/**
 * 2007년: https://www.acmicpc.net/problem/1924
 * 첫째 줄에 빈 칸을 사이에 두고 x(1 ≤ x ≤ 12)와 y(1 ≤ y ≤ 31)이 주어진다. 참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.
 * 첫째 줄에 x월 y일이 무슨 요일인지에 따라 SUN, MON, TUE, WED, THU, FRI, SAT중 하나를 출력한다.
 */

const fs = require('fs');
let [month, day] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((num) => +num);
// const [month, day] = [3, 3];

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const thirtyOne = [1, 3, 5, 7, 8, 10, 12];
const thirty = [4, 6, 9, 11];
const twentyEight = 2;

let totalDay = 0;

for (let i = 1; i < month; i++) {
  if (thirtyOne.includes(i)) {
    totalDay += 31;
  } else if (thirty.includes(i)) {
    totalDay += 30;
  } else if (i === twentyEight) {
    totalDay += 28;
  }
}

totalDay += day;
console.log(days[totalDay % 7]);
