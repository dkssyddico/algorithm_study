let sentence = 'This website is for losers LOL';

function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, '');
  return str;
}

const result = disemvowel(sentence);

console.log(result);
