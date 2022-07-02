// 같은 게 몇개 있는지 찾는다. 같은 수 쌍을 구해야함
// DP로 구해야할 거 같음. 누적 합계로.. 1 2 3 잇으면 1 빼는 경우도 있어서.. 흠
// const N = 3;
// const A = [1, 4, 5];
// const B = [1, 5, 4];

// let same = 0;

// let ADp = Array(N).fill(0);
// let BDp = Array(N).fill(0);
// ADp[0] = A[0];
// BDp[0] = B[0];

// for (let i = 0; i < N; i++) {
//   if (A[i] === B[i]) same++;
// }

// for (let i = 1; i < N; i++) {
//   ADp[i] = A[i] + ADp[i - 1];
//   BDp[i] = B[i] + BDp[i - 1];
//   if (ADp[i] === BDp[i]) same++;
// }

// console.log(same);

{
  // const fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  // let N = +input[0];
  // let A = input[1].split(' ').map(Number);
  // let B = input[2].split(' ').map(Number);

  const N = 4;
  const A = [1, 4, 5, 3];
  const B = [1, 5, 4, 4];
  let output = [];

  let same = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] === B[i]) same++;
  }
  // 누적시켜야함
  // 처음에 같다. 쌍을 넣음
  // 다음꺼까지 더해본다. 쌓아보면서 output에 넣음 2+3 = 3+2 이런 경우

  let aSum = 0;
  let bSum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let b = B[j];
      bSum += b;
      aSum += A[j];
      if (aSum === bSum) {
        output.push([i, j]);
      } else {
        aSum = 0;
        bSum = 0;
        break;
      }
    }
  }

  console.log(output);
  console.log(same + output.length);
}
