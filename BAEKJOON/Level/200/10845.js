/**
 * 큐 문제
 * 각각 console.log를 해버리면 시간 초과가 나서 문자열로 답을 만들어줘야 함.
 */

// let orders = [
//   ['push', 1],
//   ['push', 2],
//   ['front'],
//   ['back'],
//   ['size'],
//   ['empty'],
//   ['pop'],
//   ['pop'],
//   ['pop'],
//   ['size'],
//   ['empty'],
//   ['pop'],
//   ['push', 3],
//   ['empty'],
//   ['front'],
// ];

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);

let answer = '';
let queue = [];

for (let i = 1; i < count + 1; i++) {
  let order = input[i].split(' ');
  if (order[0] === 'push') {
    queue.push(order[1]);
  } else if (order[0] === 'pop') {
    if (queue.length) answer += `${queue.shift()}\n`;
    else answer += `-1\n`;
  } else if (order[0] === 'size') {
    answer += `${queue.length}\n`;
  } else if (order[0] === 'front') {
    if (queue.length) answer += `${queue[0]}\n`;
    else answer += `-1\n`;
  } else if (order[0] === 'back') {
    if (queue.length) answer += `${queue[queue.length - 1]}\n`;
    else answer += `-1\n`;
  } else if (order[0] === 'empty') {
    answer += queue.length ? `0\n` : `1\n`;
  }
}

console.log(answer);
