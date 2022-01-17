function solution(tickets) {
  tickets.sort(); // 글자순 정렬
  let vis = Array(tickets.length).fill(false);
  var answer = [];
  function dfs(cur, cnt, path) {
    if (cnt === tickets.length && answer.length === 0) {
      //정렬했으므로 처음오는 경우의 수가 답
      answer = path;
      return;
    }
    for (let i = 0; i < tickets.length; i += 1) {
      if (vis[i]) continue;
      if (tickets[i][0] === cur) {
        // 출발하는 공항이 같다.
        vis[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]); //배열 복사해서 넣어주기
        vis[i] = false;
      }
    }
  }
  dfs('ICN', 0, ['ICN']);
  return answer;
}

/**
 * 틀린 내 풀이
 */

{
  let tickets = [
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ];
  tickets = tickets.sort();
  console.log(tickets);

  let start = 'ICN';

  let answer = [];
  let queue = [];

  function BFS(port) {
    queue.push(port);
    answer.push(port[1]);
    while (queue.length) {
      let prevPort = queue.shift();
      for (let i = 0; i < tickets.length; i++) {
        let newPort = tickets[i];
        if (prevPort[1] === newPort[0]) {
          tickets.splice(i, 1);
          BFS(newPort);
        }
      }
    }
  }

  for (let i = 0; i < tickets.length; i++) {
    let port = tickets[i];
    if (port[0] === start) {
      answer.push(port[0]);
      tickets.splice(i, 1);
      BFS(port);
    }
  }

  console.log(answer);
}
