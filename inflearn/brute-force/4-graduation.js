function solution(budget, arr) {
  let answer = 0,
    length = arr.length;
  let sortedArr = arr.sort((a, b) => a[0] - b[0]);
  sortedArr[length - 1][0] = sortedArr[length - 1][0] / 2;
  sortedArr = sortedArr.sort((a, b) => a[0] - b[0]);
  let sumArr = [];
  for (let x of sortedArr) {
    let count = 0;
    let sum = x.reduce((p, c) => p + c, 0);
    sumArr.push(sum);
  }
  sumArr.sort((a, b) => a - b);
  let count = 0;
  for (let y = 0; y < length; y++) {
    count += sumArr[y];
    if (count <= budget) {
      answer = y + 1;
    }
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

// console.log(solution(28, arr));

function tSolution(budget, product) {
  let answer = 0,
    n = product.length;
  // 총 비용으로 sort
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = budget - (product[i][0] / 2 + product[i][1]);
    let count = 1;
    for (let j = 0; j < n; j++) {
      // 사려고 하는 물건의 가격이 남은 돈보다 크니까 break
      if (j !== i && product[j][0] + product[j][1] > money) {
        break;
      }
      if (j !== i && product[j][0] + product[j][1] <= money) {
        // 같은 물건은 사면 안되고 남은 예산보다는 작거나 같아야 함
        // 사니까 예산에서 빼줘야함
        money -= product[j][0] + product[j][1];
        count += 1;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

console.log(tSolution(28, arr));
