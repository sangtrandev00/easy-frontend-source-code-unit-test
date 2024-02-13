export function isDescreasingNumber(n) {
  if (n > 1000000 || n < 10) {
    return false;
  }
  let remaining = n;
  let prevDigit = 0;
  // compare 9865 vs 0;

  while (remaining > 0) {
    let lastDigit = remaining % 10;
    if (prevDigit >= lastDigit) {
      return false;
    }
    prevDigit = lastDigit;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

console.log(isDescreasingNumber(2222));
console.log(isDescreasingNumber(1345));
console.log(isDescreasingNumber(6543));
console.log(isDescreasingNumber(1));
