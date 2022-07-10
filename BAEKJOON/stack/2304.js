/**
 * 창고 다각형: https://www.acmicpc.net/problem/2304
 * 마지막 기둥이 중요
 */

{
  //   const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // const n = parseInt(input[0]);

  const n = 7;
  let input = [
    [2, 4],
    [11, 4],
    [15, 8],
    [4, 6],
    [5, 3],
    [8, 10],
    [13, 6],
  ];

  const pillars = new Array(15).fill(0);
  let maxX;

  for (let i = 0; i < n; i++) {
    const [x, y] = input[i];
    pillars[x] = y;
    maxX = max(maxX, x);
  }

  const heights = new Array(maxX + 1).fill(0);

  for (let i = 1; i <= maxX; i++) {
    let leftMax = 0;

    for (let k = i - 1; k >= 1; k--) {
      leftMax = max(leftMax, pillars[k]);
    }

    let rightMax = 0;

    for (let k = i + 1; k <= maxX; k++) {
      rightMax = max(rightMax, pillars[k]);
    }

    const height = min(leftMax, rightMax);
    // console.log('h', height, 'pillars[i]', pillars[i], 'i', i);
    // 양 옆의 높이 중에 작은 것 height 원래 저장된 기둥이 pillars[i]
    // 원래 기둥이 더 크면 그걸로 저장
    if (height < pillars[i]) {
      heights[i] = pillars[i];
    } else {
      heights[i] = height;
    }
  }

  let answer = 0;

  for (let i = 1; i <= maxX; i++) {
    answer += heights[i];
  }

  console.log(answer);

  function max(a, b) {
    return a > b ? a : b;
  }

  function min(a, b) {
    return a < b ? a : b;
  }
}
{
  /**
   * 열심히 복잡하게 풀었는데 통과는 안됐다 ㅜㅜ
   * 풀면서 1부터 올라가는 것도 해야하고, 마지막에서 다 훓어야 된다고도 생각했는데 다른 사람들 풀이를 참고해보니 그게 맞는 풀이인듯하다.
   * 이게 마지막 기둥이 중간에 있는 큰 기둥보다 작아지는 경우도 있어서 그런듯.
   */
  const fs = require('fs');
  let [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  N = +N;
  input = input.map((i) => i.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

  console.log(input[input.length - 1][0]);

  let stack = [];

  let result = [];
  let max = 0;

  for (let i = 0; i <= input[input.length - 1][0]; i++) {
    let current = input.filter((ip) => {
      return ip[0] === i;
    })[0];
    if (current) {
      const [location, height] = current;
      if (stack.length === 0) {
        stack.push(height);
        result.push(height);
        max = max > height ? max : height;
      } else {
        // 더 큰 높이가 나타나면?
        if (stack[stack.length - 1] < height) {
          stack.pop();
          stack.push(height);
          result.push(height);
          max = max > height ? max : height;
        } else {
          // 새 높이가 이전 높이와 같으면
          result.push(stack[stack.length - 1]);
        }
      }
      // 마지막
      if (location === input[input.length - 1][0]) {
        if (max > height) {
          let prev = input.filter((ip) => ip[1] === max)[0];
          for (let j = i; j > prev[0]; j--) {
            result[j] = height;
          }
        }
      }
    } else {
      stack.length > 0 ? result.push(stack[stack.length - 1]) : result.push(0);
    }
  }

  console.log(result.reduce((a, b) => a + b, 0));
  // console.log([0, 0, 4, 4, 6, 6, 6, 6, 10, 8, 8, 8, 8, 8, 8, 8].reduce((a, b) => a + b));
}
