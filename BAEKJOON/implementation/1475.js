/**
 * 1475 방번호
 * 다솜이는 은진이의 옆집에 새로 이사왔다. 다솜이는 자기 방 번호를 예쁜 플라스틱 숫자로 문에 붙이려고 한다.
 * 다솜이의 옆집에서는 플라스틱 숫자를 한 세트로 판다. 한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최솟값을 출력하시오. (6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// let nums = '6677'.split('').map(Number);
// console.log(nums);

let nums = input.split('').map(Number);

let check = Array(10).fill(0);

nums.forEach((num) => {
  if (num === 6) {
    if (check[num] > check[9]) check[9]++;
    else check[num]++;
  } else if (num === 9) {
    if (check[num] > check[6]) check[6]++;
    else check[num]++;
  } else check[num]++;
});

console.log(Math.max(...check));

{
  // 다른 사람 풀이: 6와 9가 있을 경우에 더해서 짝수인지 홀수인지 확인하고 2로 나눈다. 짝수면 2로 나눈 그대로, 홀수면 1세트 더 필요하다는 것
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString();

  let array = new Array(10).fill(0);

  for (let i of input) {
    array[i] += 1;
  }

  array[6] =
    (array[6] + array[9]) % 2 === 0
      ? (array[6] + array[9]) / 2
      : Math.floor((array[6] + array[9]) / 2) + 1;
  array[9] = 0;

  console.log(Math.max(...array));
}
