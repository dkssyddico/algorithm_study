/**
 * 최빈값 구하기
 */

function solution(array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }
  let maxValue = 0;
  let answer = [];
  map.forEach((element, key) => {
    if (maxValue < element) {
      maxValue = element;
      answer = [];
      answer.push(key);
    } else if (maxValue === element) {
      answer.push(key);
    }
  });
  return answer.length === 1 ? answer[0] : -1;
}

console.log(solution([1, 2, 3, 3, 4, 4]));

// 다른 분 풀이
{
  const solution = (array) => {
    const counter = array.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: (acc[cur] || 0) + 1,
      }),
      {}
    );

    const items = Object.keys(counter)
      .map((key) => [Number(key), counter[key]])
      .sort((a, b) => b[1] - a[1]);

    if (items[0][1] === items?.[1]?.[1]) {
      return -1;
    }

    return items[0][0];
  };
}
