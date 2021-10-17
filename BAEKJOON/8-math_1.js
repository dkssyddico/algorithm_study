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
  // 다른 사람 풀이
  /**
   * 정상에 도착하면 미끄러지지 않고 즉시 끝나기 때문에 높이에서 미끄러지는 길이를 빼줘야 한다.
   * 굳이 미끄러질 때를 계산할 필요가 없기 때문이다.
   */
  {
  }
}

{
  // 2775번 부녀회장이 될거야
  // 메모이제이션 문제다.
  // 아파트 층과 호수만큼의 배열을 만들어준다음, 0층의 사람 수를 모두 넣어준다
  // 1 이상의 a층 b호의 사람 수는 a-1층 b호 사람 수 + a층 b-1호 사람수와 같다.
  // let floor = 1;
  // let room = 3;
  // let apartment = Array.from(Array(floor + 1), () => Array(room).fill(0));

  // // 맨 처음꺼는 무조건 1임.

  let nums = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

  const testCase = nums.shift();
  for (let i = 0; i < testCase; i++) {
    let floor = nums.shift();
    let room = nums.shift();
    let apartment = [];

    for (let a = 0; a <= floor; a++) {
      apartment.push([1]);
      for (let b = 1; b < room; b++) {
        if (a === 0) {
          apartment[a][b] = b + 1;
        } else {
          apartment[a][b] = apartment[a][b - 1] + apartment[a - 1][b];
        }
      }
    }

    console.log(apartment[floor][room - 1]);
  }
}

{
  // 2839번 설탕
  /**
   * 내가 생각했던 풀이가 다른 사람들과 달라서 당황했던 문제.
   * 우선 4가 -1로 나와야해서 1차 당황했다.
   * 나는 가장 큰 5로 먼저 나누고, 나머지값은 3으로 나눠서 Math.ceil하면 된다 생각했는데.
   * 다른 사람 풀이를 보니 무조건 5와 3으로 떨어져야 한다.
   * 18의 경우도 3이 하나 5가 세개다. 11의 경우 3이 2개 5가 하나다. (내 생각에서 5가 2개 3이 하나여야 한다.)
   * 문제 조건처럼 정확하게 N 킬로그램을 배달해야하는 조건 때문에 그런것 같다..
   * 1, 2, 4 이런거 다 안됨!
   * 무조건 5로 다 떨어지거나 3으로 빼고나서 5로 나눴을 때 해결이 되야한다.
   */
  let input = require('fs').readFileSync('/dev/stdin').toString();
  let count = 0;

  while (true) {
    if (input % 5 === 0) {
      console.log(input / 5 + count);
      break;
    }
    if (input < 0) {
      console.log(-1);
      break;
    }
    input -= 3;
    count++;
  }
}

{
  /**
   * 10757번 큰 수 A+B
   * 숫자가 2^53 - 1 이상일 때는 bigInt를 통해 처리해준다는 것을 처음 알게 되었다.
   * 그리고 bigInt로 처리된 숫자를 출력하고 싶을 때에는 toString()으로 처리해줘야 끝에 n이 나오지 않는다고 한다.
   * 노드에서 해봤을 땐 그냥 출력이 되서 했더니 역시나 함정ㅋㅋ
   */
  let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
  let a = BigInt(input[0]);
  let b = BigInt(input1);
  console.log((a + b).toString());
}
