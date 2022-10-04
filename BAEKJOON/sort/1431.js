/**
 * 1431
 */

// 백준 풀이에서 가져온 것
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = '5\nABCD\n145C\nA\nA910\nZ321'.split('\n');

const solution = () => {
  const N = +input.shift();
  const arr = [...input];

  const sum = (str) => {
    return str.match(/[\d]/g)?.reduce((a, c) => a + +c, 0) || 0;
  };

  arr.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else if (a.length === b.length) {
      const aSum = sum(a),
        bSum = sum(b);
      if (aSum === bSum) {
        return a.localeCompare(b);
      } else return aSum - bSum;
    }
  });

  console.log(arr.join('\n'));
};

solution();
