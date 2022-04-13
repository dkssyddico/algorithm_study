/**
 * 링크와 스타트
 * 이번껀 전에 문제랑 다르게 짝수 인원이 있는 게 아니고, 같은 인원수가 아니어도 된다.
 * 백준 풀이 참고.
 * 그런데 어제 내 풀이도 배열에 push, 재귀, pop이었는데 왜 틀렸다고 나올까.. 흠
 * 두 개의 배열을 만들고 push, 재귀, pop 해주고
 * 재귀의 단계가 타겟이랑 같을 때 두 배열 안에 아이템이 들어있는지 확인해준다.
 * 6명일 때. 
[ 0, 1, 2, 3, 4 ] [ 5 ]
ours 50 theirs 0
--------
[ 0, 1, 2, 3, 5 ] [ 4 ]
ours 54 theirs 0
--------
[ 0, 1, 2, 3 ] [ 4, 5 ]
ours 24 theirs 10
--------
[ 0, 1, 2, 4, 5 ] [ 3 ]
ours 58 theirs 0
--------
[ 0, 1, 2, 4 ] [ 3, 5 ]
ours 27 theirs 9
--------
[ 0, 1, 2, 5 ] [ 3, 4 ]
ours 30 theirs 8
--------
[ 0, 1, 2 ] [ 3, 4, 5 ]
ours 9 theirs 27
--------
[ 0, 1, 3, 4, 5 ] [ 2 ]
ours 62 theirs 0
--------
[ 0, 1, 3, 4 ] [ 2, 5 ]
ours 30 theirs 8
--------
[ 0, 1, 3, 5 ] [ 2, 4 ]
ours 33 theirs 7
--------
[ 0, 1, 3 ] [ 2, 4, 5 ]
ours 11 theirs 25
--------
[ 0, 1, 4, 5 ] [ 2, 3 ]
ours 36 theirs 6
--------
[ 0, 1, 4 ] [ 2, 3, 5 ]
ours 13 theirs 23
--------
[ 0, 1, 5 ] [ 2, 3, 4 ]
ours 15 theirs 21
--------
[ 0, 1 ] [ 2, 3, 4, 5 ]
ours 2 theirs 48
--------
[ 0, 2, 3, 4, 5 ] [ 1 ]
ours 66 theirs 0
--------
[ 0, 2, 3, 4 ] [ 1, 5 ]
ours 33 theirs 7
--------
[ 0, 2, 3, 5 ] [ 1, 4 ]
ours 36 theirs 6
--------
[ 0, 2, 3 ] [ 1, 4, 5 ]
ours 13 theirs 23
--------
[ 0, 2, 4, 5 ] [ 1, 3 ]
ours 39 theirs 5
--------
[ 0, 2, 4 ] [ 1, 3, 5 ]
ours 15 theirs 21
--------
[ 0, 2, 5 ] [ 1, 3, 4 ]
ours 17 theirs 19
--------
[ 0, 2 ] [ 1, 3, 4, 5 ]
ours 3 theirs 45
--------
[ 0, 3, 4, 5 ] [ 1, 2 ]
ours 42 theirs 4
--------
[ 0, 3, 4 ] [ 1, 2, 5 ]
ours 17 theirs 19
--------
[ 0, 3, 5 ] [ 1, 2, 4 ]
ours 19 theirs 17
--------
[ 0, 3 ] [ 1, 2, 4, 5 ]
ours 4 theirs 42
--------
[ 0, 4, 5 ] [ 1, 2, 3 ]
ours 21 theirs 15
--------
[ 0, 4 ] [ 1, 2, 3, 5 ]
ours 5 theirs 39
--------
[ 0, 5 ] [ 1, 2, 3, 4 ]
ours 6 theirs 36
--------
[ 0 ] [ 1, 2, 3, 4, 5 ]
ours 0 theirs 70
--------
[ 1, 2, 3, 4, 5 ] [ 0 ]
ours 70 theirs 0
--------
[ 1, 2, 3, 4 ] [ 0, 5 ]
ours 36 theirs 6
--------
[ 1, 2, 3, 5 ] [ 0, 4 ]
ours 39 theirs 5
--------
[ 1, 2, 3 ] [ 0, 4, 5 ]
ours 15 theirs 21
--------
[ 1, 2, 4, 5 ] [ 0, 3 ]
ours 42 theirs 4
--------
[ 1, 2, 4 ] [ 0, 3, 5 ]
ours 17 theirs 19
--------
[ 1, 2, 5 ] [ 0, 3, 4 ]
ours 19 theirs 17
--------
[ 1, 2 ] [ 0, 3, 4, 5 ]
ours 4 theirs 42
--------
[ 1, 3, 4, 5 ] [ 0, 2 ]
ours 45 theirs 3
--------
[ 1, 3, 4 ] [ 0, 2, 5 ]
ours 19 theirs 17
--------
[ 1, 3, 5 ] [ 0, 2, 4 ]
ours 21 theirs 15
--------
[ 1, 3 ] [ 0, 2, 4, 5 ]
ours 5 theirs 39
--------
[ 1, 4, 5 ] [ 0, 2, 3 ]
ours 23 theirs 13
--------
[ 1, 4 ] [ 0, 2, 3, 5 ]
ours 6 theirs 36
--------
[ 1, 5 ] [ 0, 2, 3, 4 ]
ours 7 theirs 33
--------
[ 1 ] [ 0, 2, 3, 4, 5 ]
ours 0 theirs 66
--------
[ 2, 3, 4, 5 ] [ 0, 1 ]
ours 48 theirs 2
--------
[ 2, 3, 4 ] [ 0, 1, 5 ]
ours 21 theirs 15
--------
[ 2, 3, 5 ] [ 0, 1, 4 ]
ours 23 theirs 13
--------
[ 2, 3 ] [ 0, 1, 4, 5 ]
ours 6 theirs 36
--------
[ 2, 4, 5 ] [ 0, 1, 3 ]
ours 25 theirs 11
--------
[ 2, 4 ] [ 0, 1, 3, 5 ]
ours 7 theirs 33
--------
[ 2, 5 ] [ 0, 1, 3, 4 ]
ours 8 theirs 30
--------
[ 2 ] [ 0, 1, 3, 4, 5 ]
ours 0 theirs 62
--------
[ 3, 4, 5 ] [ 0, 1, 2 ]
ours 27 theirs 9
--------
[ 3, 4 ] [ 0, 1, 2, 5 ]
ours 8 theirs 30
--------
[ 3, 5 ] [ 0, 1, 2, 4 ]
ours 9 theirs 27
--------
[ 3 ] [ 0, 1, 2, 4, 5 ]
ours 0 theirs 58
--------
[ 4, 5 ] [ 0, 1, 2, 3 ]
ours 10 theirs 24
--------
[ 4 ] [ 0, 1, 2, 3, 5 ]
ours 0 theirs 54
--------
[ 5 ] [ 0, 1, 2, 3, 4 ]
ours 0 theirs 50
--------
 */

// const input = () => {
//   const [N, ...lines] = require('fs').readFileSync(0, 'utf8').trim().split('\n');

//   return [Number(N), lines.map((line) => line.split(' ').map(Number))];
// };

const compute = (N, S) => {
  const sum = (team) => {
    let result = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        result += S[team[i]][team[j]] + S[team[j]][team[i]];
      }
    }

    return result;
  };

  let min = Infinity;
  const ours = [];
  const theirs = [];

  const recursive = (K) => {
    if (K === N) {
      if (ours.length === 0 || theirs.length === 0) return;
      const diff = Math.abs(sum(ours) - sum(theirs));
      console.log(ours, theirs);
      console.log('ours', sum(ours), 'theirs', sum(theirs));
      console.log('--------');
      min = Math.min(min, diff);
      return;
    }

    ours.push(K);
    recursive(K + 1);
    ours.pop();

    theirs.push(K);
    recursive(K + 1);
    theirs.pop();
  };

  recursive(0);

  return min;
};

const input = [
  6,
  [
    [0, 1, 2, 3, 4, 5],
    [1, 0, 2, 3, 4, 5],
    [1, 2, 0, 3, 4, 5],
    [1, 2, 3, 0, 4, 5],
    [1, 2, 3, 4, 0, 5],
    [1, 2, 3, 4, 5, 0],
  ],
];

console.log(compute(...input));
