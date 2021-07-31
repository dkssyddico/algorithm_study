// 결혼식

// 현수는 다음 달에 결혼을 합니다.
// 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
// 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다. 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
// 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
// 만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
// ▣ 입력설명 첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
// 두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
// 시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현됩니다.
// ▣ 출력설명 첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.
// ▣ 입력예제 1) 5, [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]
// ▣ 출력예제 1) 2

function solution(friends) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  friends.sort((a, b) => {
    if (a[0] === b[0]) a[1] - b[1];
    else return a[0] - b[0];
  });
  // console.log(friends);
  for (let i = 0; i < arr.length; i++) {
    answer = 1;
    let et = 0;
    let st = 0;
    if (arr[i][0] >= st) {
      st = arr[i][0];
      et = arr[i][1];
    }
    for (let j = i + 1; j < arr.length; j++) {
      let secondStart = arr[j][0];
      if (arr[j][0] >= st && arr[j][0] < et) {
        // console.log(
        //   `first st ${st}, second start ${secondStart} first end ${et}`
        // );
        answer++;
      }
    }
    if (answer > max) max = answer;
  }
  answer = max;
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(arr));

function tSolution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeline = [];
  for (let x of arr) {
    timeline.push([x[0], 's']);
    timeline.push([x[1], 'e']);
  }
  // ASCII code 기준
  timeline.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  // timeline.sort((a, b) => {
  //   if (a[0] === b[0]) {
  //     if (a[1] === 'e') return a[0] - b[0];
  //     else return b[0] - a[0];
  //   } else return a[0] - b[0];
  // });
  let cnt = 0;
  for (let x of timeline) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(tSolution(arr));
