function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b);
  let first, second, twoSum, result;
  for (let i = 0; i < arr.length - 1; i++) {
    first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      second = arr[j];
      twoSum = first + second;
      result = sum - twoSum;
      if (result === 100) {
        let firstDelete = arr.indexOf(first);
        arr.splice(firstDelete, 1);
        let secondDelete = arr.indexOf(second);
        arr.splice(secondDelete, 1);
      }
    }
  }
  return answer;
}

function TSolution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
console.log(TSolution(arr));
