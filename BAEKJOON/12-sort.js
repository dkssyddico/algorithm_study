{
  /**
   * 2750번 수 정렬하기
   */

  {
    /**
     * 이걸로 시도했으나 안되서 sort로 풀어벎..
     */
    const fs = require('fs');
    let nums = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
    let cases = nums.shift();
    // let nums = [5, 2, 3, 4, 1];

    for (let i = 0; i < nums.length - 1; i++) {
      let currentidx = i;
      for (let j = i + 1; j < nums.length; j++) {
        // 뒤에 있는 수(nums[j])가 더 크면 현재 인덱스를 j와 바꾼다.
        if (nums[j] < nums[currentidx]) currentidx = j;
      }
      [nums[i], nums[currentidx]] = [nums[currentidx], nums[i]];
    }

    console.log(nums.join('\n'));
  }
  {
    // 내가 원하는 식이랑 가까운 것 같다. 이렇게 해야 통과하는 듯?
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

    const N = parseInt(input[0]);
    const data = [];

    for (let i = 1; i < N + 1; i++) {
      data.push(parseInt(input[i]));
    }

    for (let j = 0; j < data.length; j++) {
      for (let k = j + 1; k < data.length; k++) {
        if (data[j] > data[k]) {
          let temp = data[j];
          // 크기에 따라 둘의 데이터를 바꿔버림
          data[j] = data[k];
          data[k] = temp;
        }
      }
    }

    for (i = 0; i < data.length; i++) console.log(data[i]);
  }
}
