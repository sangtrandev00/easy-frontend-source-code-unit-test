function isIncreasingNumberMethod2V2(n) {
  if (n <= 0 || n > 1000000 || n.toString().length === 1) {
    return false;
  }

  // let digitEnd = 1000000000;

  // n =123 . Prev 10.
  let remaining = n;
  let prevDigit = 10;

  while (remaining > 0) {
    //   if (digitEnd <= n % 10) return false;
    let lastDigit = remaining % 10;
    if (prevDigit <= lastDigit) return false;
    prevDigit = lastDigit;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}
console.log(isIncreasingNumberMethod2V2(123));