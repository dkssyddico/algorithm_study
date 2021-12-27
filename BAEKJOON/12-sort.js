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
      let currentIdx = i;
      for (let j = i + 1; j < nums.length; j++) {
        // 뒤에 있는 수(nums[j])가 더 크면 현재 인덱스를 j와 바꾼다.
        if (nums[j] < nums[currentIdx]) currentIdx = j;
      }
      [nums[i], nums[currentIdx]] = [nums[currentIdx], nums[i]];
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

{
  /**
   * 2751번 수 정렬하기 2
   * console.log로 출력하면 느려져서 최대 100만번 호출될 수 있다고 한다.
   * 그래서 문자열을 하나로 합쳐서 출력하는게 빠른 방법이라고 함!
   * 백준을 풀면서 몇번 봤던 이야기였는데 다음 문제부터는 join을 이용해 하나의 문자열로 출력할 수 있도록 노력해야겠다.
   * 출처: https://www.acmicpc.net/board/view/47265
   *
   * 다른 사람은 퀵 정렬으로 문제를 풀었다.
   * 퀵 정렬은 하나의 기준점(pivot)을 설정하고 기준점보다 이상인지 이하인지 비교해서 정렬하는 방법이다. 하나의 기준점으로 분류하고 그 나눠진 이하, 이상 그룹도 그 안에서 하나의 pivot을 정해서 이상 이하로 분류해주는 방법이다.
   * 퀵소트 방법 출처: https://dpsc615.tistory.com/138
   */
  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const cases = Number(input.shift());

  input = input.sort((a, b) => a - b);

  console.log(input.join('\n'));
}
