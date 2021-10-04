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
  let l = 0; // starting index
  let r = nums.length - 1; // ending index

  while (l <= r) {
    let mid = Math.floor((l + r) / 2); // finds mid point between the left and right indexes
    if (nums[mid] === target) {
      // checks if the target is at the mid index returns mid index if so
      return mid;
    } else if (nums[mid] < target) {
      // we know the target is not at the current mid and now we know that the current mid is less than the target so we know that our target is either going to be not found or in the remaining half of the arr so we set the left index to the mid + 1 since we know its not at mid from our if statement above
      l = mid + 1;
    } else {
      // same idea as the nums[mid] < target but for the opposite. we know its not at mid and the current mid is greater than the target so we have to look in the lower half
      r = mid - 1;
    }
  }
  // return -1 since we went through the loop and didn't find the target
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

// 이진 검색 중간 자르기
