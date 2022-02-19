// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

let orders = [
  'push_back 1',
  'push_front 2',
  'front',
  'back',
  'size',
  'empty',
  'pop_front',
  'pop_back',
  'pop_front',
  'size',
  'empty',
  'pop_back',
  'push_front 3',
  'empty',
  'front',
];

// let count = 15;

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);

let deque = [];
let answer = '';
for (let i = 1; i < count + 1; i++) {
  let [order, num] = input[i].split(' ');
  if (order === 'push_front') deque.unshift(Number(num));
  if (order === 'push_back') deque.push(Number(num));
  if (order === 'pop_front') {
    if (deque.length) {
      answer += `${deque.shift()}\n`;
    } else {
      answer += `-1\n`;
    }
  }
  if (order === 'pop_back') {
    if (deque.length) {
      answer += `${deque.pop()}\n`;
    } else {
      answer += `-1\n`;
    }
  }
  if (order === 'size') {
    answer += `${deque.length}\n`;
  }
  if (order === 'front') {
    if (deque.length) {
      answer += `${deque[0]}\n`;
    } else {
      answer += `-1\n`;
    }
  }
  if (order === 'back') {
    if (deque.length) {
      answer += `${deque[deque.length - 1]}\n`;
    } else {
      answer += `-1\n`;
    }
  }
  if (order === 'empty') {
    if (deque.length) {
      answer += `0\n`;
    } else {
      answer += `1\n`;
    }
  }
}

console.log(answer);
