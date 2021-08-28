// 철수는 학교에 가는데 개울을 만났습니다.
// 개울은 N개의 돌로 다리를 만들어 놓았습니다.
// 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다.
// 철수가 개울을 건너는 방법은 몇 가지일까요?

function solution(stairs) {
  let answer = 0;
  let dy = Array.from({ length: stairs + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  console.log(dy.length);
  // 2까지는 초기화 해준다.
  for (let i = 3; i <= stairs + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  console.log(dy);
  answer = dy[stairs + 1];
  return answer;
}

console.log(solution(7));
