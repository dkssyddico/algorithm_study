{
  let citations = [3, 0, 6, 1, 5];
  function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    var i = 0;
    while (i + 1 <= citations[i]) {
      console.log(i, citations[i]);
      i++;
    }
    return i;
  }
  console.log(solution(citations));
}
