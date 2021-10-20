/**
 * 하노이의 탑
 * 가장 큰 원반이 목적지의 맨 아래 놓여야 함
 * 이게 가능하려면 나머지 모든 원반이 다른 기둥에 있어야 함
 * 그런데 이게 가능하려면 또 그 나머지 원반들에서 가장 큰 원반이 목적지 맨 아래 있어야 함.
 * 점점 줄어드는 원반 수에 따라 가장 큰 원반이 도착해야할 목적지가 계속 변경되어야 한다고 생각해야 됨.
 * 내가 지금 움직이려는 것 아래로는 없다고 생각하면,
 * 하나를 한쪽에 놓으면 두개를 저쪽에 쌓을 수 있고, 두개가 저쪽에 쌓이면 3개를 이쪽에.
 * n개의 원반을 특정 기둥으로 옮기려면, 맨 아래를 제외한 원반들을 다른 기둥으로 옮기고, 맨 아래의 원반을 목적지 기둥으로 옮기고 다른 기둥에 옮겼던 원반들을 그 위에 얹는 거다.
 * 가운데 오른쪽 왔다갔다한다.
 * 원반 총 갯수가 홀수냐 짝수냐에 따라 시작할 때 맨 위 원반을 목표 기둥에 놓을 것인가 혹은 다른 기둥에 놓을 것인가가 결정됨
 */

let num = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = [];

function hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    hanoi(num - 1, other, from, to);
  }
}

hanoi(num, 1, 2, 3);
console.log(answer.length);
console.log(answer.map((item) => item.join(' ')).join('\n'));
