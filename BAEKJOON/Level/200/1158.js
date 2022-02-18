/**
 * 조세푸스 문제
 * 첨엔 어려울 줄 알았는데
 * 그냥 K에 따라서 계속 사람을 큐의 동작처럼 맨 앞 사람 빼주고 K에 맞지 않으면 다시 큐 맨 뒤로 보내고 하면 된다.
 * 그걸 한 횟수가 K랑 일치하면 빼줘서 답에 넣어주고!
 * https://velog.io/@delicate1290/%EB%B0%B1%EC%A4%80-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C-1158%EB%B2%88 이 분 풀이에서 힌트 얻어서 짬!
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let N = Number(input[0]);
let people = [];
for (let i = 1; i < N + 1; i++) {
  people.push(i);
}

let queue = [];
let K = Number(input[1]);

// 계속 도돌이로 만드는 방법이 있는듯?
// people queue에 사람이 없어질 때까지 반복한다.

let count = 0;
while (people.length) {
  let person = people.shift();
  count++;
  if (count === K) {
    queue.push(person);
    count = 0;
  } else {
    people.push(person);
  }
}

console.log(`<${queue.join(', ')}>`);

{
  /**
   * 시간이 엄청 단축된 풀이가 있길래 가져와봤다..!!
   * 내 풀이나 다른 사람 풀이는 거의 2초대인데 이 사람은 0.1초대임.. ㄷ ㄷ
   */
  const fs = require('fs');
  const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s+/)
    .map((x) => +x);

  const n = input[0];
  const k = input[1];

  const getJosphusSequence = (n, k) => {
    let sequence = [];
    let people = [];
    let head = 0;
    for (let i = 0; i < n; i++) people[i] = i + 1;

    while (people.length) {
      head += k - 1;
      head %= people.length;
      sequence.push(people.splice(head, 1)[0]);
    }

    return '<' + sequence.join(', ') + '>';
  };

  console.log(getJosphusSequence(n, k));
}
