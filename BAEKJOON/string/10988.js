/**
 * 10988
 */

const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let reverse = input.split('').reverse().join('');

console.log(input === reverse ? 1 : 0);
