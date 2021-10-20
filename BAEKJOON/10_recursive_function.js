{
  // 10872번 팩토리얼
  // 재귀함수하면 기본으로 나오는 팩토리얼
  {
    // 인프런 풀이
    function tSolution(n) {
      let answer;
      function DFS(n) {
        if (n === 1) return 1;
        else return n * DFS(n - 1);
      }
      answer = DFS(n);
      return answer;
    }

    console.log(tSolution(5));
  }
  {
    // 이번 풀이
    let num = Number(require('fs').readFileSync('/dev/stdin').toString());

    function factorial(num) {
      if (num === 0) {
        return 1;
      }
      // 2보다 작으면 1만 리턴하면 됨
      if (num < 2) {
        return num;
      }
      return num * factorial(num - 1);
    }

    console.log(factorial(num));
  }
}

{
  // 10870번 피보나치 수
  // n번째 피보나치 수 구하기!
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
  // 다른 사람 풀이일 때 num이 2일 때 1을 return 한다는 처리를 해주면 좀 더 시간이 빨라지는 것 같다.

  let num = Number(require('fs').readFileSync('/dev/stdin').toString());

  function fibonacci(num) {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
  }

  console.log(fibonacci(num));
}

{
  // 11729번 하노이의 탑
  /**
   * 하노이의 탑 from 얄팍한 코딩 사전
   * 가장 큰 원반이 목적지의 맨 아래 놓여야 함
   * 이게 가능하려면 나머지 모든 원반이 다른 기둥에 있어야 함
   * 그런데 이게 가능하려면 또 그 나머지 원반들에서 가장 큰 원반이 목적지 맨 아래 있어야 함.
   * 점점 줄어드는 원반 수에 따라 가장 큰 원반이 도착해야할 목적지가 계속 변경되어야 한다고 생각해야 됨.
   * 내가 지금 움직이려는 것 아래로는 없다고 생각하면,
   * 하나를 한쪽에 놓으면 두개를 저쪽에 쌓을 수 있고, 두개가 저쪽에 쌓이면 3개를 이쪽에.
   * n개의 원반을 특정 기둥으로 옮기려면, 맨 아래를 제외한 원반들을 다른 기둥으로 옮기고, 맨 아래의 원반을 목적지 기둥으로 옮기고 다른 기둥에 옮겼던 원반들을 그 위에 얹는 거다.
   * 가운데 오른쪽 왔다갔다한다.
   * 원반 총 갯수가 홀수냐 짝수냐에 따라 시작할 때 맨 위 원반을 목표 기둥에 놓을 것인가 혹은 다른 기둥에 놓을 것인가가 결정됨
   * + 참고 블로그 https://nyang-in.tistory.com/210
   */

  function hanoi(num, from, other, to) {
    if (num === 0) return;
    // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동시킴
    hanoi(num - 1, from, to, other);
    // 맨 아래 원반을 목적지로 이동시킨다.
    console.log(from, to);
    // 마지막으로 다른 곳으로 옮겼던 원반들을 그 위에 얹는다.
    hanoi(num - 1, other, from, to);
  }

  hanoi(3, 1, 2, 3);
  {
    // 제출
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
  }
}
