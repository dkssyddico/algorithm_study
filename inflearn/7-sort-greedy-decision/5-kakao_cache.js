function solution(n, arr) {
  let answer;
  let cache = Array.from({ length: 5 }, (v, i) => (v = 0));
  for (let i = 1; i < arr.length; i++) {
    cache.unshift(arr[i]);
    if (cache.length > 5) {
      cache.pop();
    }
  }
  return (answer = cache);
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(5, arr));

function tSolution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      // x가 있으면 hit
      if (x === answer[i]) pos = i;
    }
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    }
  });
  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(tSolution(5, arr2));

function tSolution2(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) pos = i;
    }
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

let arr3 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(tSolution2(5, arr3));
