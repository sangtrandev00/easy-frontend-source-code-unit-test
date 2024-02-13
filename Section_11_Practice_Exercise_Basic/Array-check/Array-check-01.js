export function hasEvenNumberGreaterThanN(numberList, n) {
  if (numberList.length === 0) {
    return false;
  }
  let count = 0;
  numberList.forEach((number) => {
    if (number % 2 === 0 && number > n) {
      count++;
    }
  });

  return count === 0 ? false : true;
}
