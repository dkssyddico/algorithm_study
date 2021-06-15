// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

// function inArray(array1, array2) {
//   let answer = [];
//   for (let i = 0; i < array1.length; i++) {
//     let word = array1[i];
//     if (word) {
//       for (let j = 0; j < array2.length; j++) {
//         if (array2[j].match(word)) {
//           answer.push(word);
//           answer = answer.filter((item, index) => answer.indexOf(item) === index).sort();
//         }
//       }
//     }
//   }
//   return answer;
// }

// 다른 사람 코드
function inArray(array1, array2) {
  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}

let a1 = ['live', 'strong', 'arp'];

let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

console.log(inArray(a1, a2));
