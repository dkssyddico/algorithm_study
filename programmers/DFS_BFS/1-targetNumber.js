{
  let arr = [1, 1, 1, 1, 1];
  let target = 3;

  let count = 0;

  // +, - 되는 경우
  function DFS(x, sum) {
    if (x === arr.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    DFS(x + 1, sum + arr[x]);
    DFS(x + 1, sum - arr[x]);
  }

  DFS(0, 0);

  return count;
}
