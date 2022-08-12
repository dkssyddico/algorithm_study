/**
 * 1198 농구 경기: https://www.acmicpc.net/problem/1159
 * Map을 쓰는 방법을 생각했었는데 그냥 object로 푸는게 더 간단할 거 같다!
 */

// let total = 18;

// let players = [
//   'babic',
//   'keksic',
//   'boric',
//   'bukic',
//   'sarmic',
//   'balic',
//   'kruzic',
//   'hrenovkic',
//   'beslic',
//   'boksic',
//   'krafnic',
//   'pecivic',
//   'klavirkovic',
//   'kukumaric',
//   'sunkic',
//   'kolacic',
//   'kovacic',
//   'prijestolonasljednikovi',
// ];

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift();
input.sort();
let obj = {};
let result = '';

for (let i = 0; i < input.length; i++) {
  if (obj[input[i][0]]) {
    obj[input[i][0]]++;
  } else {
    obj[input[i][0]] = 1;
  }
}

for (let i in obj) {
  if (obj[i] >= 5) result += i;
}

console.log(result.length === 0 ? 'PREDAJA' : result);

{
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  input.shift();

  const fstLtrs = input.map((v) => v[0]);
  fstLtrs.sort();

  const table = fstLtrs.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1;
    else acc[cur]++;
    return acc;
  }, {});

  const ret = Object.entries(table)
    .filter(([k, v]) => v >= 5)
    .map((v) => v[0])
    .join('');
  console.log(ret ? ret : 'PREDAJA');
}
