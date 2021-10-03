/**
 * 이진검색
 * 문제에서 원하는 것 index값을 찾아라. 찾았을 때 없으면 -1 을 리턴해라
 * 시작 복잡도는 O(log N)
 * 배열을 반으로 나눈다. half 인덱스의 숫자를 비교하고 target과 비교해 배열을 자른다.
 * 변수가 세개 필요함. 가장 작은 인덱스, 중간 인덱스, 가장 높은 인덱스
 * target이 nums[half]보다 크면
 * 1. nums[half]이하부터 0번 인덱스까지 배열을 자른다.
 * 2. low는 half가 된다
 * 3. high는 여전히 nums 배열의 마지막 인덱스이다.
 * 4. half = (low + high) / 2
 * target이 nums[half]보다 작으면
 * 1. nums[half]부터 마지막 인덱스까지 배열을 자른다.
 * 2. low는 여전히 0번 인덱스이다
 * 3. high는 half 값으로 재할당한다.
 * 4. half = (low + high) / 2
 * while문이 계속 도는 기준은 어떻게?
 * */

const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

// 이진 검색 중간 자르기
