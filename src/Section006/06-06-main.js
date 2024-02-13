// 1. Random a number in range of [0, n]
// n = 10;

function randomNumberN(n) {
  if (n <= 0) {
    return -1;
  }

  if (typeof n != 'number') {
    return undefined;
  }

  return Math.round(Math.random() * n);
}
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));
// console.log(randomNumberN(12));

// 2. Random a number in range of [a, b] with a < b ;

module.exports = randomNumberN;

// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
// console.log(randomNumberFromAtoB(2, 15));
