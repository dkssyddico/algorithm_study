function solution(nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let second = nums[j];
      if (first + second === target) {
        answer = [i, j];
      }
    }
  }
  return answer;
}

console.log(solution([2, 7, 11, 15], 9));
// console.log(solution([3, 2, 4], 6));
// console.log(solution([0, 4, 3, 0], 0));

// Map을 통해 풀기
function solution2(nums, target) {
  // Define a hashmap to store values, indices
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Define current number, current diff
    const num = nums[i];
    const diff = target - num;

    // If hashmap contains difference, return stored index and current index
    if (map.has(diff)) return [map.get(diff), i];

    // Store (key: value => number: index) in hashmap
    map.set(num, i);
    console.log(map);
  }
}

console.log(solution2([2, 7, 11, 15], 9));
