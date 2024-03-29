{
  /**
   * 자릿수의 합
   * toString을 썼다면 더 간결하게 풀 수 있었을 것.
   * % 10을 이용해서 숫자의 각 자릿수의 합을 구할 수도 있다.
   *  */
  let nums = [128, 460, 603, 40, 521, 137, 123];
  let answer = Number.MIN_SAFE_INTEGER;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let stringNum = String(num);
    let sum = stringNum.split('').reduce((p, c) => Number(p) + Number(c), 0);
    if (sum > max) {
      answer = num;
      max = sum;
    } else if (sum === max) {
      if (num > max) {
        answer = num;
      }
    }
  }

  console.log(answer);
}

{
  /**
   * 뒤집은 소수
   */
  let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (isPrime(reversedNum(num))) {
      answer.push(reversedNum(num));
    }
  }

  function reversedNum(num) {
    let number = 0;
    while (num) {
      let left = num % 10;
      number = number * 10 + left;
      num = parseInt(num / 10);
    }
    return number;
  }

  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(answer);
}

{
  /**
   * 멘토링
   * 멘토 - 멘티가 될 수 있는 모든 경우를 다 만들어본다.
   * 그리고 모든 시험에서 멘토와 멘티가 등수가 어떻게 되는지 판별한다.
   * 모든 시험에서 멘토가 멘티의 등수보다 적으면(이래야 시험을 더 잘본거니까) 답에 1을 올려줄 수 있다.
   */
  let test = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];

  let testNum = test.length;
  let students = test[0].length;
  let answer = [];
  // 멘토 멘티가 될 수 있는 경우의 수 구하기

  for (let i = 1; i <= students; i++) {
    for (let j = 1; j <= students; j++) {
      let testCount = 0;
      for (let x = 0; x < testNum; x++) {
        let rankOne = 0;
        let rankTwo = 0;
        for (let y = 0; y < students; y++) {
          if (test[x][y] === i) {
            rankOne = y;
          }
          if (test[x][y] === j) {
            rankTwo = y;
          }
        }
        if (rankOne < rankTwo) testCount += 1;
      }
      if (testCount === testNum) {
        answer.push([i, j]);
      }
    }
  }

  console.log(answer);
}

{
  /**
   * 졸업 선물
   * 선물과 배송비를 합쳐서 가격이 저렴한 순으로 정렬하기.
   * 선물 하나씩 50% 할인을 적용해서 답을 구해보기.
   * 다시 푸는 건데도 생각이 안나서 이전 거 참고..
   * 나는 하나만 할인 해주고 나머지 다 더해주는 식으로 해서 답이 절대 안나왔었다ㅠ(이중 for문)
   */

  let students = 5;
  let budget = 28;

  let presents = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];

  let answer = 0;

  presents = presents.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < presents.length; i++) {
    let money = budget - (presents[i][0] / 2 + presents[i][1]);
    let counts = 1;
    for (let j = 0; i < presents.length; j++) {
      let present = presents[j];
      if (i !== j && present[0] + present[1] > money) {
        break;
      }
      if (i !== j && present[0] + present[1] <= money) {
        money -= present[0] + present[1];
        counts += 1;
      }
    }
    answer = Math.max(answer, counts);
  }

  console.log(answer);
}

{
  /**
   * K번째 수
   * 처음에 Set를 가지고 중복 제거하면 되겠다 했는데
   * Array.from을 가지고 Set를 배열로 만들 수 있다는 걸 인지하지 못했음.
   * 그래서 array.includes를 통해 중복 제거하려고 했음.
   */
  let target = 3;
  let nums = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  let numCounts = 10;

  let sumArr = [];

  for (let i = 0; i < numCounts; i++) {
    let a = nums[i];
    for (let j = i + 1; j < numCounts; j++) {
      let b = nums[j];
      for (let k = j + 1; k < numCounts; k++) {
        let c = nums[k];
        let sum = a + b + c;
        if (sumArr.includes(sum)) {
          continue;
        } else {
          sumArr.push(sum);
        }
      }
    }
  }

  sumArr = sumArr.sort((a, b) => b - a);

  console.log(sumArr[target - 1]);

  {
    // Set로 푸는 방법
    let target = 3;
    let nums = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
    let numCounts = 10;

    let sumArr = new Set();

    for (let i = 0; i < numCounts; i++) {
      let a = nums[i];
      for (let j = i + 1; j < numCounts; j++) {
        let b = nums[j];
        for (let k = j + 1; k < numCounts; k++) {
          let c = nums[k];
          let sum = a + b + c;
          sumArr.add(sum);
        }
      }
    }

    sumArr = Array.from(sumArr).sort((a, b) => b - a);

    console.log(sumArr);
  }
}
