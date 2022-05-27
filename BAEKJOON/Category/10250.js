/**
 * 10250번: https://www.acmicpc.net/problem/10250
 * ACM 호텔
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = +input.shift();

for (let i = 0; i < testCase; i++) {
  const [height, width, guest] = input[i].split(' ').map(Number);

  let cnt = 0;
  for (let z = 0; z < width; z++) {
    for (let j = 0; j <= height - 1; j++) {
      cnt++;
      if (cnt === guest) {
        if (z + 1 < 10) {
          console.log(+`${j + 1}0${z + 1}`);
        } else {
          console.log(+`${j + 1}${z + 1}`);
        }
      }
    }
  }
}
