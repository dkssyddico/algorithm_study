let sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((sheep) => {
    if (sheep === true) {
      count++;
    } else {
      return;
    }
  });
  return count;
  // return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps(sheepArray));
