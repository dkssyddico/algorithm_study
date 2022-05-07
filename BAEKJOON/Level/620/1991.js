/**
 * 트리 순회
 * https://www.acmicpc.net/problem/1991
 * 이진 트리는 왼쪽 오른쪽으로만 나뉠 수 밖에 없다.
 */

// const NUM = 7;

// const inputs = [
//   ['A', 'B', 'C'],
//   ['B', 'D', '.'],
//   ['C', 'E', 'F'],
//   ['E', '.', '.'],
//   ['F', '.', 'G'],
//   ['D', '.', '.'],
//   ['G', '.', '.'],
// ];

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

const tree = {};
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

let result = '';

// 전위순회 루트 왼쪽 오른쪽
function preOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  result += node;
  preOrder(left);
  preOrder(right);
}
//  중위순회 왼쪽 루트 오른쪽
function inOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  result += node;
  inOrder(right);
}

// 후위순회 왼쪽 오른쪽 루트
function postOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);
