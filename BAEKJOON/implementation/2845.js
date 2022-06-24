/**
 * 2845: https://www.acmicpc.net/problem/2845
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [people, width] = input[0].split(' ').map(Number);
const news = input[1].split(' ').map(Number);
const result = [];

news.forEach((i) => result.push(i - people * width));

console.log(result.join(' '));
