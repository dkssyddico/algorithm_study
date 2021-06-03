let sentense = 'This website is for losers LOL';

function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, '');
  return str;
}

const result = disemvowel(sentense);

console.log(result);
