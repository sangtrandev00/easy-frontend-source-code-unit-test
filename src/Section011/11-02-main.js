function SumSnV1(n) {
  if (typeof n !== 'number') {
    return -1;
  }

  if (n < 1) {
    return -1;
  }

  if (Math.floor(n) !== n) {
    n = Math.floor(n);
  }

  if (n === 1) {
    return 1;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function SumSnV2(n) {
  if (typeof n !== 'number') {
    return -1;
  }

  if (n < 1) {
    return -1;
  }

  if (Math.floor(n) !== n) {
    n = Math.floor(n);
  }

  if (n === 1) {
    return 1;
  }

  return (n * (n + 1)) / 2;
}

module.exports = SumSnV1;
module.exports = SumSnV2;

// console.log(SumSnV2(1));
// console.log(SumSnV2(''));
// console.log(SumSnV2(0));
// console.log(SumSnV2(3));
// console.log(SumSnV2(9.9));
