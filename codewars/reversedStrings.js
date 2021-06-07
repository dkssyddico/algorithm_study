// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

let str = 'world';

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution(str));
