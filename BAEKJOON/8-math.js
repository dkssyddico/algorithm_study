{
  // 1712번 손익분기점
  // 고정비 생산비 판매가
  let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

  const fixedCost = input[0];
  const margin = input[2] - input[1];

  const count = Math.floor(fixedCost / margin) + 1;

  console.log(margin <= 0 ? -1 : count);
}

{
  // 2292번 벌집
  /**
   * 1에서 N으로 출발할 때 최소 몇번 이동하면 되는지 구하는 문제.
   * 6각형으로 돌고 있기 때문에, 육각형이 커질 때마다 나오는 마지막 수는 1, 7, 19, 37 ... 이고
   * 이 패턴은 등차 수열로 6, 12, 18 즉 6의 배수만큼 점점 커지고 있다.
   * 단계를 올라가는 카운트 변수를 하나 1로 할당해서 만든 후, 6의 배수를 start인 1에 더해주고 합을 구한다.
   * 카운트는 마지막 수를 넘을 때 까지 세야한다.
   */
  const x = Number(require('fs').readFileSync('/dev/stdin').toString());
  let start = 1;
  let count = 1;

  while (start < x) {
    start += 6 * count;
    count++;
  }

  console.log(count);
}

{
  // 2869번 달팽이는 올라가고 싶다
  // 내 풀이: 시간 초과.
  {
    let nums = require('fs').readFileSync('/dev/stdin').toString().split(' ');
    let start = 0;
    let up = nums[0];
    let down = nums[1];
    let goal = nums[2];
    let count = 0;

    while (start < goal) {
      count++;
      start += up;
      if (start === goal) {
        break;
      }
      start -= down;
    }

    console.log(count);
  }
}
