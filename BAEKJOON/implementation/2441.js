/**
 * 별 찍기 4
 */

let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
// let input = 5;

let tree = '';
for (let i = input; i > 0; i--) {
  let star = '';
  // 0 1 2 3 4
  for (let k = 0; k < input - i; k++) {
    star += ' ';
  }
  for (let j = i; j > 0; j--) {
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);
