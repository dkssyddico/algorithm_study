/**
 * 별 찍기 3
 */

let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
// let input = 5;

let tree = '';
for (let i = 1; i <= input; i++) {
  let star = '';
  for (let k = 0; k <= input - i; k++) {
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);

{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim();

  for (let i = Number(input); i >= 1; i--) {
    console.log('*'.repeat(i));
  }
}
