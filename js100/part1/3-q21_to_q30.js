/**
 * 문제 21
 * 문제 22: 2번
 * 문제 23: X
 */
{
  // 문제 24
  function makeCapital(string) {
    return string.toUpperCase();
  }
  console.log(makeCapital('hi'));
}

{
  // 문제 25
  function calculateWidth(height) {
    return Math.pow(height, 2) * 3.14;
  }
  console.log(calculateWidth(4));
}

{
  // 문제 26
  let planet = '수성';
  switch (planet) {
    case '수성':
      console.log('Mercury');
      break;
    case '금성':
      console.log('Venus');
      break;
    case '지구':
      console.log('Earth');
      break;
    case '화성':
      console.log('Mars');
      break;
    case '목성':
      console.log('Jupiter');
      break;
    case '토성':
      console.log('Saturn');
      break;
    case '천왕성':
      console.log('Uranus');
      break;
    case '해왕성':
      console.log('Neptune');
      break;
    default:
      console.log('행성 이름이 올바르지 않습니다.');
      break;
  }
}

{
  // 문제 27
  let students = 'yujin hyewon';
  let scores = '70 100';
  students = students.split(' ');
  scores = scores.split(' ');
  const obj = new Object();
  for (let i = 0; i < 2; i++) {
    obj[students[i]] = parseInt(scores[i]);
  }
  console.log(obj);
}

{
  // 문제 28
  let string = 'Javascript';
  function make2Gram(string) {
    for (let i = 1; i < string.length; i++) {
      console.log(`${string[i - 1]} ${string[i]}`);
    }
  }
  make2Gram(string);
}

{
  // 문제 29
  function decideCapital(a) {
    if (a === a.toUpperCase()) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
  decideCapital('c');
}

{
  // 문제 30
  let sentence = 'pineapple is yummy';
  function findIndex(sentence) {
    let regex = sentence.match(/apple/);
    console.log(regex);
    return regex.index;
  }
  console.log(findIndex(sentence));
}
